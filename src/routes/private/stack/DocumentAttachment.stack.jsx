import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const DocumentAttachment = createStackNavigator(
  {
    DocumentsAttachments: { screen: null },
    AddRequiredDocuments: { screen: null },
    AddAdditionalDocuments: { screen: null },
    AddSignature: { screen: null },
  },
  {
    initialRouteName: "DocumentsAttachments",
  }
);

export default DocumentAttachment;
