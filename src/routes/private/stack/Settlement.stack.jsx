import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MockPage from "@pages/UnderConstruction";

const Stack = createStackNavigator();

export const routes = Object.freeze({
  SETTLEMENTS: "Settlements",
  SETTLEMENTS_DETAIL: "SettlementsDetail",
  ADD_ADDITIONAL_FEES: "AddAdditionalFees",
});

const Settlement = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.SETTLEMENTS}
        component={(props) => (
          <MockPage {...props} pageName={routes.SETTLEMENTS} />
        )}
      />
      <Stack.Screen
        name={routes.SETTLEMENTS_DETAIL}
        component={(props) => (
          <MockPage {...props} pageName={routes.SETTLEMENTS_DETAIL} />
        )}
      />
      <Stack.Screen
        name={routes.ADD_ADDITIONAL_FEES}
        component={(props) => (
          <MockPage {...props} pageName={routes.ADD_ADDITIONAL_FEES} />
        )}
      />
    </Stack.Navigator>
  );
};

export default Settlement;
