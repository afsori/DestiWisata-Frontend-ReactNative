import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../Home';
import Search from '../Search';
import DetailAlam from '../DetailAlam';
import ListAlam from '../ListAlam';
import ListPantai from '../ListPantai';
import DetailPantai from '../DetailPantai';
import History from '../History';
import Profile from '../Profile';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createSwitchNavigator} from 'react-navigation';
const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'Home',
      headerStyle: {
        backgroundColor: '#cecece',
      },
      header: null,
    },
  },

  Search: {
    screen: Search,
  },
  DetailAlam: {
    screen: DetailAlam,
    navigationOptions: {
      header: null,
    },
  },
  ListAlam: {
    screen: ListAlam,
    navigationOptions: {
      header: null,
    },
  },
  ListPantai: {
    screen: ListPantai,
    navigationOptions: {
      header: null,
    },
  },
  DetailPantai: {
    screen: DetailPantai,
    navigationOptions: {
      header: null,
    },
  },
});

const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: AppNavigator,
    },
    History: {
      screen: History,
      navigationOptions: {
        tabBarLabel: 'History',
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: '#4a148c',
      inactiveTintColor: '#757575',
      style: {
        backgroundColor: 'white',
        borderTopWidth: 0,
        shadowOffset: {width: 5, height: 3},
        shadowColor: 'black',
        shadowOpacity: 0.5,
        elevation: 5,
      },
    },
  },
);
const pageScreen = createSwitchNavigator({
  App: {
    screen: BottomNavigator,
  },
});

export default createAppContainer(pageScreen);
