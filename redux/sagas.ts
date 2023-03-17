import { all } from "redux-saga/effects";
import {cartSaga} from "./cart/cart-sadas";
import {productSaga, watchGetProductById} from "./products/products-sagas";

function* rootSaga() {
  yield all([productSaga(), watchGetProductById(), cartSaga()]);
}

export default rootSaga;