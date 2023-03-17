import { combineReducers } from '@reduxjs/toolkit';
import productsReducer from './products/products-slice';
import cartReducer from './cart/cart-slice';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer,
});

export default rootReducer;
