import { all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from '../redux/AuthRedux';
import { CategoryTypes } from '../redux/CategoryRedux';

import API from '../services/Api';
import { login } from './Auth';
import { getAllCategory, getAllSubCategory } from './Category';

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const authApi = API.auth();
const categoryApi = API.category()

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, login, authApi),
    takeLatest(CategoryTypes.CATEGORY_LIST_REQUEST, getAllCategory, categoryApi),
    takeLatest(CategoryTypes.SUB_CATEGORY_LIST_REQUEST, getAllSubCategory, categoryApi),
  ]);
}
