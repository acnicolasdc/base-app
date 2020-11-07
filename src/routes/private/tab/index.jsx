import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator({
    Load: { screen: null},
    Document:{ screen: null},
    Chat:{ screen: null},
},{
    initialRouteName: "Load",
});

export default Tab;