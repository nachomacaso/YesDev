const formatter = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'usd' });
const formatter2 = new Intl.NumberFormat(undefined, { minimumFractionDigits: 1 });
export const formatCurrency = number => formatter.format(number);

export const formatMW = number => formatter2.format(number);
