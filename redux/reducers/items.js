import { ADD_ITEM, REMOVE_ITEM, CHECKOUT } from "../actions/actionTypes";

const initialState = {
  items: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      const addedItem = action.payload;
      let items = state.items;

      const updatedItem = items.find(
        (item) =>
          item.drink === addedItem.drink && item.option === addedItem.option
      );

      if (updatedItem) {
        updatedItem.quantity += addedItem.quantity;
      } else {
        items = [...items, { ...addedItem }];
      }
      return {
        ...state,
        items: [...items],
      };

    case REMOVE_ITEM:
      const removedItem = action.payload;
      return {
        ...state,
        items: [...state.items.filter((item) => item !== removedItem)],
      };

    case CHECKOUT:
      return {
        ...state,
        items: [],
      };
    default:
      return state;
  }
};
export default reducer;
