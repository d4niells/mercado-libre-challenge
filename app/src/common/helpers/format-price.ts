import { Price } from 'api/core';

const formatPrice = (price: Price): string => {
  const { amount, currency, decimals } = price;

  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: decimals
  }).format(amount);
};

export default formatPrice;
