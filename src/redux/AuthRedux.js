import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  authRequest: ['email', 'password'],
  authSuccess: ['data'],
  authFailure: ['error'],
});

export const AuthTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  user: null,
});

/* ------------- Selectors ------------- */
export const AuthSelectors = {
  getUserData: state => state?.user,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = state =>
  state.merge({ fetching: false, error: null });

// successful api lookup
export const success = (state, action) => {
  const { data } = action;
  return state.merge({
    fetching: false,
    error: false,
    user: data,
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
  [Types.AUTH_FAILURE]: failure,
});
