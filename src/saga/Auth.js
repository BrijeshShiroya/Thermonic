import { call, delay, put, select } from 'redux-saga/effects';
import AuthActions from '../redux/AuthRedux';
import { Alert, Platform } from 'react-native';
import { getDeviceId, getError } from '../services/Utils';
import { Strings } from '../constants';

export function* login(api, action) {
  const response = yield call(api.login, {
    username: action?.email,
    password: action?.password,
    device_token: '121212',
    device_type: Platform.OS,
  });
  console.log({ response })
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
