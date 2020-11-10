import React from 'react'
import { View } from "react-native";
import FieldInput from '../../components/Fields/FieldInput';

const Auth = () => {
    return (
        <View>
            <FieldInput label="COMPANY ID"/>
            <FieldInput label="USERNAME / EMAIL" textContentType='emailAddress'/>
            <FieldInput label="PASSWORD" secureTextEntry={true}/>
            <View></View>
            <View></View>
        </View>
    )
}

export default Auth
