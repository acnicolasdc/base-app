import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../../../pages/UnderConstruction';

const Stack = createStackNavigator();

const DocumentAttachment = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="DocumentsAttachments" component={(props)=><MockPage {...props} pageName="DocumentsAttachments"/>} />
        <Stack.Screen name="AddRequiredDocuments" component={(props)=><MockPage {...props} pageName="AddRequiredDocuments"/>} />
        <Stack.Screen name="AddAdditionalDocuments" component={(props)=><MockPage {...props} pageName="AddAdditionalDocuments"/>} />
        <Stack.Screen name="AddSignature" component={(props)=><MockPage {...props} pageName="AddSignature"/>} />
      </Stack.Navigator>
  );
};

export default DocumentAttachment;
