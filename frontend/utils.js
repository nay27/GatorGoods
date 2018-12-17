/*
*   Formats price for items
*/

const formatPrice = inCents => {
  let cents = String(inCents % 100);
  while (cents.length < 2) {
    cents = "0" + cents;
  }
  const dollars = Math.floor(inCents / 100);
  return `\$${dollars}.${cents}`;
};

export { formatPrice };
