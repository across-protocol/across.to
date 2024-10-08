/* tslint:disable */
/* eslint-disable */
// @ts-nocheck
/**
 * Ampli - A strong typed wrapper for your Analytics
 *
 * This file is generated by Amplitude.
 * To update run 'ampli pull marketing-website'
 *
 * Required dependencies: @amplitude/analytics-browser@^1.3.0
 * Tracking Plan Version: 50
 * Build: 1.0.0
 * Runtime: browser:typescript-ampli-v2
 *
 * [View Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest)
 *
 * [Full Setup Instructions](https://data.amplitude.com/risklabs/Risk%20Labs/implementation/marketing-website)
 */

import * as amplitude from "@amplitude/analytics-browser";

export type Environment = "production" | "development" | "testing";

export const ApiKey: Record<Environment, string> = {
  production: "",
  development: "",
  testing: "",
};

/**
 * Default Amplitude configuration options. Contains tracking plan information.
 */
export const DefaultConfiguration: BrowserOptions = {
  plan: {
    version: "50",
    branch: "main",
    source: "marketing-website",
    versionId: "5b6bde07-5ed3-4021-967f-fdaec4b35a87",
  },
  ...{
    ingestionMetadata: {
      sourceName: "browser-typescript-ampli",
      sourceVersion: "2.0.0",
    },
  },
};

export interface LoadOptionsBase {
  disabled?: boolean;
}

export type LoadOptionsWithEnvironment = LoadOptionsBase & {
  environment: Environment;
  client?: { configuration?: BrowserOptions };
};
export type LoadOptionsWithApiKey = LoadOptionsBase & {
  client: { apiKey: string; configuration?: BrowserOptions };
};
export type LoadOptionsWithClientInstance = LoadOptionsBase & {
  client: { instance: BrowserClient };
};

export type LoadOptions =
  | LoadOptionsWithEnvironment
  | LoadOptionsWithApiKey
  | LoadOptionsWithClientInstance;

export interface IdentifyProperties {
  AcxVolumeNative?: any;
  AcxVolumeUsd?: any;
  AllAssetsAllNetworksWalletCurrentBalanceUsd?: string;
  /**
   * List of wallet addresses connected during Wallet Connect Transaction Completed event.
   *
   * | Rule | Value |
   * |---|---|
   * | Unique Items | true |
   * | Item Type | string |
   */
  AllWalletAddressesConnected?: string[];
  /**
   * Chain ids of wallet addresses connected
   *
   * | Rule | Value |
   * |---|---|
   * | Unique Items | true |
   * | Item Type | string |
   */
  AllWalletChainIds?: string[];
  ArbitrumAcxWalletCurrentBalance?: any;
  ArbitrumBalWalletCurrentBalance?: any;
  ArbitrumDaiWalletCurrentBalance?: any;
  ArbitrumEthWalletCurrentBalance?: any;
  ArbitrumUmaWalletCurrentBalance?: any;
  ArbitrumUsdcWalletCurrentBalance?: any;
  ArbitrumWbtcWalletCurrentBalance?: any;
  ArbitrumWethWalletCurrentBalance?: any;
  BalVolumeNative?: any;
  BalVolumeUsd?: any;
  BobaAcxWalletCurrentBalance?: any;
  BobaBobaWalletCurrentBalance?: any;
  BobaDaiWalletCurrentBalance?: any;
  BobaEthWalletCurrentBalance?: any;
  BobaUmaWalletCurrentBalance?: any;
  BobaUsdcWalletCurrentBalance?: any;
  BobaVolumeNative?: any;
  BobaVolumeUsd?: any;
  BobaWbtcWalletCurrentBalance?: any;
  BobaWethWalletCurrentBalance?: any;
  DaiVolumeNative?: any;
  DaiVolumeUsd?: any;
  EthereumAcxWalletCurrentBalance?: any;
  EthereumBalWalletCurrentBalance?: any;
  EthereumBobaWalletCurrentBalance?: any;
  EthereumDaiWalletCurrentBalance?: any;
  EthereumEthWalletCurrentBalance?: any;
  EthereumUmaWalletCurrentBalance?: any;
  EthereumUsdcWalletCurrentBalance?: any;
  EthereumWbtcWalletCurrentBalance?: any;
  EthereumWethWalletCurrentBalance?: any;
  EthVolumeNative?: any;
  EthVolumeUsd?: any;
  initial_dclid?: any;
  initial_fbclid?: any;
  initial_gbraid?: any;
  initial_gclid?: any;
  initial_ko_click_id?: any;
  initial_msclkid?: any;
  initial_referrer?: any;
  initial_referring_domain?: any;
  initial_ttclid?: any;
  initial_twclid?: any;
  initial_utm_campaign?: any;
  initial_utm_content?: any;
  initial_utm_id?: any;
  initial_utm_medium?: any;
  initial_utm_source?: any;
  initial_utm_term?: any;
  initial_wbraid?: any;
  L1L2Transfers?: any;
  L2L1Transfers?: any;
  L2L2Transfers?: any;
  OptimismAcxWalletCurrentBalance?: any;
  OptimismBalWalletCurrentBalance?: any;
  OptimismDaiWalletCurrentBalance?: any;
  OptimismEthWalletCurrentBalance?: any;
  OptimismUmaWalletCurrentBalance?: any;
  OptimismUsdcWalletCurrentBalance?: any;
  OptimismWbtcWalletCurrentBalance?: any;
  OptimismWethWalletCurrentBalance?: any;
  PolygonAcxWalletCurrentBalance?: any;
  PolygonBalWalletCurrentBalance?: any;
  PolygonDaiWalletCurrentBalance?: any;
  PolygonUmaWalletCurrentBalance?: any;
  PolygonUsdcWalletCurrentBalance?: any;
  PolygonWbtcWalletCurrentBalance?: any;
  PolygonWethWalletCurrentBalance?: any;
  referrer?: any;
  referring_domain?: any;
  TotalTransfers?: any;
  TotalVolumeUsd?: any;
  UmaVolumeNative?: any;
  UmaVolumeUsd?: any;
  UsdcVolumeNative?: any;
  UsdcVolumeUsd?: any;
  /**
   * Currently connected wallet address
   */
  WalletAddress?: string;
  /**
   * Type of wallet connected
   */
  WalletType?: string;
  WbtcVolumeNative?: any;
  WbtcVolumeUsd?: any;
  WethVolumeNative?: any;
  WethVolumeUsd?: any;
}

export interface BlogSearchProperties {
  /**
   * | Rule | Value |
   * |---|---|
   * | Enum Values | splashPage, bridgePage, poolPage, rewardsPage, transactionsPage, stakingPage, referralPage, airdropPage, 404Page, marketingHomePage, marketingBridgePage, marketingAcrossPlusPage, marketingSettlementPage, depositStatusPage, marketingBlogSpecificPage, marketingBlogHomePage |
   */
  page:
    | "splashPage"
    | "bridgePage"
    | "poolPage"
    | "rewardsPage"
    | "transactionsPage"
    | "stakingPage"
    | "referralPage"
    | "airdropPage"
    | "404Page"
    | "marketingHomePage"
    | "marketingBridgePage"
    | "marketingAcrossPlusPage"
    | "marketingSettlementPage"
    | "depositStatusPage"
    | "marketingBlogSpecificPage"
    | "marketingBlogHomePage";
  search: string;
}

export interface BridgeButtonClickedProperties {
  /**
   * | Rule | Value |
   * |---|---|
   * | Enum Values | splashPage, bridgePage, poolPage, rewardsPage, transactionsPage, stakingPage, referralPage, airdropPage, 404Page, marketingHomePage, marketingBridgePage, marketingAcrossPlusPage, marketingSettlementPage, depositStatusPage, marketingBlogSpecificPage, marketingBlogHomePage |
   */
  page:
    | "splashPage"
    | "bridgePage"
    | "poolPage"
    | "rewardsPage"
    | "transactionsPage"
    | "stakingPage"
    | "referralPage"
    | "airdropPage"
    | "404Page"
    | "marketingHomePage"
    | "marketingBridgePage"
    | "marketingAcrossPlusPage"
    | "marketingSettlementPage"
    | "depositStatusPage"
    | "marketingBlogSpecificPage"
    | "marketingBlogHomePage";
  /**
   * | Rule | Value |
   * |---|---|
   * | Enum Values | navbar, mobileNavSidebar, addLiquidityForm, removeLiquidityForm, airdropSplashFlow, referralTable, rewardsTable, unstakeForm, myTransactionsTable, bridgeForm, claimReferralRewardsForm, stakeForm, depositConfirmation, marketingHero |
   */
  section:
    | "navbar"
    | "mobileNavSidebar"
    | "addLiquidityForm"
    | "removeLiquidityForm"
    | "airdropSplashFlow"
    | "referralTable"
    | "rewardsTable"
    | "unstakeForm"
    | "myTransactionsTable"
    | "bridgeForm"
    | "claimReferralRewardsForm"
    | "stakeForm"
    | "depositConfirmation"
    | "marketingHero";
}

export interface CtaButtonClickedProperties {
  /**
   * | Rule | Value |
   * |---|---|
   * | Enum Values | splashPage, bridgePage, poolPage, rewardsPage, transactionsPage, stakingPage, referralPage, airdropPage, 404Page, marketingHomePage, marketingBridgePage, marketingAcrossPlusPage, marketingSettlementPage, depositStatusPage, marketingBlogSpecificPage, marketingBlogHomePage |
   */
  page:
    | "splashPage"
    | "bridgePage"
    | "poolPage"
    | "rewardsPage"
    | "transactionsPage"
    | "stakingPage"
    | "referralPage"
    | "airdropPage"
    | "404Page"
    | "marketingHomePage"
    | "marketingBridgePage"
    | "marketingAcrossPlusPage"
    | "marketingSettlementPage"
    | "depositStatusPage"
    | "marketingBlogSpecificPage"
    | "marketingBlogHomePage";
  /**
   * | Rule | Value |
   * |---|---|
   * | Enum Values | navbar, mobileNavSidebar, addLiquidityForm, removeLiquidityForm, airdropSplashFlow, referralTable, rewardsTable, unstakeForm, myTransactionsTable, bridgeForm, claimReferralRewardsForm, stakeForm, depositConfirmation, marketingHero |
   */
  section:
    | "navbar"
    | "mobileNavSidebar"
    | "addLiquidityForm"
    | "removeLiquidityForm"
    | "airdropSplashFlow"
    | "referralTable"
    | "rewardsTable"
    | "unstakeForm"
    | "myTransactionsTable"
    | "bridgeForm"
    | "claimReferralRewardsForm"
    | "stakeForm"
    | "depositConfirmation"
    | "marketingHero";
}

export interface PageViewedProperties {
  /**
   * Hash to identify the UI version when event was triggered
   */
  gitCommitHash: string;
  /**
   * Boolean if this is first time identifed user has visited page. Should be Null for anonymous users.
   */
  isInitialPageView: boolean;
  origin: string;
  /**
   * | Rule | Value |
   * |---|---|
   * | Enum Values | splashPage, bridgePage, poolPage, rewardsPage, transactionsPage, stakingPage, referralPage, airdropPage, 404Page, marketingHomePage, marketingBridgePage, marketingAcrossPlusPage, marketingSettlementPage, depositStatusPage, marketingBlogSpecificPage, marketingBlogHomePage |
   */
  page:
    | "splashPage"
    | "bridgePage"
    | "poolPage"
    | "rewardsPage"
    | "transactionsPage"
    | "stakingPage"
    | "referralPage"
    | "airdropPage"
    | "404Page"
    | "marketingHomePage"
    | "marketingBridgePage"
    | "marketingAcrossPlusPage"
    | "marketingSettlementPage"
    | "depositStatusPage"
    | "marketingBlogSpecificPage"
    | "marketingBlogHomePage";
  path: string;
  /**
   * Address of referee, null if no referral used
   */
  referralProgramAddress?: string;
  /**
   * Referring url
   */
  referrer?: string;
  /**
   * The current URL of the website on which this event was generated
   */
  siteUrl?: string;
}

export class Identify implements BaseEvent {
  event_type = amplitude.Types.SpecialEventType.IDENTIFY;

  constructor(public event_properties?: IdentifyProperties) {
    this.event_properties = event_properties;
  }
}

export class ApplicationLoaded implements BaseEvent {
  event_type = "ApplicationLoaded";
}

export class BlogSearch implements BaseEvent {
  event_type = "BlogSearch";

  constructor(public event_properties: BlogSearchProperties) {
    this.event_properties = event_properties;
  }
}

export class BridgeButtonClicked implements BaseEvent {
  event_type = "BridgeButtonClicked";

  constructor(public event_properties: BridgeButtonClickedProperties) {
    this.event_properties = event_properties;
  }
}

export class CtaButtonClicked implements BaseEvent {
  event_type = "CTAButtonClicked";

  constructor(public event_properties: CtaButtonClickedProperties) {
    this.event_properties = event_properties;
  }
}

export class PageViewed implements BaseEvent {
  event_type = "PageViewed";

  constructor(public event_properties: PageViewedProperties) {
    this.event_properties = event_properties;
  }
}

export type PromiseResult<T> = { promise: Promise<T | void> };

const getVoidPromiseResult = () => ({ promise: Promise.resolve() });

// prettier-ignore
export class Ampli {
  private disabled: boolean = false;
  private amplitude?: BrowserClient;

  get client(): BrowserClient {
    this.isInitializedAndEnabled();
    return this.amplitude!;
  }

  get isLoaded(): boolean {
    return this.amplitude != null;
  }

  private isInitializedAndEnabled(): boolean {
    if (!this.amplitude) {
      console.error('ERROR: Ampli is not yet initialized. Have you called ampli.load() on app start?');
      return false;
    }
    return !this.disabled;
  }

  /**
   * Initialize the Ampli SDK. Call once when your application starts.
   *
   * @param options Configuration options to initialize the Ampli SDK with.
   */
  load(options: LoadOptions): PromiseResult<void> {
    this.disabled = options.disabled ?? false;

    if (this.amplitude) {
      console.warn('WARNING: Ampli is already intialized. Ampli.load() should be called once at application startup.');
      return getVoidPromiseResult();
    }

    let apiKey: string | null = null;
    if (options.client && 'apiKey' in options.client) {
      apiKey = options.client.apiKey;
    } else if ('environment' in options) {
      apiKey = ApiKey[options.environment];
    }

    if (options.client && 'instance' in options.client) {
      this.amplitude = options.client.instance;
    } else if (apiKey) {
      this.amplitude = amplitude.createInstance();
      const configuration = (options.client && 'configuration' in options.client) ? options.client.configuration : {};
      return this.amplitude.init(apiKey, undefined, { ...DefaultConfiguration, ...configuration });
    } else {
      console.error("ERROR: ampli.load() requires 'environment', 'client.apiKey', or 'client.instance'");
    }

    return getVoidPromiseResult();
  }

  /**
   * Identify a user and set user properties.
   *
   * @param userId The user's id.
   * @param properties The user properties.
   * @param options Optional event options.
   */
  identify(
    userId: string | undefined,
    properties?: IdentifyProperties,
    options?: EventOptions,
  ): PromiseResult<Result> {
    if (!this.isInitializedAndEnabled()) {
      return getVoidPromiseResult();
    }

    if (userId) {
      options = {...options,  user_id: userId};
    }

    const amplitudeIdentify = new amplitude.Identify();
    const eventProperties = properties;
    if (eventProperties != null) {
      for (const [key, value] of Object.entries(eventProperties)) {
        amplitudeIdentify.set(key, value);
      }
    }
    return this.amplitude!.identify(
      amplitudeIdentify,
      options,
    );
  }

 /**
  * Flush the event.
  */
  flush() : PromiseResult<Result> {
    if (!this.isInitializedAndEnabled()) {
      return getVoidPromiseResult();
    }

    return this.amplitude!.flush();
  }

  /**
   * Track event
   *
   * @param event The event to track.
   * @param options Optional event options.
   */
  track(event: Event, options?: EventOptions): PromiseResult<Result> {
    if (!this.isInitializedAndEnabled()) {
      return getVoidPromiseResult();
    }

    return this.amplitude!.track(event, undefined, options);
  }

  /**
   * ApplicationLoaded
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/ApplicationLoaded)
   *
   * App is loaded
   *
   * Owner: James Morris
   *
   * @param options Amplitude event options.
   */
  applicationLoaded(
    options?: EventOptions,
  ) {
    return this.track(new ApplicationLoaded(), options);
  }

  /**
   * BlogSearch
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/BlogSearch)
   *
   * Event has no description in tracking plan.
   *
   * @param properties The event's properties (e.g. page)
   * @param options Amplitude event options.
   */
  blogSearch(
    properties: BlogSearchProperties,
    options?: EventOptions,
  ) {
    return this.track(new BlogSearch(properties), options);
  }

  /**
   * BridgeButtonClicked
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/BridgeButtonClicked)
   *
   * Event has no description in tracking plan.
   *
   * @param properties The event's properties (e.g. page)
   * @param options Amplitude event options.
   */
  bridgeButtonClicked(
    properties: BridgeButtonClickedProperties,
    options?: EventOptions,
  ) {
    return this.track(new BridgeButtonClicked(properties), options);
  }

  /**
   * CTAButtonClicked
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/CTAButtonClicked)
   *
   * When an Across Marketing CTA is clicked
   *
   * @param properties The event's properties (e.g. page)
   * @param options Amplitude event options.
   */
  ctaButtonClicked(
    properties: CtaButtonClickedProperties,
    options?: EventOptions,
  ) {
    return this.track(new CtaButtonClicked(properties), options);
  }

  /**
   * PageViewed
   *
   * [View in Tracking Plan](https://data.amplitude.com/risklabs/Risk%20Labs/events/main/latest/PageViewed)
   *
   * User views page
   *
   * Owner: James Morris
   *
   * @param properties The event's properties (e.g. gitCommitHash)
   * @param options Amplitude event options.
   */
  pageViewed(
    properties: PageViewedProperties,
    options?: EventOptions,
  ) {
    return this.track(new PageViewed(properties), options);
  }
}

export const ampli = new Ampli();

// BASE TYPES
type BrowserOptions = amplitude.Types.BrowserOptions;

export type BrowserClient = amplitude.Types.BrowserClient;
export type BaseEvent = amplitude.Types.BaseEvent;
export type IdentifyEvent = amplitude.Types.IdentifyEvent;
export type GroupEvent = amplitude.Types.GroupIdentifyEvent;
export type Event = amplitude.Types.Event;
export type EventOptions = amplitude.Types.EventOptions;
export type Result = amplitude.Types.Result;
