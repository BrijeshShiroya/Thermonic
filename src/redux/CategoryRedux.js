import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  categoryListRequest: [],
  categoryListSuccess: ['data'],
  categoryListFailure: ['error'],
  subCategoryListRequest: [],
  subCategoryListSuccess: ['data'],
  subCategoryListFailure: ['error'],
});

export const CategoryTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  category: null,
  subCategory: null
});

/* ------------- Selectors ------------- */
export const CategorySelectors = {
  getCategory: state => state?.category,
  getSubCategory: state => state?.subCategory,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const request = state =>
  state.merge({ fetching: true, error: null });

// successful api lookup
export const categorySuccess = (state, action) => {
  const { data } = action;
  return state.merge({
    fetching: false,
    error: false,
    category: data,
  });
};

// Something went wrong somewhere.
export const categoryFailure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error: error?.trim(), category: null });
};

// successful api lookup
export const subCategorySuccess = (state, action) => {
  const { data } = action;
  return state.merge({
    fetching: false,
    error: false,
    subCategory: data,
  });
};

// Something went wrong somewhere.
export const subCategoryFailure = (state, action) => {
  const { error } = action;
  return state.merge({ fetching: false, error: error?.trim(), subCategory: null });
};


/* ------------- Hookup Reducers To Types ------------- */

export const categoryReducer = createReducer(INITIAL_STATE, {
  [Types.CATEGORY_LIST_REQUEST]: request,
  [Types.CATEGORY_LIST_SUCCESS]: categorySuccess,
  [Types.CATEGORY_LIST_FAILURE]: categoryFailure,
  [Types.SUB_CATEGORY_LIST_REQUEST]: request,
  [Types.SUB_CATEGORY_LIST_SUCCESS]: subCategorySuccess,
  [Types.SUB_CATEGORY_LIST_FAILURE]: subCategoryFailure,
});
