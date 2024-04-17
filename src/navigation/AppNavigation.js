import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { forwardRef, useState } from 'react';
import { UserType } from '../services/Utils'

import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoginScreen from '../modules/Auth/LoginScreen';
import CustomerHomeScreen from '../modules/Customer/CustomerHomeScreen';
import CustomerProfileScreen from '../modules/Customer/CustomerProfileScreen';
import ManagerHomeScreen from '../modules/Manager/ManagerHomeScreen';
import ManagerProfileScreen from '../modules/Manager/ManagerProfileScreen';
import TechnicalHomeScreen from '../modules/Technical/TechnicalHomeScreen';
import TechnicalProfileScreen from '../modules/Technical/TechnicalProfileScreen';
import ProductionHomeScreen from '../modules/Production/ProductionHomeScreen';
import ProductionProfileScreen from '../modules/Production/ProductionProfileScreen';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();



const CustomerHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CustomerHomeScreen" component={CustomerHomeScreen} />
    </Stack.Navigator>
  );
};

const ManagerHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ManagerHomeScreen" component={ManagerHomeScreen} />
    </Stack.Navigator>
  );
};

const TechnicalHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="TechnicalHomeScreen" component={TechnicalHomeScreen} />
    </Stack.Navigator>
  );
};

const ProductionHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProductionHomeScreen" component={ProductionHomeScreen} />
    </Stack.Navigator>
  );
};



const CustomerTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="CustomerHomeStack" component={CustomerHomeStack} />
      <Tab.Screen name="CustomerProfileStack" component={CustomerProfileScreen} />
    </Tab.Navigator>
  );
};

const ManagerTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="ManagerHomeStack" component={ManagerHomeStack} />
      <Tab.Screen name="ManagerProfileStack" component={ManagerProfileScreen} />
    </Tab.Navigator>
  );
};

const TechnicalTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="TechnicalHomeStack" component={TechnicalHomeStack} />
      <Tab.Screen name="TechnicalProfileStack" component={TechnicalProfileScreen} />
    </Tab.Navigator>
  );
};

const ProductionTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
      })}>
      <Tab.Screen name="ProductionHomeStack" component={ProductionHomeStack} />
      <Tab.Screen name="ProductionProfileStack" component={ProductionProfileScreen} />
    </Tab.Navigator>
  );
};


export const AuthContext = React.createContext(null);

const RootStackScreen = (props, ref) => {
  const [isSignIn, setIsSignIn] = useState(false)
  const [currentUserRole, setCurrentUserRole] = useState(UserType.production)

  const userData = {
    isSignIn,
    setIsSignIn,
    setCurrentUserRole
  }

  const loggedInUserRole = () => {
    if (currentUserRole == UserType.customer) {
      return <Stack.Screen name="CustomerTab" component={CustomerTabBar} />
    } else if (currentUserRole == UserType.technical) {
      return <Stack.Screen name="TechnicalTabBar" component={TechnicalTabBar} />
    } else if (currentUserRole == UserType.production) {
      return <Stack.Screen name="ProductionTabBar" component={ProductionTabBar} />
    } else {
      return <Stack.Screen name="ManagerTabBar" component={ManagerTabBar} />
    }
  }

  return (
    <SafeAreaProvider>
      <NavigationContainer ref={ref}>
        <AuthContext.Provider value={userData}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {
              !isSignIn ? <Stack.Screen name="Login" component={LoginScreen} /> :
                loggedInUserRole()
            }
          </Stack.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default forwardRef(RootStackScreen);
