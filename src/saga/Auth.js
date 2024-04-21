import { call, delay, put, select } from 'redux-saga/effects';
import AuthActions from '../redux/AuthRedux';
import { Alert, Platform } from 'react-native';
import { getDeviceId, getError } from '../services/Utils';
import { Strings } from '../constants';

export function* login(api, action) {
  yield delay(2000)
  yield put(
    AuthActions.authSuccess({ email: action?.email, userType: action?.password } || null),
  );
  // const response = yield call(api.login, {
  //   email: action?.email,
  //   password: action?.password,
  //   device_id,
  //   device_type: Platform.OS,
  // });
  // if (response?.data?.status === 200 && !response?.data?.error) {
  // yield put(
  //   AuthActions.authSuccess({ ...response?.data?.data?.[0] } || null),
  // );
  // } else {
  //   const error = yield call(getError, response?.data);
  //   Alert.alert(Strings.thermonic, error?.trim());
  //   yield put(AuthActions.authFailure(error));
  // }
}
