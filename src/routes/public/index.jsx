import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  OnBoarding,
  Login,
  ForgotPassword,
  ResetPassword,
  CodeVerification,
  CreateAccount,
  NoticeInformation,
} from "@pages/public";

const Stack = createStackNavigator();

export const routes = Object.freeze({
  ON_BOARDING: "onBoarding",
  LOGIN: "Login",
  FORGOT_PASSWORD: "ForgotPassword",
  SING_UP: "SingUp",
  RESET_PASSWORD: "ResetPassword",
  NOTICE_INFORMATION: "NoticeInformation",
  CODE_VERIFICATION: "CodeVerification",
});

const Public = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.ON_BOARDING}
        component={OnBoarding}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={routes.LOGIN} component={Login} />
      <Stack.Screen name={routes.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={routes.SING_UP} component={CreateAccount} />
      <Stack.Screen name={routes.RESET_PASSWORD} component={ResetPassword} />
      <Stack.Screen
        name={routes.CODE_VERIFICATION}
        component={CodeVerification}
        options={{ headerShown: false }}
      />
      <Stack.Screen name={routes.NOTICE_INFORMATION} component={NoticeInformation} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default Public;
