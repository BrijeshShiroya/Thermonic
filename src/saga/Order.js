import { Alert } from 'react-native';
import { call, put } from 'redux-saga/effects';
import { Strings } from '../constants';
import OrderActions from '../redux/OrderRedux';
import { OrderStatus, UserType, getError } from '../services/Utils';
import { navigationRef } from '../modules/RootContainer';

export function* getOrderList(api, action) {
  const apiDetail = action?.fetchBy == UserType.client ? api.orderList : api.orderListOwner
  const response = yield call(apiDetail, action?.orderRequestData);
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
      OrderActions.addOrderSuccess({ client_id: action?.orderData?.client_id, status: OrderStatus.pending }, UserType.client),
    );
    yield call(navigationRef.goBack)
  } else {
    const error = yield call(getError, response?.data);
    Alert.alert(Strings.thermonic, error?.trim());
    yield put(OrderActions.orderFailure(error));
  }
}


export function* acceptOrder(api, action) {
  const response = yield call(api.acceptOrder, action?.orderData);
  if (response?.data?.status && !response?.data?.error) {
    yield put(
      OrderActions.addOrderSuccess({ owner_id: action?.orderData?.accepted_by, status: OrderStatus.pending }, UserType.manager),
    );
    yield call(navigationRef.goBack)
  } else {
    const error = yield call(getError, response?.data);
    Alert.alert(Strings.thermonic, error?.trim());
    yield put(OrderActions.orderFailure(error));
  }
}