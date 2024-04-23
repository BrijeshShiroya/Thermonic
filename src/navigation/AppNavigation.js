import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { forwardRef, useEffect, useState } from 'react';
import { UserType } from '../services/Utils'

import { SafeAreaProvider } from 'react-native-safe-area-context';

import LoginScreen from '../modules/Auth/LoginScreen';
import CustomerHomeScreen from '../modules/Customer/CustomerHomeScreen';
import CustomerProfileScreen from '../modules/Customer/CustomerProfileScreen';
import AddCustomerOrderScreen from '../modules/Customer/AddCustomerOrderScreen';
import ManagerHomeScreen from '../modules/Manager/ManagerHomeScreen';
import ManagerProfileScreen from '../modules/Manager/ManagerProfileScreen';
import TechnicalHomeScreen from '../modules/Technical/TechnicalHomeScreen';
import AllOrdersScreen from '../modules/Technical/AllOrdersScreen';
import TechnicalProfileScreen from '../modules/Technical/TechnicalProfileScreen';
import ProductionHomeScreen from '../modules/Production/ProductionHomeScreen';
import ProductionProfileScreen from '../modules/Production/ProductionProfileScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image } from 'react-native';
import icons from '../assets';
import { useSelector } from 'react-redux';
import ManageListScreen from '../modules/Technical/ManageListScreen';
import ManageListItemsScreen from '../modules/Technical/ManageListItemsScreen';
import AddCategoryScreen from '../modules/Technical/AddCategoryScreen';
import AddCustomerScreen from '../modules/Technical/AddCustomerScreen';
import AddManagerScreen from '../modules/Technical/AddManagerScreen';
import AddWorkerScreen from '../modules/Technical/AddWorkerScreen';
import AddDispatcherScreen from '../modules/Technical/AddDispatcherScreen';
import OrderListScreen from '../modules/Technical/OrderListScreen';
import PendingOrderListScreen from '../modules/Technical/PendingOrderListScreen'

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const CustomerHomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="CustomerHomeScreen" component={CustomerHomeScreen} />
      <Stack.Screen name="AddCustomerOrderScreen" component={AddCustomerOrderScreen} />
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
      <Stack.Screen name="AllOrdersScreen" component={AllOrdersScreen} />
      <Stack.Screen name="OrderListScreen" component={OrderListScreen} />
      <Stack.Screen name="AddCustomerOrderScreen" component={AddCustomerOrderScreen} />
      <Stack.Screen name="PendingOrderListScreen" component={PendingOrderListScreen} />
    </Stack.Navigator>
  );
};

const ManageStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ManageListScreen" component={ManageListScreen} />
      <Stack.Screen name="AddCategoryScreen" component={AddCategoryScreen} />
      <Stack.Screen name="AddCustomerScreen" component={AddCustomerScreen} />
      <Stack.Screen name="AddManagerScreen" component={AddManagerScreen} />
      <Stack.Screen name="AddWorkerScreen" component={AddWorkerScreen} />
      <Stack.Screen name="AddDispatcherScreen" component={AddDispatcherScreen} />
      <Stack.Screen name="ManageListItemsScreen" component={ManageListItemsScreen} />
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
        tabBarIcon: ({ focused }) => {
          const { icon } = iconStyle(route.name, focused);
          return <Image source={icon} resizeMode={'contain'} />;
        },
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
        tabBarIcon: ({ focused }) => {
          const { icon } = iconStyle(route.name, focused);
          return <Image source={icon} resizeMode={'contain'} />;
        },
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
        tabBarIcon: ({ focused }) => {
          const { icon } = iconStyle(route.name, focused);
          return <Image source={icon} resizeMode={'contain'} />;
        },
      })}>
      <Tab.Screen name="TechnicalHomeStack" component={TechnicalHomeStack} />
      <Tab.Screen name="ManageStack" component={ManageStack} />
      <Tab.Screen name="TechnicalProfileStack" component={TechnicalProfileScreen} />
    </Tab.Navigator>
  );
};

const iconStyle = (screenName, focused) => {
  let iconName;
  if (screenName === 'CustomerHomeStack' ||
    screenName === 'ManagerHomeStack' ||
    screenName === 'TechnicalHomeStack' ||
    screenName === 'ProductionHomeStack') {
    iconName = focused ? icons.homeSelected : icons.homeUnselected;

  } else if (screenName === 'CustomerProfileStack' ||
    screenName === 'ManagerProfileStack' |
    screenName === 'TechnicalProfileStack' ||
    screenName === 'ProductionProfileStack') {
    iconName = focused ? icons.profileSelected : icons.profileUnselected;
  } else if (screenName === 'ManageStack') {
    iconName = focused ? icons.settingsSelected : icons.settingsUnselected;
  }
  return {
    icon: iconName,
  };
};

const ProductionTabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => {
          const { icon } = iconStyle(route.name, focused);
          return <Image source={icon} resizeMode={'contain'} />;
        },
      })}>
      <Tab.Screen name="ProductionHomeStack" component={ProductionHomeStack} />
      <Tab.Screen name="ProductionProfileStack" component={ProductionProfileScreen} />
    </Tab.Navigator>
  );
};


export const AuthContext = React.createContext(null);

const RootStackScreen = (props, ref) => {
  const { user } = useSelector(state => state.auth);
  const [authUser, setAuthUser] = useState(user)

  useEffect(() => {
    setAuthUser(user)
    setCurrentUserRole(user?.user_type)
  }, [user])

  const [currentUserRole, setCurrentUserRole] = useState('')

  const loggedInUserRole = () => {
    if (currentUserRole == UserType.customer) {
      return <Stack.Screen name="CustomerTab" component={CustomerTabBar} />
    } else if (currentUserRole == UserType.owner) {
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
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {
            !authUser ? <Stack.Screen name="Login" component={LoginScreen} /> :
              loggedInUserRole()
          }
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default forwardRef(RootStackScreen);
