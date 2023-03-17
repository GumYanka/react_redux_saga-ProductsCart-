import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "redux/store";
import { CartItem } from "../../commonTypes";

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

if (typeof window !== 'undefined' && window.localStorage) {
  var savedCartItems = localStorage.getItem('cartItems');
if (savedCartItems) {
  initialState.items = JSON.parse(savedCartItems);
}
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem| any>) => {
      const existingItem = state.items.find((item:any) => item.id === action.payload.id);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    localStorage.setItem("cartItems", JSON.stringify(state.items));
    },
    removeItem: (state:any, action: PayloadAction<number>) => {
      const index = state.items.findIndex(
        (item:any) => item.id === action.payload
      );
      if (index !== -1) {
        const item = state.items[index];
        if (item.quantity > 1) {
          item.quantity--;
        } else {
          state.items.splice(index, 1);
        }
        // Save updated cart items to local storage
        localStorage.setItem("cartItems", JSON.stringify(state.items));
      }
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems");
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export const selectCart = (state: any) => state.cart;
export const selectCartItems = (state: RootState) => state.cart.items;

export const selectCartItemById = (itemId: number) => (state: RootState) =>
    state.cart.items.find((item: any) => item.id === itemId);
  
export const selectCartTotal = createSelector(
  selectCartItems,
  (items) => items.reduce((total:any, item:any) => total + item.quantity * item.price, 0)
);

export default cartSlice.reducer;