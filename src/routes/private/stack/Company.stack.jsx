import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../../../pages/UnderConstruction';

const Stack = createStackNavigator();

export const routes = Object.freeze({
  COMPANIES: 'Companies',
  ORGANIZATIONS:'Organizations',
  REQUEST:'Request'
});

const Company = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name={routes.COMPANIES} component={(props)=><MockPage {...props} pageName={routes.COMPANIES}/>} />
        <Stack.Screen name={routes.ORGANIZATIONS} component={(props)=><MockPage {...props} pageName={routes.ORGANIZATIONS}/>} />
        <Stack.Screen name={routes.REQUEST} component={(props)=><MockPage {...props} pageName={routes.REQUEST}/>} />
      </Stack.Navigator>
  );
};

export default Company;
