import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  productRequest: [],
  productSuccess: ['product'],
  productFailure: ['error'],
  productDetailRequest: ['id'],
  productDetailSuccess: ['productDetail'],
  productDetailFailure: ['error'],
  productFilterRequest: ['filterData'],
});

export const ProductTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  productList: [],
  fetching: false,
  error: null,
  productDetail: null,
});

/* ------------- Selectors ------------- */
export const ProductSelectors = {
  getProductData: state => state?.product,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = state => state.merge({ fetching: true });

// successful api lookup
export const successProduct = (state, action) => {
  const { product } = action;
  return state.merge({
    fetching: false,
    error: false,
    productList: product,
  });
};

// Something went wrong somewhere.
export const failureProduct = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error, product: [] });
};

export const requestProductDetail = state =>
  state.merge({ fetching: true, productDetail: null });

// successful api lookup
export const successProductDetail = (state, action) => {
  const { productDetail } = action;
  return state.merge({
    fetching: false,
    error: false,
    productDetail,
  });
};

// Something went wrong somewhere.
export const failureProductDetail = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error, productDetail: null });
};

/* ------------- Hookup Reducers To Types ------------- */

export const productReducer = createReducer(INITIAL_STATE, {
  [Types.PRODUCT_REQUEST]: request,
  [Types.PRODUCT_FILTER_REQUEST]: request,
  [Types.PRODUCT_SUCCESS]: successProduct,
  [Types.PRODUCT_FAILURE]: failureProduct,
  [Types.PRODUCT_DETAIL_REQUEST]: requestProductDetail,
  [Types.PRODUCT_DETAIL_SUCCESS]: successProductDetail,
  [Types.PRODUCT_DETAIL_FAILURE]: failureProduct,
});
