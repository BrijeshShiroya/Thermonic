import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';
import { authReducer } from './AuthRedux';


const resettable = resettableReducer('LOGOUT');

export default combineReducers({
  auth: resettable(authReducer),
});
