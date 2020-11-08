import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableHighlight, View, StyleSheet } from "react-native";
import Svg, { G, Circle } from "react-native-svg";

export const defaultProps = Object.freeze({
  RADIUS: 50,
  STROKE_WIDTH: 15,
  COLOR: "#0DE1F6",
  BACK_COLOR: "#0DE1F6",
  STEPS: 3,
  POSITION: 0,
  ON_PRESS: () => {},
});

const calcStepPercent = (circle, numSteps, position) => {
  return circle - (circle / numSteps) * position;
};

const ButtonStepIndicator = ({
  radius = defaultProps.RADIUS,
  strokeWidth = defaultProps.STROKE_WIDTH,
  color = defaultProps.COLOR,
  backColor = defaultProps.BACK_COLOR,
  steps = defaultProps.STEPS,
  position = defaultProps.POSITION,
  onPress = defaultProps.ON_PRESS,
}) => {
  const circleRef = React.useRef();
  const circumference = Math.floor(2 * Math.PI * radius);
  const halfCircle = radius + strokeWidth;
  const stepPercent = calcStepPercent(circumference, steps, position);
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
              ref={circleRef}
              cx="50%"
              cy="50%"
              r={radius}
              fill="transparent"
              stroke={color}
              strokeWidth={strokeWidth}
              strokeDashoffset={circumference}
              strokeDasharray={circumference}
              strokeDashoffset={stepPercent}
            />
            <Circle
              cx="50%"
              cy="50%"
              r={radius}
              fill="transparent"
              stroke={backColor}
              strokeWidth={strokeWidth}
              strokeLinejoin="round"
              strokeOpacity=".1"
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
            name="ios-arrow-round-forward"
            size={radius * 0.6}
            color="black"
          />
        </View>
      </>
    </TouchableHighlight>
  );
};

export default ButtonStepIndicator;
