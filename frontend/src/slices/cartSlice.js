import { createSlice } from "@reduxjs/toolkit";
import { updateCart } from "../utils/cartUtils";

const initialState = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : {
    cartItems: [], shippingAddress: {}, paymentMethod: 'PayPal' };

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: [],
    },
    reducers: {
        addToCart(state, action) {
            const item = action.payload;
            const existItem = state.cartItems.find((i) => i._id === item._id);
            if (existItem) {
                state.cartItems = state.cartItems.map((i) => i._id === item._id ? item : i);
            } else {
                state.cartItems = [...state.cartItems, item];
            }
            return updateCart(state);
        },
        removeFromCart(state, action) {
            state.cartItems = state.cartItems.filter(
                (item) => item._id !== action.payload
            );
        },
        saveShippingAddress(state, action) {
            state.shippingAddress = action.payload;
            return updateCart(state);
        },
        savePaymentMethod(state, action) {
            state.paymentMethod = action.payload;
            return updateCart(state);
        },
        clearCartItems(state, action) {
            state.cartItems = [];
            return updateCart(state);
        },
        decreaseCart(state, action) {
            const item = state.cartItems.find((i) => i.id === action.payload.id);
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else if (item.quantity === 1) {
                state.cartItems = state.cartItems.filter(
                    (i) => i.id !== action.payload.id
                );
            }
        },
}
});

export const { addToCart, removeFromCart, decreaseCart, saveShippingAddress, savePaymentMethod, clearCartItems } = cartSlice.actions;
export default cartSlice.reducer;