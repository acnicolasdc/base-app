import React from "react";
import { Headline, useTheme } from "react-native-paper";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import styles from "./FieldCodeVerification.style";

export const defaultProps = Object.freeze({
  NUM_CELLS: 4,
  VALUE: "",
  SET_VALUE: () => {},
  CELL_SIZE: 50,
  CELL_STYLE: {},
  ROOT_STYLE: {},
});

const FieldCodeVerification = ({
  numCells = defaultProps.NUM_CELLS,
  setCode = defaultProps.SET_VALUE,
  code = defaultProps.VALUE,
  cellSize = defaultProps.CELL_SIZE,
  cellStyle = defaultProps.CELL_STYLE,
  rootStyle = defaultProps.CELL_STYLE,
  ...restProps
}) => {
  const { colors, dark } = useTheme();
  const ref = useBlurOnFulfill({ value: code, cellCount: numCells });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });
  const styleSheet = styles(colors, cellSize, dark);
  return (
    <CodeField
      ref={ref}
      {...props}
      value={code}
      onChangeText={setCode}
      cellCount={numCells}
      rootStyle={rootStyle}
      keyboardType="number-pad"
      textContentType="oneTimeCode"
      renderCell={({ index, symbol, isFocused }) => (
        <Headline
          key={index}
          style={[
            styleSheet.cell,
            isFocused && styleSheet.focusCell,
            cellStyle,
          ]}
          onLayout={getCellOnLayoutHandler(index)}
        >
          {symbol || (isFocused ? <Cursor /> : null)}
        </Headline>
      )}
      {...restProps}
    />
  );
};

export default FieldCodeVerification;
