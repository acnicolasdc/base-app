import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '@pages/UnderConstruction';

const Stack = createStackNavigator();

export const routes = Object.freeze({
  NOTIFICATIONS:'Notifications',  
});

const Notification = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name={routes.NOTIFICATIONS} component={(props)=><MockPage {...props} pageName={routes.NOTIFICATIONS}/>} />
      </Stack.Navigator>
  );
};

export default Notification;
