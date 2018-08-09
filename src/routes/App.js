/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {createStackNavigator} from 'react-navigation';
import Home from './Home';
import Dashboard from './Dashboard';
export default createStackNavigator({
    Home: {
        screen: Home
    },
    Dashboard: {
        screen: Dashboard
    }
},{
    initialRouteName: 'Home'
});