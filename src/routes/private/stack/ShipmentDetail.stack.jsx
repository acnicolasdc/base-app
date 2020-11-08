import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../../../pages/UnderConstruction';

const Stack = createStackNavigator();

const ShipmentDetail = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="ShipmentDetails" component={(props)=><MockPage {...props} pageName="ShipmentDetails"/>} />
        <Stack.Screen name="SeaUpdate" component={(props)=><MockPage {...props} pageName="SeaUpdate"/>} />
        <Stack.Screen name="ChasisUpdate" component={(props)=><MockPage {...props} pageName="ChasisUpdate"/>} />
        <Stack.Screen name="GenerateSettlement" component={(props)=><MockPage {...props} pageName="GenerateSettlement"/>} />
      </Stack.Navigator>
  );
};

export default ShipmentDetail;

