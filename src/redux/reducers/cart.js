const initialState = {
    carts: [],
  }
  
  const cart = (state = initialState, action) => {
    switch (action.type) {
      case "CART_ADDED":
        return {
          ...state,
          carts: action.payload,
        }
      default:
        return state
    }
  }
  
  export default cart;