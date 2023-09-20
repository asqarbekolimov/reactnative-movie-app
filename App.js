import { NativeWindStyleSheet } from "nativewind";
import Home from "./src/screens/home";
import AppNavigations from "./src/navigations/app.navigations";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return <AppNavigations />;
}
