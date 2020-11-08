import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../../../pages/UnderConstruction';

const Stack = createStackNavigator();

const Notification = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Notifications" component={(props)=><MockPage {...props} pageName="Notifications"/>} />
      </Stack.Navigator>
  );
};

export default Notification;
