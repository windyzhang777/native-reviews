import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/home";
import ReviewDetails from "../screens/reviewDetails";
import Header from "../shared/header";

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: {
          backgroundColor: "#eee",
        },
        headerTintColor: "#444",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={({ navigation }) => ({
          headerTitle: () => (
            <Header title="Game" navigation={navigation} />
          ),
        })}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={{
          title: "Review Details",
        }}
      />
    </Stack.Navigator>
  );
}
