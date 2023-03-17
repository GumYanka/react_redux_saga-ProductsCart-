import { put, takeEvery, all } from "redux-saga/effects";
import { addItem, removeItem } from "./cart-slice";
import { Product } from "../../commonTypes";
import { PayloadAction } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

export const sagaMiddleware = createSagaMiddleware();

function* addProductToCart({ payload: product }: PayloadAction<Product>) {
  yield put(addItem(product));
}

function* removeProductFromCart({ payload: productId }: PayloadAction<number>) {
  yield put(removeItem(productId));
}

export function* cartSaga() {
  yield all([
    takeEvery("cart/addProductToCart", addProductToCart),
    takeEvery("cart/removeProductFromCart", removeProductFromCart),
  ]);
}