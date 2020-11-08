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

export const routes = Object.freeze({
  COMPANY: 'Company',
  DVIR_ELD:'DvirEld',
  PROFILE: 'Profile',
  MY_EARNING:'MyEarning',  
  SETTLEMENT: 'Settlement',
  NOTIFICATION:'Notification',  
  AVAILABLE_LOAD: 'AvailableLoad',
  SHIPMENT_DETAIL:'ShipmentDetail',  
  DRIVER_INFORMATION: 'DriverInformation',
  DOCUMENT_ATTACHMENT:'DocumentAttachment',
  SETTINGS_CONFIGURATION:'SettingsConfiguration',
});

const StackNavigation = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name={routes.COMPANY} component={Company} />
        <Stack.Screen name={routes.DVIR_ELD} component={DvirEld} />
        <Stack.Screen name={routes.PROFILE} component={Profile} />
        <Stack.Screen name={routes.MY_EARNING} component={MyEarning} />
        <Stack.Screen name={routes.SETTLEMENT} component={Settlement} />
        <Stack.Screen name={routes.NOTIFICATION} component={Notification} />
        <Stack.Screen name={routes.AVAILABLE_LOAD} component={AvailableLoad} />
        <Stack.Screen name={routes.SHIPMENT_DETAIL} component={ShipmentDetail} />
        <Stack.Screen name={routes.DRIVER_INFORMATION} component={DriverInformation} />
        <Stack.Screen name={routes.DOCUMENT_ATTACHMENT} component={DocumentAttachment} />
        <Stack.Screen name={routes.SETTINGS_CONFIGURATION} component={SettingsConfiguration} />
      </Stack.Navigator>
  );
};

export default StackNavigation;
