export const convertToCurrency = (price: number, currency: string) => {
    return price.toLocaleString(currency)
  }