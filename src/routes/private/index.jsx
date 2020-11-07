import React from 'react'
import Stack from './stack';
import Tab from './tab';
import { createStackNavigator } from "@react-navigation/stack";

const Private = createStackNavigator({
    GeneralStack: { screen: Stack},
    GeneralTab: { screen: Tab}
},{
    initialRouteName: "GeneralTab",
});

export default Private
