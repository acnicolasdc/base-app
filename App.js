import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Routes from "@routes";
import Theme from "@providers/Theme";

export default function App() {
  return (
    <SafeAreaProvider>
      <Theme>
        <Routes />
      </Theme>
    </SafeAreaProvider>
  );
}
