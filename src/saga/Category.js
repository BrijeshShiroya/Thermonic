import { Alert } from 'react-native';
import { call, put } from 'redux-saga/effects';
import { Strings } from '../constants';
import CategoryActions from '../redux/CategoryRedux';
import { getError } from '../services/Utils';
import { navigationRef } from '../modules/RootContainer';

export function* getAllCategory(api) {
  const response = yield call(api.categoryList);
  if (response?.data?.status && !response?.data?.error) {
    yield put(
      CategoryActions.categoryListSuccess(response?.data?.data),
    );
  } else {
    const error = yield call(getError, response?.data);
    Alert.alert(Strings.thermonic, error?.trim());
    yield put(CategoryActions.categoryListFailure(error));
  }
}

export function* getAllSubCategory(api) {
  const response = yield call(api.subCategoryList);
  if (response?.data?.status && !response?.data?.error) {
    yield put(
      CategoryActions.subCategoryListSuccess(response?.data?.data),
    );
  } else {
    const error = yield call(getError, response?.data);
    Alert.alert(Strings.thermonic, error?.trim());
    yield put(CategoryActions.subCategoryListFailure(error));
  }
}


export function* removeCategory(api, action) {
  const response = yield call(api.deleteCategory, action?.id);
  if (response?.data?.status && !response?.data?.error) {
    yield put(
      CategoryActions.categoryListSuccess(response?.data?.data),
    );
  } else {
    const error = yield call(getError, response?.data);
    Alert.alert(Strings.thermonic, error?.trim());
    yield put(CategoryActions.categoryListFailure(error));
  }
}

export function* removeSubCategory(api, action) {
  const response = yield call(api.deleteSubCategory, action?.id);
  if (response?.data?.status && !response?.data?.error) {
    yield put(
      CategoryActions.subCategoryListSuccess(response?.data?.data),
    );
  } else {
    const error = yield call(getError, response?.data);
    yield put(CategoryActions.categoryListFailure(error));
  }
}


export function* addCategory(api, action) {
  const response = yield call(api.addCategory, action?.categoryName);
  if (response?.data?.status && !response?.data?.error) {
    yield put(
      CategoryActions.categoryListSuccess(response?.data?.data),
    );
    Alert.alert(Strings.thermonic, Strings.categoryAddedSuccess);
    yield call(navigationRef.goBack)
  } else {
    const error = yield call(getError, response?.data);
    yield put(CategoryActions.categoryListFailure(error));
  }
}

export function* addSubCategory(api, action) {
  const response = yield call(api.addSubCategory, action?.subCategoryName);
  if (response?.data?.status && !response?.data?.error) {
    yield put(
      CategoryActions.subCategoryListSuccess(response?.data?.data),
    );
    Alert.alert(Strings.thermonic, Strings.subCategoryAddedSuccess);
    yield call(navigationRef.goBack)
  } else {
    const error = yield call(getError, response?.data);
    yield put(CategoryActions.categoryListFailure(error));
  }
}