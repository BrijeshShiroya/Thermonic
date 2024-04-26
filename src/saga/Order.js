import { Alert } from 'react-native';
import { call, put } from 'redux-saga/effects';
import { Strings } from '../constants';
import OrderActions from '../redux/OrderRedux';
import { OrderStatus, getError } from '../services/Utils';

export function* getOrderList(api, action) {
  const response = yield call(api.orderList, {
    client_id: action?.id,
    status: action?.status
  });
  if (response?.data?.status && !response?.data?.error) {
    yield put(
      OrderActions.orderSuccess(response?.data?.data || null),
    );
  } else {
    const error = yield call(getError, response?.data);
    Alert.alert(Strings.thermonic, error?.trim());
    yield put(OrderActions.orderFailure(error));
  }
}

export function* addOrder(api, action) {
  const response = yield call(api.addOrder, action?.orderData);
  if (response?.data?.status && !response?.data?.error) {
    yield put(
      OrderActions.addOrderSuccess(action?.orderData?.client_id, OrderStatus.pending),
    );
  } else {
    const error = yield call(getError, response?.data);
    Alert.alert(Strings.thermonic, error?.trim());
    yield put(OrderActions.orderFailure(error));
  }
}