import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableHighlight, View, StyleSheet } from "react-native";
import Svg, { G, Circle } from "react-native-svg";

export const defaultProps = Object.freeze({
  RADIUS: 25,
  FILL: '#ECEBEC',
  ICON_COLOR: '#000',
  ON_PRESS: () => {},
});

const ButtonArrow = ({
  radius = defaultProps.RADIUS,
  fill = defaultProps.FILL,
  iconColor = defaultProps.ICON_COLOR,
  onPress = defaultProps.ON_PRESS,
}) => {
  const halfCircle = radius;
  return (
    <TouchableHighlight
      style={{ width: radius * 2, height: radius * 2 }}
      activeOpacity={1}
      underlayColor="transparent"
      onPress={onPress}
    >
      <>
        <Svg
          height={radius * 2}
          width={radius * 2}
          viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
        >
          <G rotation="-90" origin={`${halfCircle}, ${halfCircle}`}>
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              fill={fill}
            />
          </G>
        </Svg>
        <View
          style={[
            StyleSheet.absoluteFillObject,
            { justifyContent: "center", alignItems: "center" },
          ]}
        >
          <Ionicons
            name="ios-arrow-back"
            size={radius * 0.7}
            color={iconColor}
          />
        </View>
      </>
    </TouchableHighlight>
  );
};

export default ButtonArrow;
