import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "./actionTypes";

export const addItemToCart = (newItem) => {
  return {
    type: ADD_ITEM,
    payload: newItem,
  };
};

export const removeItemFromCart = (item) => {
  return {
    type: REMOVE_ITEM,
    payload: item,
  };
};

export const checkoutCart = () => {
  return {
    type: CHECKOUT,
  };
};
