import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';
import { authReducer } from './AuthRedux';
import { categoryReducer } from './CategoryRedux';


const resettable = resettableReducer('LOGOUT');

export default combineReducers({
  auth: resettable(authReducer),
  category: categoryReducer,
});
