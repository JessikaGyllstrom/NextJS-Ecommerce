export function formatCurrency(
  amount: number,
  currencyCode: string = "USD"
): string {
  try {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: currencyCode.toLocaleUpperCase(),
    }).format(amount);
  } catch (error) {
    console.log("Error formatting currency:", currencyCode, error);
    return `{currencyCode.toUpperCase()} ${amount.toFixed(2)}`;
  }
}
