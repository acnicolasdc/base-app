import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MockPage from '../../../pages/UnderConstruction';

const Tab = createBottomTabNavigator({
    Load: { screen: () => <MockPage pageName='Load Tab'/>},
    Document:{ screen: () => <MockPage pageName='Document Tab'/>},
    Chat:{ screen: () => <MockPage pageName='Chat Tab'/>},
},{
    initialRouteName: "Load",
});

export default Tab;