import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MockPage from "@pages/UnderConstruction";

const Stack = createStackNavigator();

export const routes = Object.freeze({
  SHIPMENT_DETAILS: "ShipmentDetails",
  SEA_UPDATE: "SeaUpdate",
  CHASIS_UPDATE: "ChasisUpdate",
  GENERATE_SETTLEMENT: "GenerateSettlement",
});

const ShipmentDetail = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={routes.SHIPMENT_DETAILS}
        component={(props) => (
          <MockPage {...props} pageName={routes.SHIPMENT_DETAILS} />
        )}
      />
      <Stack.Screen
        name={routes.SEA_UPDATE}
        component={(props) => (
          <MockPage {...props} pageName={routes.SEA_UPDATE} />
        )}
      />
      <Stack.Screen
        name={routes.CHASIS_UPDATE}
        component={(props) => (
          <MockPage {...props} pageName={routes.CHASIS_UPDATE} />
        )}
      />
      <Stack.Screen
        name={routes.GENERATE_SETTLEMENT}
        component={(props) => (
          <MockPage {...props} pageName={routes.GENERATE_SETTLEMENT} />
        )}
      />
    </Stack.Navigator>
  );
};

export default ShipmentDetail;
