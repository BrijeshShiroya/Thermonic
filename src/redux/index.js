import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';
import { authReducer } from './AuthRedux';
import { categoryReducer } from './CategoryRedux';
import { usersReducer } from './UsersRedux';


const resettable = resettableReducer('LOGOUT');

export default combineReducers({
  auth: resettable(authReducer),
  category: resettable(categoryReducer),
  users: resettable(usersReducer),
});
