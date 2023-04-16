export const getProductItem = (arr, name) => {
  const obj = arr.find((item) => item.name === name);
  return obj;
};

export const getCustomerItem = (arr, name) => {
  const obj = arr.find((item) => item.firstName === name);
  return obj;
};
