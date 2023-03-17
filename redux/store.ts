import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import rootReducer from './reducers'
import { sagaMiddleware as productsSagaMiddleware } from "./products/products-sagas";
import { sagaMiddleware as cartSagaMiddleware } from "./cart/cart-sadas";

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, productsSagaMiddleware, cartSagaMiddleware ],
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>;

export default store;