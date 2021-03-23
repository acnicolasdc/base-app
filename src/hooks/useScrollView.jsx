import { useState, useEffect } from "react";
import { Dimensions } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
const useScrollView = () => {
  const [enable, setEnable] = useState(false);
  const [height, setHeight] = useState(0);
  const insets = useSafeAreaInsets();
  const screenHeight = Math.round(Dimensions.get("window").height);
  const visibleHeight = screenHeight - insets.bottom - insets.top;
  useEffect(() => {
    if (height >= visibleHeight) {
      setEnable(true);
    }
  }, [height, enable]);

  return [enable, setHeight];
};

export default useScrollView;
