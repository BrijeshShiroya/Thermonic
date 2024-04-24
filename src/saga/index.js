import { all, takeLatest } from 'redux-saga/effects';
import { AuthTypes } from '../redux/AuthRedux';
import { CategoryTypes } from '../redux/CategoryRedux';

import API from '../services/Api';
import { login } from './Auth';
import { getAllCategory, getAllSubCategory, removeCategory, removeSubCategory, addCategory, addSubCategory } from './Category';

import { getUsers } from './Users';
import { UsersTypes } from '../redux/UsersRedux';
// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
const authApi = API.auth();
const categoryApi = API.category()
const usersApi = API.users()

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.AUTH_REQUEST, login, authApi),
    takeLatest(CategoryTypes.CATEGORY_LIST_REQUEST, getAllCategory, categoryApi),
    takeLatest(CategoryTypes.SUB_CATEGORY_LIST_REQUEST, getAllSubCategory, categoryApi),
    takeLatest(CategoryTypes.DELETE_CATEGORY_REQUEST, removeCategory, categoryApi),
    takeLatest(CategoryTypes.DELETE_SUB_CATEGORY_REQUEST, removeSubCategory, categoryApi),
    takeLatest(CategoryTypes.ADD_CATEGORY_REQUEST, addCategory, categoryApi),
    takeLatest(CategoryTypes.ADD_SUB_CATEGORY_REQUEST, addSubCategory, categoryApi),
    takeLatest(UsersTypes.USERS_LIST_REQUEST, getUsers, usersApi),
  ]);
}
