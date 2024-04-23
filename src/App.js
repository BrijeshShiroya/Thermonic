/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import reduxStore from './redux/Store';
import RootContainer from './modules/RootContainer';
import SplashScreen from 'react-native-splash-screen';
import "react-native-devsettings";


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={reduxStore.store}>
      <PersistGate loading={null} persistor={reduxStore.persistor}>
        <RootContainer />
      </PersistGate>
    </Provider>
  );
}

export default App;
