import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "./src/routes";
import Theme from "./src/provider/Theme";

export default function App() {
  return (
    <SafeAreaProvider>
      <Theme>
        <Routes />
      </Theme>
    </SafeAreaProvider>
  );
}
