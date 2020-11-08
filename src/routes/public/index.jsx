import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../../pages/UnderConstruction';


const Stack = createStackNavigator();

const Public = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="onBoarding" component={(props)=><MockPage {...props} pageName="onBoarding" screen="Login"/>} />
        <Stack.Screen name="Login" component={(props)=><MockPage {...props} pageName="Login" screen="ForgotPassword"/>} />
        <Stack.Screen name="ForgotPassword" component={(props)=><MockPage {...props} pageName="ForgotPassword" screen="SingUp"/>} />
        <Stack.Screen name="SingUp" component={(props)=><MockPage {...props} pageName="SingUp" screen="ResetPassword"/>} />
        <Stack.Screen name="ResetPassword" component={(props)=><MockPage {...props} pageName="ResetPassword" screen="onBoarding"/>} />
      </Stack.Navigator>
  );
};

export default Public;
