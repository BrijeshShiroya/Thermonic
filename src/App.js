/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';


function App() {

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <SafeAreaView>
    </SafeAreaView>
  );
}

export default App;
