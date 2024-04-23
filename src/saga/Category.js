import { call, put } from 'redux-saga/effects';
import CategoryActions from '../redux/CategoryRedux';
import { Alert } from 'react-native';
import { getError } from '../services/Utils';
import { Strings } from '../constants';

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
