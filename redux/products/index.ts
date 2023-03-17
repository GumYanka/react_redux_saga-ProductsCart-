import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import productReducer from './products-slice';
import { productSaga } from './products-sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
        product: productReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(productSaga);

export default store;
