import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import { NativeWindStyleSheet } from "nativewind";
import Home from "./src/pages/home";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return <Home />;
}
