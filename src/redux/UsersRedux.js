import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  usersListRequest: ['role'],
  usersListSuccess: ['data'],
  usersListFailure: ['error'],
});

export const UsersTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  users: null,
});

/* ------------- Selectors ------------- */
export const UsersSelectors = {
  getUsers: state => state?.users,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = state =>
  state.merge({ fetching: true, error: null });

// successful api lookup
export const usersSuccess = (state, action) => {
  const { data } = action;
  return state.merge({
    fetching: false,
    error: false,
    users: data,
  });
};

// Something went wrong somewhere.
export const usersFailure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error: error?.trim(), users: null });
};



/* ------------- Hookup Reducers To Types ------------- */

export const usersReducer = createReducer(INITIAL_STATE, {
  [Types.USERS_LIST_REQUEST]: request,
  [Types.USERS_LIST_SUCCESS]: usersSuccess,
  [Types.USERS_LIST_FAILURE]: usersFailure,
});
