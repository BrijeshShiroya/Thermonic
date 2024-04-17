import AsyncStorage from '@react-native-community/async-storage';
import { applyMiddleware, compose, legacy_createStore as createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../saga/index';
import immutablePersistenceTransform from '../services/immutablePersistenceTransform';
import rootReducer from './index';

const sagaMiddleware = createSagaMiddleware();
const middleWare = [sagaMiddleware];

const persistConfig = {
  key: '@writeway',
  storage: AsyncStorage,
  blacklist: ['nav', 'home', 'product'],
  transforms: [immutablePersistenceTransform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Add middleware to redux store
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = applyMiddleware(...middleWare);

const enhancers = __DEV__
  ? composeEnhancers(middlewares)
  : compose(middlewares);

const store = createStore(persistedReducer, enhancers);

sagaMiddleware.run(rootSaga);

const persistor = persistStore(store);

// Enable persistence
export default { store, persistor };
