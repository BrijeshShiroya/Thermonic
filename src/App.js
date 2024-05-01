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
import { SheetProvider } from 'react-native-actions-sheet';


const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <Provider store={reduxStore.store}>
      <PersistGate loading={null} persistor={reduxStore.persistor}>
        <SheetProvider>
          <RootContainer />
        </SheetProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
