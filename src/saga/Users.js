import { Alert } from 'react-native';
import { call, put } from 'redux-saga/effects';
import { Strings } from '../constants';
import UsersActions from '../redux/UsersRedux';
import { getError } from '../services/Utils';

export function* getUsers(api, action) {
  const response = yield call(api.getUsersByRole, action?.role);
  if (response?.data?.status && !response?.data?.error) {
    yield put(
      UsersActions.usersListSuccess(response?.data?.data || null),
    );
  } else {
    const error = yield call(getError, response?.data);
    Alert.alert(Strings.thermonic, error?.trim());
    yield put(UsersActions.usersListFailure(error));
  }
}

export function* AddUser(api, action) {
  const response = yield call(api.addUser, action?.userData);
  if (response?.data?.status && !response?.data?.error) {
    yield put(
      UsersActions.addUserSuccess(action?.role),
    );
    Alert.alert(Strings.thermonic, Strings.customerAdded);
  } else {
    const error = yield call(getError, response?.data);
    Alert.alert(Strings.thermonic, error?.trim());
    yield put(UsersActions.usersListFailure(error));
  }
}
