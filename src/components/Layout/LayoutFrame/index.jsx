import React from "react";
import { ScrollView } from "react-native";
import { useTheme } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import useScrollView from "@hooks/useScrollView";

export const defaultProps = Object.freeze({
  STYLE: {},
});

const LayoutFrame = ({ children, style = defaultProps.STYLE }) => {
  const [enable, setHeight] = useScrollView();
  const { colors } = useTheme();
  return (
    <SafeAreaView
      style={[{ flex: 1, backgroundColor: colors.background }, style]}
    >
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          backgroundColor: "transparent",
          paddingHorizontal: 20,
        }}
        scrollEnabled={enable}
        onContentSizeChange={(contentWidth, contentHeight) => {
          setHeight(contentHeight);
        }}
      >
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LayoutFrame;
