import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import Home from './screen/Home/home';
import Categories from './screen/Categories/categories';
import Races from './screen/Races/races';
import Race from './screen/Race/race';
import Drivers from './screen/Drivers/drivers';
import Driver from './screen/Driver/driver';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
    Categories: {
      screen: Categories,
    },
    Races: {
      screen: Races,
    },
    Race: {
      screen: Race,
    },
    Drivers: {
      screen: Drivers,
    },
    Driver: {
      screen: Driver,
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#333',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);

export default createAppContainer(AppNavigator);