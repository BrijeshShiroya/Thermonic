import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  authRequest: ['email', 'password'],
  authSuccess: ['data'],
  authFailure: ['error'],
  registerRequest: ['email', 'firstname', 'lastname', 'mobile', 'password'],
  orderRequest: [],
  orderSuccess: ['data'],
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  user: null,
  orderList: null,
});

/* ------------- Selectors ------------- */
export const AuthSelectors = {
  getUserData: state => state?.user,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = state =>
  state.merge({ fetching: true, error: null, orderList: null });

// successful api lookup
export const success = (state, action) => {
  const { data } = action;
  return state.merge({
    fetching: false,
    error: false,
    user: data,
  });
};

export const successOrders = (state, action) => {
  const { data } = action;
  return state.merge({
    fetching: false,
    error: false,
    orderList: data,
  });
};

// Something went wrong somewhere.
export const failure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error: error?.trim() });
};

/* ------------- Hookup Reducers To Types ------------- */

export const authReducer = createReducer(INITIAL_STATE, {
  [Types.AUTH_REQUEST]: request,
  [Types.AUTH_SUCCESS]: success,
  [Types.ORDER_REQUEST]: request,
  [Types.ORDER_SUCCESS]: successOrders,
  [Types.AUTH_FAILURE]: failure,
  [Types.REGISTER_REQUEST]: request,
});
