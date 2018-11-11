import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import Comments from './page/comment';
import Collect from './page/collect';
import Play from './page/lyrics';
import { Provider } from 'react-redux';
import store from './redux/store';
import { createMaterialTopTabNavigator } from 'react-navigation';

export default createMaterialTopTabNavigator({
    Collect: Collect,
    Comments: Comments,
    LYRICS: Play,
}, {
        initialRouteName: 'Comments',
        tabBarOptions: {
            style: {
                backgroundColor: '#000000',
            },
            indicatorStyle: {
                backgroundColor: '#ffffff',
            }
        }
    });
