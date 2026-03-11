---
name: across protocol skill for agents
description: End-to-end Across Protocol integration playbook. Default to Swap API for all crosschain bridging and swapping. Covers intent lifecycle, Swap API integration, embedded crosschain actions, deposit tracking, fee collection, and security checklists.
user-invocable: true
---

# Across Protocol Development Skill

## What this Skill is for
Use this Skill when the user asks for:
- Crosschain bridge or swap integration (any-to-any token transfers)
- Wallet or dApp integration with Across APIs
- Embedded crosschain actions (bridge + mint/stake/deposit in one tx)
- Deposit tracking and status monitoring
- Fee quoting, transfer limits, or route discovery
- Integrator fee collection setup
- Onchain intent construction (ERC-7683 / SpokePool deposits)
- Relayer operation or configuration
- Security review of crosschain integration code

## Default stack decisions (opinionated)

### 1. Swap API first (recommended for most integrators)
- Use `GET /swap/approval` for all crosschain swaps. It returns executable calldata — sign and submit.
- Use `POST /swap/approval` when you need embedded destination actions (mint, stake, deposit).
- The Swap API handles origin swaps, bridging, and destination swaps in a single call.
- Supports `appFee` + `appFeeRecipient` natively for integrator fee collection.


### 2. Trade type selection
- **exactInput** (default): User specifies how much to send. Best for "swap X tokens" flows.
- **minOutput**: User specifies minimum to receive. Best for simple swaps without post-bridge actions.
- **exactOutput**: User needs a precise amount on destination. Best for multi-step flows (e.g., exact ERC-20 amount for a mint). Transaction reverts if exact amount can't be delivered.

### 3. Slippage
- Default to `slippage=auto` — the API picks an optimal value.
- Only set a numeric slippage (0 to 1) when the user has a specific tolerance requirement.
- Numeric slippage splits evenly across origin and destination legs.

### 4. Refund behavior
- **B2B / A2B routes** (no destination swap): refunds default to origin chain.
- **B2A / A2A routes** (destination swap involved): refunds default to destination chain.
- Override with `refundOnOrigin=true/false` when needed.
- Refund recipient priority: `refundAddress` > `recipient` > `depositor`.

## Operating procedure (how to execute tasks)

### 1. Classify the task
- **UI/wallet integration** — connecting a dApp to Across for crosschain transfers
- **Backend/script** — server-side bridging, bot-driven transfers
- **Embedded actions** — bridge + post-bridge contract call in one tx
- **Tracking/monitoring** — deposit status, fill confirmation
- **On-chain/ERC-7683** — direct SpokePool or AcrossOriginSettler interaction
- **Relayer operation** — running or configuring a relayer node

### 2. Pick the right integration path

| Task | Use |
|------|-----|
| Crosschain swap (any token to any token) | Swap API `GET /swap/approval` |
| Bridge + destination action (mint, stake) | Swap API `POST /swap/approval` with `actions` body |
| Track a deposit | `GET /deposit/status` with `depositTxHash` or `originChainId` + `depositId` |

### 3. Implement with Across-specific correctness
Always be explicit about:
- **Integrator ID** — 2-byte hex string, required for production. Register to get one.
- **Token addresses** — must match the specific chain. Use wrapped addresses for native tokens (WETH, not ETH).
- **Amount units** — always in smallest unit (wei for ETH, 1e6 for USDC, 1e18 for WETH).
- **Chain IDs** — use exact numeric chain IDs, not chain names.
- **Approval transactions** — check the `approvalTxns` array in the Swap API response before submitting the swap tx.
- **Do not cache** — `/swap/approval` and `/suggested-fees` responses are derived from on-chain state and go stale every block.

### 4. Test on testnet, ship on mainnet
- Testnet base URL: `https://testnet.across.to/api`
- Use small amounts (~$10) on testnet. Testnet fills take ~1 minute (vs ~2 seconds on mainnet).
- Testnet relayers are manually funded — don't test with large amounts.
- Major recommendation: always work on mainnet if possible.
- Switch to mainnet (`https://app.across.to/api`) once the integration logic is verified.

### 5. Deliverable expectations
When implementing changes, provide:
- Exact files changed with diffs
- Commands to install, build, and test
- A **risk notes** section for anything touching: signing, fees, slippage, token approvals, refund handling, or crosschain message construction
