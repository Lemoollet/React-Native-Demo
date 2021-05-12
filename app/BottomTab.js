import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
//import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
//import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import ProfileScreen from './screens/Profile';
import SearchScreen from './screens/Search';
import PlusScreen from './screens/Plus';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
//const Tab = createMaterialBottomTabNavigator();

const HomeStack = ({route, navigation}) => (
  <Stack.Navigator>
    <Stack.Screen
      component={HomeScreen}
      name={'Home'}
      options={{
        headerLeft: () => (
          <Icon.Button
            name="ios-menu"
            size={25}
            color="#000"
            backgroundColor="#fff"
            onPress={() => navigation.openDrawer()}
          />
        ),
      }}
    />
  </Stack.Navigator>
);

const DetailsStack = ({route, navigation}) => (
  <Stack.Navigator headerMode="none">
    <Stack.Screen component={DetailsScreen} name={'Details'} />
  </Stack.Navigator>
);

const CostumTabBarButton = ({children, onPress}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -30,
      justifyContent: 'center',
      alignItems: 'center',
      ...styles.shadow,
    }}>
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 25,
        backgroundColor: 'white',
      }}>
      {children}
    </View>
  </TouchableOpacity>
);

//Custom Bottom Navigation
export default function BottomTab() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        style: {
          position: 'absolute',
          bottom: 25,
          left: 10,
          right: 10,
          elevation: 10,
          backgroundColor: '#fff',
          borderRadius: 15,
          height: 90,
          ...styles.shadow,
        },
        showLabel: false,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 10}}>
              <Image
                source={require('./images/home.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#5C0AFF' : 'black',
                }}
              />
              <Text
                style={{color: focused ? '#5C0AFF' : 'black', fontSize: 12}}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Details"
        component={DetailsStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 10}}>
              <Image
                source={require('./images/details.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#5C0AFF' : 'black',
                }}
              />
              <Text
                style={{color: focused ? '#5C0AFF' : 'black', fontSize: 12}}>
                Details
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <Image
              source={require('./images/profile.png')}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: focused ? '#5C0AFF' : 'black',
              }}
            />
          ),
          tabBarButton: props => <CostumTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 10}}>
              <Image
                source={require('./images/search.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#5C0AFF' : 'black',
                }}
              />
              <Text
                style={{color: focused ? '#5C0AFF' : 'black', fontSize: 12}}>
                Search
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Plus"
        component={PlusScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={{justifyContent: 'center', alignItems: 'center', top: 10}}>
              <Image
                source={require('./images/plus.png')}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? '#5C0AFF' : 'black',
                }}
              />
              <Text
                style={{color: focused ? '#5C0AFF' : 'black', fontSize: 12}}>
                Plus
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000000',
    shadowOffset: {width: 3, height: 6},
    shadowOpacity: 0.5,
    shadowRadius: 3.5,
    elevation: 15,
  },
});

//MATERIAL BOTTOM NAVIGATION

{
  /* <Tab.Navigator initialRouteName="Home" tabBarOptions={{style: styles.shadow}}>
  <Tab.Screen
    name="Home"
    component={HomeStack}
    options={{
      tabBarLabel: 'Home',
      tabBarColor: '#000',
      tabBarIcon: ({color}) => <Icon name="home" color={color} size={26} />,
    }}
  />
  <Tab.Screen
    name="Details"
    component={DetailsStack}
    options={{
      tabBarLabel: 'Details',
      tabBarColor: 'blue',
      tabBarIcon: ({color}) => (
        <Icon name="notification" color={color} size={26} />
      ),
    }}
  />
  <Tab.Screen
    name="Profile"
    component={ProfileScreen}
    options={{
      tabBarLabel: 'Profile',
      tabBarColor: '#000',
      tabBarIcon: ({color}) => <Icon name="profile" color={color} size={26} />,
    }}
  />
  <Tab.Screen
    name="Search"
    component={SearchScreen}
    options={{
      tabBarLabel: 'Profile',
      tabBarColor: 'blue',
      tabBarIcon: ({color}) => <Icon name="search1" color={color} size={26} />,
    }}
  />
</Tab.Navigator>; */
}
