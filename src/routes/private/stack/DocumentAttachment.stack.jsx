import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import MockPage from '../../../pages/UnderConstruction';

const Stack = createStackNavigator();

export const routes = Object.freeze({
  DOCUMENTS_ATTACHMENTS: 'DocumentsAttachments',
  ADD_REQUIRED_DOCUMENTS:'AddRequiredDocuments',
  ADD_ADDITIONAL_DOCUMENTS:'AddAdditionalDocuments',
  ADD_SIGNATURE:'AddSignature',
});

const DocumentAttachment = () => {
  return (
      <Stack.Navigator>
        <Stack.Screen name={routes.DOCUMENTS_ATTACHMENTS} component={(props)=><MockPage {...props} pageName={routes.DOCUMENTS_ATTACHMENTS}/>} />
        <Stack.Screen name={routes.ADD_REQUIRED_DOCUMENTS} component={(props)=><MockPage {...props} pageName={routes.ADD_REQUIRED_DOCUMENTS}/>} />
        <Stack.Screen name={routes.ADD_ADDITIONAL_DOCUMENTS} component={(props)=><MockPage {...props} pageName={routes.ADD_ADDITIONAL_DOCUMENTS}/>} />
        <Stack.Screen name={routes.ADD_SIGNATURE} component={(props)=><MockPage {...props} pageName={routes.ADD_SIGNATURE}/>} />
      </Stack.Navigator>
  );
};

export default DocumentAttachment;
