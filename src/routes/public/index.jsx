import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../../pages/UnderConstruction';


const Stack = createStackNavigator();

const Public = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="onBoarding" component={(props)=><MockPage {...props} pageName="onBoarding"/>} />
        <Stack.Screen name="Login" component={(props)=><MockPage {...props} pageName="Login"/>} />
        <Stack.Screen name="ForgotPassword" component={(props)=><MockPage {...props} pageName="ForgotPassword"/>} />
        <Stack.Screen name="SingUp" component={(props)=><MockPage {...props} pageName="SingUp"/>} />
        <Stack.Screen name="ResetPassword" component={(props)=><MockPage {...props} pageName="ResetPassword"/>} />
      </Stack.Navigator>
  );
};

export default Public;
