import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MockPage from '../../../pages/UnderConstruction';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Load" component={(props)=><MockPage {...props} pageName="Load"/>} />
        <Tab.Screen name="Document" component={(props)=><MockPage {...props} pageName="Document"/>} />
        <Tab.Screen name="Chat" component={(props)=><MockPage {...props} pageName="Chat"/>} />
    </Tab.Navigator>
  );
};

export default TabNavigation;