import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MockPage from "@pages/UnderConstruction";

const Stack = createStackNavigator();

export const routes = Object.freeze({
  MY_EARNINGS: "MyEarnings",
});

const MyEarning = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.MY_EARNINGS}
        component={(props) => (
          <MockPage {...props} pageName={routes.MY_EARNINGS} />
        )}
      />
    </Stack.Navigator>
  );
};

export default MyEarning;
