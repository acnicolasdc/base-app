import React from "react";
import Company from './Company.stack';
import DvirEld from './DvirEld.stack';
import Profile from './Profile.stack';
import MyEarning from './MyEarning.stack';
import Notification from './Settlement.stack';
import Notification from './Notification.stack';
import AvailableLoad from './AvailableLoad.stack';
import ShipmentDetail from './ShipmentDetail.stack';
import DriverInformation from './DriverInformation.stack';
import DocumentAttachment from './DocumentAttachment.stack';
import SettingsConfiguration from './SettingsConfiguration.stack';
import { createStackNavigator } from "@react-navigation/stack";



const Stack = createStackNavigator(
  {
    Company: { screen: Company },
    DvirEld: { screen: DvirEld },
    Profile: { screen: Profile },
    MyEarning: { screen: MyEarning },
    Settlement: { screen: Notification },
    Notification: { screen: Notification },
    AvailableLoad: { screen: AvailableLoad },
    ShipmentDetail: { screen: ShipmentDetail },
    DriverInformation: { screen: DriverInformation },
    DocumentAttachment: { screen: DocumentAttachment },
    SettingsConfiguration: { screen: SettingsConfiguration },
  }
);

export default Stack;