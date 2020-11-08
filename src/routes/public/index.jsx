import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../../pages/UnderConstruction';
import OnBoarding from '../../pages/OnBoarding';

const Stack = createStackNavigator();

export const routes = Object.freeze({
  ON_BOARDING: 'onBoarding',
  LOGIN: 'Login',
  FORGOT_PASSWORD: 'ForgotPassword',
  SING_UP: 'SingUp',
  RESET_PASSWORD: 'ResetPassword',
});

const Public = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name={routes.ON_BOARDING} component={OnBoarding} />
        <Stack.Screen name={routes.LOGIN} component={(props)=><MockPage {...props} pageName={routes.LOGIN} />} />
        <Stack.Screen name={routes.FORGOT_PASSWORD} component={(props)=><MockPage {...props} pageName={routes.FORGOT_PASSWORD}/>} />
        <Stack.Screen name={routes.SING_UP} component={(props)=><MockPage {...props} pageName={routes.SING_UP}/>} />
        <Stack.Screen name={routes.RESET_PASSWORD} component={(props)=><MockPage {...props} pageName={routes.RESET_PASSWORD}/>} />
      </Stack.Navigator>
  );
};

export default Public;
