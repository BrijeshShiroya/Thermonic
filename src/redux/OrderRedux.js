import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  orderRequest: ['orderRequestData', 'fetchBy'],
  orderSuccess: ['data'],
  orderFailure: ['error'],
  addOrderRequest: ['orderData'],
  addOrderSuccess: ['orderRequestData', 'fetchBy'],
  acceptOrderRequest: ['orderData'],
  acceptOrderSuccess: ['orderRequestData', 'fetchBy'],
});

export const OrderTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  order: null,
});

/* ------------- Selectors ------------- */
export const OrderSelectors = {
  getOrderData: state => state?.order,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = state =>
  state.merge({ fetching: true, error: null });

// successful api lookup
export const success = (state, action) => {
  const { data } = action;
  return state.merge({
    fetching: false,
    error: false,
    order: data,
  });
};

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error: error?.trim() });
};


// Something went wrong somewhere.
export const orderSuccess = (state) => {
  return state.merge({ fetching: false, error: false });
};

/* ------------- Hookup Reducers To Types ------------- */

export const orderReducer = createReducer(INITIAL_STATE, {
  [Types.ORDER_REQUEST]: request,
  [Types.ORDER_SUCCESS]: success,
  [Types.ORDER_FAILURE]: failure,
  [Types.ADD_ORDER_REQUEST]: request,
  [Types.ADD_ORDER_SUCCESS]: orderSuccess,
  [Types.ACCEPT_ORDER_REQUEST]: request,
  [Types.ACCEPT_ORDER_SUCCESS]: orderSuccess,
});
