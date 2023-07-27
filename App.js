import "react-native-gesture-handler";
import { useFonts } from "expo-font";
import { StyleSheet } from "react-native";
import HomeDrawer from "./routes/homeDrawer";

const FONTS = {
  "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
  "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
};

export default function App() {
  const [fontsLoaded] = useFonts(FONTS);

  if (!fontsLoaded) {
    return null;
  }
  return <HomeDrawer />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
