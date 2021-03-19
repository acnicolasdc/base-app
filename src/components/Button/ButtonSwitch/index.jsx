import * as React from "react";
import { TouchableHighlight } from "react-native";
import { useTheme } from "react-native-paper";
import Svg, { G, Rect } from "react-native-svg";

export const defaultProps = Object.freeze({
  SIZE: 12,
  IS_TOGGLE: false,
});

const ButtonSwitch = ({
  size = defaultProps.SIZE,
  isToggle = defaultProps.IS_TOGGLE,
  onPress,
}) => {
  const width = size * 4;
  const height = size * 2;
  const barRef = React.useRef();
  const { colors } = useTheme();
  React.useEffect(() => {
    const percentage = isToggle ? 70 : 20;
    if (barRef?.current) {
      barRef.current.setNativeProps({
        x: `${percentage}%`,
      });
    }
  }, [isToggle]);
  return (
    <TouchableHighlight
      style={{ width, height }}
      activeOpacity={1}
      underlayColor="transparent"
      onPress={onPress}
    >
      <Svg height={height} width={width}>
        <G>
          <Rect
            width={width}
            height={height}
            fill={isToggle ? colors.pallet.green001 : colors.pallet.grey001}
            rx={size}
          />
          <Rect
            ref={barRef}
            x="20%"
            y={size / 2}
            width={size * 0.4}
            height={size}
            fill={colors.background}
            rx={size * 0.2}
          />
        </G>
      </Svg>
    </TouchableHighlight>
  );
};

export default ButtonSwitch;
