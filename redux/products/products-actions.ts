import { createAction } from '@reduxjs/toolkit';
import { Product } from '../../common-types';

export const fetchProductsRequest = createAction(
    'products/fetchProductsRequest',
);
export const fetchProductsSuccess = createAction<Product[]>(
    'products/fetchProductsSuccess',
);
export const fetchProductsFailure = createAction<string>(
    'products/fetchProductsFailure',
);
export const getProductById = createAction<any>('products/getProductById');
