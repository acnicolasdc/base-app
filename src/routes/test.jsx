import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../pages/UnderConstruction';
const Stack = createStackNavigator();

const Test = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={(props)=><MockPage {...props} pageName="Home"/>} />
        <Stack.Screen name="DAKITI" component={(props)=><MockPage {...props} pageName="DAKITI"/>} />
      </Stack.Navigator>
  );
};

export default Test;
