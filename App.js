import { NativeWindStyleSheet } from "nativewind";
import AppNavigations from "./src/navigations/app.navigations";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return <AppNavigations />;
}
