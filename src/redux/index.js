import { combineReducers } from 'redux';
import { resettableReducer } from 'reduxsauce';
import { homeReducer } from './HomeRedux';
import { productReducer } from './ProductRedux';
import { authReducer } from './AuthRedux';
import { cartReducer } from './CartRedux';
import { updateAppReducer } from './UpdateAppRedux';

const resettable = resettableReducer('LOGOUT');

export default combineReducers({
  home: homeReducer,
  product: productReducer,
  auth: resettable(authReducer),
  cart: resettable(cartReducer),
  appUpdate: resettable(updateAppReducer),
});
