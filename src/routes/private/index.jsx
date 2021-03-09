import React, { useContext } from "react";
import { createStackNavigator } from '@react-navigation/stack';
import { AuthorizationsContext } from "@providers/Authorizations";
import StackNavigation from './stack';
import TabNavigation from './tab';

const Stack = createStackNavigator();

export const routes = Object.freeze({
  GENERAL_TAB: 'GeneralTab',
  GENERAL_STACK: 'GeneralStack',
});

const Private = () => {
  const { getCompanyName } = useContext(AuthorizationsContext);
  return (
      <Stack.Navigator initialRouteName={routes.GENERAL_TAB}>
        <Stack.Screen name={routes.GENERAL_TAB} component={TabNavigation} options={{ title: getCompanyName() }}/>
        <Stack.Screen name={routes.GENERAL_STACK} component={StackNavigation} />
      </Stack.Navigator>
  );
};

export default Private;
