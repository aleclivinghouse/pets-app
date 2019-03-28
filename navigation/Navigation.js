import React from 'react';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Matches from '../screens/Matches';
import {createBottomTabNavigator,  createAppContainer} from 'react-navigation';
import {View, Text, StyleSheet} from 'react-native';

const Tab = createBottomTabNavigator({
  Home: {
    screen: Home,
  },
  Profile: {
    screen: Profile,
  },
  Matches: {
    screen: Matches,
  }
});

const AppContainer = createAppContainer(Tab);

export default AppContainer;
