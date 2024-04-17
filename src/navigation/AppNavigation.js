import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { forwardRef } from 'react';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoginScreen from '../modules/Auth/LoginScreen';


const Stack = createNativeStackNavigator();

const RootStackScreen = (props, ref) => {
  return (
    <SafeAreaProvider>
      <NavigationContainer ref={ref}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default forwardRef(RootStackScreen);
