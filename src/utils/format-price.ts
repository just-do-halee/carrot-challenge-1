export function formatPrice(price: number, currencyCode?: string): string {
  const options: Intl.NumberFormatOptions = {
    minimumFractionDigits: 0,
    maximumFractionDigits: 4,
  };

  if (currencyCode) {
    options.style = "currency";
    options.currency = currencyCode;
  }

  return new Intl.NumberFormat("en-US", options).format(price);
}
