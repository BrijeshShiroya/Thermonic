import { all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from '../redux/AuthRedux';
import { CategoryTypes } from '../redux/CategoryRedux';

import API from '../services/Api';
import { login } from './Auth';
import { getAllCategory, getAllSubCategory } from './Category';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const api = API.home();

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, login, api),
    takeLatest(CategoryTypes.CATEGORY_LIST_REQUEST, getAllCategory, api),
    takeLatest(CategoryTypes.SUB_CATEGORY_LIST_REQUEST, getAllSubCategory, api),
  ]);
}
