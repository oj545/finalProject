import { comperDate } from "./dates";
import { reducePurchasesData } from "./displayPurchasesData";

export const filterProductById = (arr, id) => {
  const newArray = arr.filter((item) => item.customersId.includes(id));
  return newArray;
};
export const filterProductByName = (arr, name) => {
  const newArr = arr.filter((item) => item.name === name);
  return newArr;
};
export const filterCustomerByName = (arr, name) => {
  if (!name) {
    return arr;
  }
  const newArr = arr.filter((item) => item.firstName === name);
  return newArr;
};
export const filterCustomerById = (arr, id) => {
  const newArray = arr.filter((item) => item.productsIds.includes(id));
  return newArray;
};

export const filterPurchasesByCustomer = (arr, customer, product, date) => {
  let result;
  if (!product && !date && !customer) {
    result = arr;
  } else if (!product && !date && customer) {
    result = arr.filter((item) => item.customer === customer);
  } else if (!date && product && customer) {
    result = arr
      .filter((item) => item.customer === customer)
      .filter((item) => item.product === product);
  } else if (product && date && customer) {
    result = arr
      .filter((item) => item.customer === customer)
      .filter((item) => item.product === product)
      .filter((item) => {
        const x = comperDate(date, item.creatAt);
        if (x) return item;
      });
  } else if (!customer && !date && product) {
    result = arr.filter((item) => item.product === product);
  } else if (!customer && product && date) {
    result = arr
      .filter((item) => item.product === product)
      .filter((item) => {
        const x = comperDate(date, item.creatAt);
        if (x) return item;
      });
  } else if (!customer && !product && date) {
    result = arr.filter((item) => {
      const x = comperDate(date, item.creatAt);
      if (x) return item;
    });
  } else if (!product && customer && date) {
    result = arr
      .filter((item) => item.customer === customer)
      .filter((item) => {
        const x = comperDate(date, item.creatAt);
        if (x) return item;
      });
  }

  return result;
};
export const filterPurchasesByCustomerAndProduct = (
  PurchasesArr,
  productName,
  customerName
) => {
  const customerPurchasesByProduct = PurchasesArr.filter(
    (item) => item.product === productName && item.customer === customerName
  );
  const purchasesData = reducePurchasesData(customerPurchasesByProduct);
  return purchasesData;
};
