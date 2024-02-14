import numeral from "numeral";

/**
 * Formats a number into a human readable format
 * @param num The number to format
 * @returns A human readable format. I.e. 1000 -> 1K, 1001 -> 1K+
 */
export function humanReadableNumber(num: number, decimals = 0): string {
  if (num <= 0) return "0";
  return (
    numeral(num)
      .format(decimals <= 0 ? "0a" : `0.${"0".repeat(decimals)}a`)
      .toUpperCase() + "+"
  );
}
