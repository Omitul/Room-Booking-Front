import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export type CartItem = {
  _id: string;
  name: string;
  image: string;
  price: number;
  rating: number;
  description: string;
  brand: string;
  available_quantity: number;
  cartQuantity: number;
  cartTotalAmount: number;
};

export type CartState = {
  cartItems: CartItem[];
  cartTotalAmount: number;
  cartQuantity: number;
};

const initialState: CartState = {
  cartItems: [],
  cartTotalAmount: 0,
  cartQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const { _id, price } = action.payload;
      const Price = parseFloat(price);
      console.log("price:", price);
      const existingItem = state.cartItems.find((item) => item._id === _id);

      if (existingItem) {
        existingItem.cartQuantity += 1;
        existingItem.cartTotalAmount += Price; // Update total amount based on price
      } else {
        state.cartItems.push({ ...action.payload, cartQuantity: 1 });
        state.cartTotalAmount += Price; // Add initial price for the new item
      }
      state.cartQuantity += 1; // Update total quantity of items
    },

    removeFromCart(state, action) {
      const index = state.cartItems.findIndex(
        (item) => item._id === action.payload
      );
      if (index !== -1) {
        const item = state.cartItems[index];
        state.cartTotalAmount -= item.price * item.cartQuantity; // Update total amount
        state.cartQuantity -= item.cartQuantity; // Update total quantity
        state.cartItems.splice(index, 1); // Remove the item from the cart
      }
    },

    clearCart(state) {
      state.cartItems = [];
      state.cartTotalAmount = 0;
      state.cartQuantity = 0; // Clear total quantity as well
    },
    incrementQuantity(state, action: PayloadAction<string>) {
      const item = state.cartItems.find((item) => item._id === action.payload);
      if (item) {
        if (item.cartQuantity < item.available_quantity) {
          item.cartQuantity += 1;
          item.cartTotalAmount += Number(item.price);
          state.cartTotalAmount += Number(item.price);
          state.cartQuantity += 1;
        }
      }
    },
    decrementQuantity(state, action: PayloadAction<string>) {
      const item = state.cartItems.find((item) => item._id === action.payload);
      if (item && item.cartQuantity > 1) {
        item.cartQuantity -= 1;
        item.cartTotalAmount -= Number(item.price);
        state.cartTotalAmount -= Number(item.price);
        state.cartQuantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
