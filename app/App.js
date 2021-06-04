import 'react-native-gesture-handler';
import React, {useState, useEffect, useMemo, useReducer} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {ActivityIndicator, View} from 'react-native';

import {AuthContext} from '../components/Context';

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
  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'REGISTER':
        return {
          ...prevState,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      default:
        break;
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      //Aqui sería la llamada a nuestra API para autenticar el user.
      signIn: async (userName, password) => {
        let userToken;
        userToken = null;
        if (userName === 'user' && password === 'pass') {
          try {
            userToken = 'dfghjk';
            await AsyncStorage.setItem('userToken', userToken);
          } catch (error) {
            console.log(error);
          }
        }
        console.log('user token: ', userToken);
        console.log(userName, password);
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem('userToken');
        } catch (error) {
          console.log(error);
        }
        dispatch({type: 'LOGOUT'});
      },
      signUp: () => {
        setUserToken('asdfg');
        setIsLoading(false);
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      try {
        userToken = await AsyncStorage.getItem('userToken');
      } catch (error) {
        console.log(error);
      }
      dispatch({type: 'RETRIVE_TOKEN', token: userToken});
    }, 2000);
  }, []);

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {loginState.userToken !== null ? (
          <Drawer.Navigator drawerContent={props => <DrawerNav {...props} />}>
            <Drawer.Screen name="HomeDrawer" component={BottomTab} />
            <Drawer.Screen name="BookmarksStack" component={BookmarksStack} />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
          </Drawer.Navigator>
        ) : (
          <RootStack />
        )}
      </NavigationContainer>
    </AuthContext.Provider>
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
