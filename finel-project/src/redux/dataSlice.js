import { createSlice } from "@reduxjs/toolkit";
import { customersArr, productsArr, purchasesArr } from "../data/intialData";
import { checkDuplication } from "../helperFunction/chackDUplication";
import { replaceHistoryUrl } from "../helperFunction/clearUrl";

const rootSlice = createSlice({
  name: "counter",
  initialState: {
    products: [...productsArr],
    customers: [...customersArr],
    purchases: [...purchasesArr],
  },
  reducers: {
    // ---------------------------------------------- PRODUCTS
    deleteProduct(state, action) {
      // 1) delet from products
      state.products = state.products.filter(
        (item) => item.id !== action.payload.id
      );
      // 2) delete from purchases
      state.purchases = state.purchases.filter(
        (item) => item.product !== action.payload.name
      );
      // 3) replace history url
      replaceHistoryUrl(`/menu/products`);
    },
    UpdateProduct(state, action) {
      const index = state.products.findIndex(
        (item) => item.id === action.payload.id
      );

      state.products[index] = action.payload;
    },
    // ------------------------------------------------ CUSTOMERS
    deleteCustomer(state, action) {
      // 1) delete customer
      state.customers = state.customers.filter(
        (item) => item.id !== action.payload.id
      );
      // 2) delete customer purchases
      state.purchases = state.purchases.filter(
        (item) => item.customer !== action.payload.name
      );
      // 3) replace history url
      replaceHistoryUrl(`/menu/customers`);
    },
    UpdateCustomer(state, action) {
      // 1) Update customer
      const index = state.customers.findIndex(
        (item) => item.id === action.payload.customer.id
      );
      state.customers[index] = action.payload.customer;

      // 2) Update purchase
      state.purchases.map((item) => {
        if (item.customer === action.payload.preName) {
          return (item.customer = action.payload.customer.firstName);
        }
      });
    },

    // ----------------------------------------------------- PURCHEASES
    creatTransaction(state, action) {
      // 1) crete purchase
      state.purchases = [...state.purchases, { ...action.payload.transaction }];

      // 2) find indexes
      const productIndex = state.products.findIndex(
        (item) => item.name === action.payload.product.name
      );
      const customertIndex = state.customers.findIndex(
        (item) => item.firstName === action.payload.customer.firstName
      );

      // 3) check Duplicate ides
      const isProductIdExist = checkDuplication(
        action.payload.product.customersId,
        action.payload.customer.id
      );
      const isCustomerIdExist = checkDuplication(
        action.payload.customer.productsIds,
        action.payload.product.id
      );

      // 4) updates
      // a) update products
      if (!isProductIdExist) {
        state.products[productIndex] = {
          ...action.payload.product,
          customersId: [
            ...action.payload.product.customersId,
            action.payload.customer.id,
          ],
          quantity:
            action.payload.product.quantity -
            action.payload.transaction.quantity,
        };
      } else {
        state.products[productIndex] = {
          ...action.payload.product,
          quantity:
            action.payload.product.quantity -
            action.payload.transaction.quantity,
        };
      }

      // b) update customers
      if (!isCustomerIdExist) {
        state.customers[customertIndex] = {
          ...action.payload.customer,
          productsIds: [
            ...action.payload.customer.productsIds,
            action.payload.product.id,
          ],
        };
      }
    },
    //  ------------------------------------------------------- create new itmes
    creatNewItems(state, action) {
      const titleType = action.payload.title;

      if (titleType === "Product") {
        state.products = [
          ...state.products,
          {
            id: "p" + (state.products.length + 1),
            name: action.payload.detail1.value,
            price: action.payload.detail2.value,
            quantity: action.payload.detail3.value,
            customersId: [],
          },
        ];
      }
      if (titleType === "Customer") {
        state.customers = [
          ...state.customers,
          {
            id: "c" + (state.customers.length + 1),
            firstName: action.payload.detail1.value,
            lastName: action.payload.detail2.value,
            city: action.payload.detail3.value,
            productsIds: [],
          },
        ];
      }
    },
  },
});
export const rootActions = rootSlice.actions;
export default rootSlice;
