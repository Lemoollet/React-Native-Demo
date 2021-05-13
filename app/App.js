import 'react-native-gesture-handler';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import IntroScreen from './screens/onBoarding/Intro';
import LoginScreen from './screens/onBoarding/Login';
import SignUpScreen from './screens/onBoarding/SignUp';

import BottomTab from './BottomTab';
import DrawerNav from './DrawerNav';
import BookmarksScreen from './screens/Bookmarks';
import SettingsScreen from './screens/Settings';
import ChatScreen from './screens/Chat';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const RootStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen name="Intro" component={IntroScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="SignUp" component={SignUpScreen} />
  </Stack.Navigator>
);

const BookmarksStack = () => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen component={BookmarksScreen} name={'Bookmarks'} />
    <Stack.Screen component={ChatScreen} name={'Chat'} />
  </Stack.Navigator>
);

//Custom Drawer
export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
      {/* <Drawer.Navigator
        initialRouteName="HomeDrawer"
        drawerContent={props => <DrawerNav {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={BottomTab} />
        <Drawer.Screen name="BookmarksStack" component={BookmarksStack} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}

//Normal Drawer
{
  /* <NavigationContainer>
  <Drawer.Navigator
    initialRouteName="Home"
    //drawerContent={props => <DrawerNav {...props} />}
  >
    <Drawer.Screen name="Home" component={BottomTab} />
    <Drawer.Screen name="Details" component={DetailsStack} />
  </Drawer.Navigator>
</NavigationContainer>; */
}
