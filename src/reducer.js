export const initialState = {
  basket: [],
  user: null,
};

// Selector
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.payload
      );
      let basketCopy = [...state.basket];
      if (index >= 0) {
        basketCopy.splice(index, 1);
      } else {
        console.warn(
          `Cannot remove (id: ${action.payload}) as its not in the basket.`
        );
      }
      return {
        ...state,
        basket: basketCopy,
      };
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};

export default reducer;
