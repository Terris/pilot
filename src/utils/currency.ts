const NUMBER_FORMAT = new Intl.NumberFormat(["en-US"], {
  style: "currency",
  currency: "USD",
  currencyDisplay: "symbol",
});

export function stringToNumber(amount: string): number {
  return Number(amount);
}

export const currencyStringToNumberString = (amount: string): string => {
  return amount.replace(/[^0-9.-]+/g, ""); // Remove characters that are not numbers or a decimal point
};

export const numberToCurrencyDisplay = (amount: number, currency?: string) =>
  NUMBER_FORMAT.format(amount);

// Convert currency to cents
export const currencyNumberToCents = (
  amount: string | number,
  currency?: string
): number => {
  const amountNumber =
    typeof amount === "string"
      ? stringToNumber(currencyStringToNumberString(amount))
      : amount;

  const parts = NUMBER_FORMAT.formatToParts(amountNumber);
  let zeroDecimalCurrency: boolean = true;
  for (let part of parts) {
    if (part.type === "decimal") {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amountNumber : Math.round(amountNumber * 100);
};

// Convert cents to float
export const centsToAmount = (amount: number): number => {
  const parts = NUMBER_FORMAT.formatToParts(amount);
  let zeroDecimalCurrency: boolean = true;
  for (let part of parts) {
    if (part.type === "decimal") {
      zeroDecimalCurrency = false;
    }
  }
  return zeroDecimalCurrency ? amount : Math.round(amount / 100);
};
