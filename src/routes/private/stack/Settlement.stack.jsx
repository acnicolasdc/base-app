import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../../../pages/UnderConstruction';

const Stack = createStackNavigator();

const Settlement = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Settlements" component={(props)=><MockPage {...props} pageName="Settlements"/>} />
        <Stack.Screen name="SettlementsDetail" component={(props)=><MockPage {...props} pageName="SettlementsDetail"/>} />
        <Stack.Screen name="AddAdditionalFees" component={(props)=><MockPage {...props} pageName="AddAdditionalFees"/>} />
      </Stack.Navigator>
  );
};

export default Settlement;
