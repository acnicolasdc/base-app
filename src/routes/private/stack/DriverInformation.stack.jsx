import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MockPage from '../../../pages/UnderConstruction';

const DriverInformation = createStackNavigator(
  {
    DriverInformation: { screen: () => <MockPage pageName='Driver Information'/> },
    OtherQualificationsSettings: { screen: () => <MockPage pageName='Other Qualifications Settings'/> },
    CameraScanner: { screen: () => <MockPage pageName='Camera Scanner'/> },
    UpdatePreferenceInformation: { screen: () => <MockPage pageName='Update Preference Information'/> },
    EndorsementSettings: { screen: () => <MockPage pageName='Endorsement Settings'/> },
  },
  {
    initialRouteName: "DriverInformation",
  }
);

export default DriverInformation;
