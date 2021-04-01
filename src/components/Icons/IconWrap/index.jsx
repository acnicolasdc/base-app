import React from "react";
import { View } from "react-native";
import { useTheme } from "react-native-paper";

import styles from "./IconWrap.style";

const IconWrap = ({ children }) => {
    const { colors } = useTheme();
    const styleSheet = styles(colors);
    return (
        <View style={styleSheet.container}>
            {children}
        </View>
    );
};

export default IconWrap;
