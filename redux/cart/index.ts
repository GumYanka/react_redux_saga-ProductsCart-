import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import cartReducer from './cart-slice';
import { cartSaga } from './cart-sadas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(cartSaga);

export default store;
