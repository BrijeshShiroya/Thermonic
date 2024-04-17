import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* ------------- Types and Action Creators ------------- */
const { Types, Creators } = createActions({
  showModal: ['config'],
  hideModal: [],
});

export const UpdateAppTypes = Types;
export default Creators;

/* ------------- Initial State ------------- */
export const INITIAL_STATE = Immutable({
  showModal: false,
  updateConfig: null,
});

/* ------------- Selectors ------------- */
export const UpdateAppSelectors = {
  getModalState: state => state?.showModal,
};

/* ------------- Reducers ------------- */
// request the data from an api
export const show = (state, action) => {
  const updateConfig = action?.config || null;
  return state.merge({ showModal: true, updateConfig });
};

// successful api lookup
export const hide = (state, action) => {
  return state.merge({
    showModal: false,
  });
};

/* ------------- Hookup Reducers To Types ------------- */

export const updateAppReducer = createReducer(INITIAL_STATE, {
  [Types.SHOW_MODAL]: show,
  [Types.HIDE_MODAL]: hide,
});
