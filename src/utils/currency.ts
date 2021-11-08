const MX = new Intl.NumberFormat('MX', {
  style: 'currency',
  currency: 'mxn',
  currencyDisplay: 'narrowSymbol',
});

const currency = (price: number) => MX.format(price);

const percentage = (percentageOff: number) => `${percentageOff}% Off`;

const NumberFormater = {
  currency,
  percentage,
};

export default NumberFormater;
