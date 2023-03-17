import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    getProductById,
} from './products-actions';
import createSagaMiddleware from 'redux-saga';
import { setSelectedProduct } from './products-slice';
import { Product } from 'common-types';
import { PayloadAction } from '@reduxjs/toolkit';

export const sagaMiddleware = createSagaMiddleware();

function* fetchProducts() {
    try {
        const response: AxiosResponse<Product[]> = yield call(
            axios.get,
            'https://dummyjson.com/products',
        );
        yield put(fetchProductsSuccess(response.data));
    } catch (error: any) {
        yield put(fetchProductsFailure(error.message));
    }
}

export function* productSaga() {
    yield takeLatest(fetchProductsRequest.type, fetchProducts);
}

function* fetchProductById(action: PayloadAction<number>) {
    try {
        const response: AxiosResponse<Product> = yield call(
            axios.get,
            `https://dummyjson.com/products/${action.payload}`,
        );
        yield put(setSelectedProduct(response.data));
    } catch (error) {
        console.log(error);
    }
}

export function* watchGetProductById() {
    yield takeEvery(getProductById.type, fetchProductById);
}
