export const reducePurchasesData = (arr) => {
  const obj = arr.reduce(
    (acc, item) => {
      return {
        price: acc.price + item.price,
        quantity: acc.quantity + item.quantity,
        purchases: acc.purchases + (item = 1),
      };
    },
    { price: 0, quantity: 0, purchases: 0 }
  );
  return obj;
};
