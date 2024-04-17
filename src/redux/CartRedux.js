import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  cartRequest: ['cartData'],
  cartSuccess: ['message'],
  cartListRequest: [],
  cartListSuccess: ['data'],
  cartFailure: ['error'],
  cartDeleteRequest: ['id'],
  cartDeleteSuccess: ['userData'],
  couponRequest: ['coupon'],
});

export const CartTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  loading: false,
  error: null,
  cartData: null,
  message: null,
});

/* ------------- Selectors ------------- */
export const CartSelectors = {
  getCartData: state => state?.cartList,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = state =>
  state.merge({ loading: true, error: null, message: null });

export const successCart = (state, action) => {
  return state.merge({ loading: true, error: null, message: action?.message });
};

// successful api lookup
export const success = (state, action) => {
  const { data } = action;
  return state.merge({
    loading: false,
    error: null,
    cartData: data,
    message: null,
  });
};

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({ loading: false, error: error?.trim(), cartList: [] });
};

/* ------------- Hookup Reducers To Types ------------- */

export const cartReducer = createReducer(INITIAL_STATE, {
  [Types.CART_REQUEST]: request,
  [Types.CART_SUCCESS]: successCart,
  [Types.CART_LIST_REQUEST]: request,
  [Types.CART_LIST_SUCCESS]: success,
  [Types.CART_FAILURE]: failure,
  [Types.CART_DELETE_REQUEST]: request,
  [Types.CART_DELETE_SUCCESS]: request,
  [Types.COUPON_REQUEST]: request,
});
