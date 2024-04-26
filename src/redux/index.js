import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';
import { authReducer } from './AuthRedux';
import { categoryReducer } from './CategoryRedux';
import { usersReducer } from './UsersRedux';
import { orderReducer } from './OrderRedux';


const resettable = resettableReducer('LOGOUT_SUCCESS');

export default combineReducers({
  auth: authReducer,
  category: resettable(categoryReducer),
  users: resettable(usersReducer),
  order: resettable(orderReducer),
});
