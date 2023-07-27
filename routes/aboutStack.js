import { createNativeStackNavigator } from "@react-navigation/native-stack";
import About from "../screens/about";
import Header from "../shared/header";

const Stack = createNativeStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator initialRouteName="About">
      <Stack.Screen
        name="About"
        component={About}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Header title="About" navigation={navigation} />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
