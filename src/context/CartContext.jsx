import React, { createContext, useContext, useReducer, useEffect } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const LOCAL_KEY = "coffeehub_cart_v1";

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const found = state.find((i) => i.name === action.payload.name);
      if (found) {
        // Add ONLY 1
        return state.map((i) => (i.name === action.payload.name ? { ...i, qty: i.qty + 1 } : i));
      }
      return [...state, { ...action.payload, qty: 1 }];
    }

    case "UPDATE_QTY": {
      return state.map((i) => (i.name === action.payload.name ? { ...i, qty: action.payload.qty } : i));
    }

    case "REMOVE_ITEM": {
      return state.filter((i) => i.name !== action.payload.name);
    }

    case "CLEAR_CART": {
      return []; // reset everything
    }

    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, [], () => {
    try {
      const raw = localStorage.getItem(LOCAL_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(LOCAL_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>{children}</CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}

export function useCart() {
  return useContext(CartStateContext);
}

export function useCartDispatch() {
  return useContext(CartDispatchContext);
}
