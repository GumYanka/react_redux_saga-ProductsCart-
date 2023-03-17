import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from 'commonTypes';
import { fetchProductsFailure, fetchProductsRequest, fetchProductsSuccess } from './products-actions';

interface ProductsState {
  products: Product[];
  loading: boolean;
  error: string | null;
  product: any
}

const initialState: ProductsState = {
  products: [],
  product: null,
  loading: false,
  error: null,
};


const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state = action.payload;
    },
    setSelectedProduct: (state:any, action: PayloadAction<Product>) => {
      state.product = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsRequest, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductsSuccess, (state, action: PayloadAction<Product[]>) => {
        state.loading = false;
        state.products = action.payload;
      })
      .addCase(fetchProductsFailure, (state, action: PayloadAction<string>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { addProduct, setSelectedProduct } = productSlice.actions;

export default productSlice.reducer;