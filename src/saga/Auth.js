import { call, put, select } from 'redux-saga/effects';
import AuthActions from '../redux/AuthRedux';
import { Alert, Platform } from 'react-native';
import { getError } from '../services/Utils';
import { StorageKeys, Strings } from '../constants';
import AsyncStorage from '@react-native-community/async-storage';

export function* login(api, action) {
  const response = yield call(api.login, {
    username: action?.email,
    password: action?.password,
    device_token: '121212',
    device_type: Platform.OS,
  });
  if (response?.data?.status && !response?.data?.error) {
    AsyncStorage.setItem(StorageKeys.token, response?.data?.data?.['x-api-key']);
    yield put(
      AuthActions.authSuccess({ ...response?.data?.data } || null),
    );
  } else {
    const error = yield call(getError, response?.data);
    Alert.alert(Strings.thermonic, error?.trim());
    yield put(AuthActions.authFailure(error));
  }
}

export function* logout(api) {
  const { user } = yield select(state => state.auth);
  console.log({ user })
  const response = yield call(api.logout, user?.id);
  if (response?.data?.status && !response?.data?.error) {
    AsyncStorage.removeItem(StorageKeys.token);
    yield put(
      AuthActions.logoutSuccess(),
    );
  } else {
    const error = yield call(getError, response?.data);
    Alert.alert(Strings.thermonic, error?.trim());
    yield put(AuthActions.authFailure(error));
  }
}
