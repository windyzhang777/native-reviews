import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AboutStack from "./aboutStack";
import HomeStack from "./homeStack";

const Drawer = createDrawerNavigator();

export default function HomeDrawer() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#eee",
          },
          headerTintColor: "#444",
          headerShown: false,
        }}
      >
        <Drawer.Screen
          name="HomeStack"
          component={HomeStack}
        />
        <Drawer.Screen
          name="AboutStack"
          component={AboutStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
