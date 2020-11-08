import * as React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MockPage from '../../../pages/UnderConstruction';

const Tab = createBottomTabNavigator();

export const routes = Object.freeze({
  LOAD: 'load',
  DOCUMENT: 'document',
  CHAT: 'chat',
});

const TabNavigation = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name={routes.LOAD} component={(props)=><MockPage {...props} pageName={routes.LOAD}/>} />
        <Tab.Screen name={routes.DOCUMENT} component={(props)=><MockPage {...props} pageName={routes.DOCUMENT}/>} />
        <Tab.Screen name={routes.CHAT} component={(props)=><MockPage {...props} pageName={routes.CHAT}/>} />
    </Tab.Navigator>
  );
};

export default TabNavigation;