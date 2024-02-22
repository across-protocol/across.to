export type AMPLITUDE_PAGE =
  | "404Page"
  | "marketingHomePage"
  | "marketingBridgePage"
  | "marketingAcrossPlusPage"
  | "marketingSettlementPage";

export const AMPLITUDE_PAGE_LOOKUP: Record<string, AMPLITUDE_PAGE> = {
  "/": "marketingHomePage",
  "/across-bridge": "marketingBridgePage",
  "/across-plus": "marketingAcrossPlusPage",
  "/across-settlement": "marketingSettlementPage",
};
