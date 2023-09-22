import { NativeWindStyleSheet } from "nativewind";
import Home from "./src/screens/home";
import AppNavigations from "./src/navigations/app.navigations";
import { TabNavigation } from "./src/navigations/tab.navigation";

NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  return <TabNavigation />;
}
