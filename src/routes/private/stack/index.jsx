import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Company from './Company.stack';
import DvirEld from './DvirEld.stack';
import Profile from './Profile.stack';
import MyEarning from './MyEarning.stack';
import Settlement from './Settlement.stack';
import Notification from './Notification.stack';
import AvailableLoad from './AvailableLoad.stack';
import ShipmentDetail from './ShipmentDetail.stack';
import DriverInformation from './DriverInformation.stack';
import DocumentAttachment from './DocumentAttachment.stack';
import SettingsConfiguration from './SettingsConfiguration.stack';

const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Company" component={Company} />
        <Stack.Screen name="DvirEld" component={DvirEld} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="MyEarning" component={MyEarning} />
        <Stack.Screen name="Settlement" component={Settlement} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="AvailableLoad" component={AvailableLoad} />
        <Stack.Screen name="ShipmentDetail" component={ShipmentDetail} />
        <Stack.Screen name="DriverInformation" component={DriverInformation} />
        <Stack.Screen name="DocumentAttachment" component={DocumentAttachment} />
        <Stack.Screen name="SettingsConfiguration" component={SettingsConfiguration} />
      </Stack.Navigator>
  );
};

export default StackNavigation;
