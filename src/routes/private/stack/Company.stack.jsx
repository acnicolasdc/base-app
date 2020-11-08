import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../../../pages/UnderConstruction';

const Stack = createStackNavigator();

const Company = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Companies" component={(props)=><MockPage {...props} pageName="Companies"/>} />
        <Stack.Screen name="Organizations" component={(props)=><MockPage {...props} pageName="Organizations"/>} />
        <Stack.Screen name="Request" component={(props)=><MockPage {...props} pageName="Request"/>} />
      </Stack.Navigator>
  );
};

export default Company;
