import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MockPage from '../../../pages/UnderConstruction';

const DocumentAttachment = createStackNavigator(
  {
    DocumentsAttachments: { screen: () => <MockPage pageName='Documents Attachments'/> },
    AddRequiredDocuments: { screen: () => <MockPage pageName='Add Required Documents'/> },
    AddAdditionalDocuments: { screen: () => <MockPage pageName='Companies'/> },
    AddSignature: { screen: () => <MockPage pageName='Add Signature'/> },
  },
  {
    initialRouteName: "DocumentsAttachments",
  }
);

export default DocumentAttachment;
