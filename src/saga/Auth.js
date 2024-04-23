import { call, put } from 'redux-saga/effects';
import AuthActions from '../redux/AuthRedux';
import { Alert, Platform } from 'react-native';
import { getError } from '../services/Utils';
import { Strings } from '../constants';
import { apiConfig } from '../services/Utils';
export function* login(api, action) {
  const response = yield call(api.login, {
    username: action?.email,
    password: action?.password,
    device_token: '121212',
    device_type: Platform.OS,
  });
  if (response?.data?.status && !response?.data?.error) {
    yield put(
      AuthActions.authSuccess({ ...response?.data?.data } || null),
    );
  } else {
    const error = yield call(getError, response?.data);
    Alert.alert(Strings.thermonic, error?.trim());
    yield put(AuthActions.authFailure(error));
  }
}
