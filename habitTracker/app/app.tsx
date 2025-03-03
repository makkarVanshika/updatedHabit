import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./tabs/index";
import Details from "./tabs/details";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Welcome" }} />
        <Stack.Screen name="Profile" component={Details} />
    </NavigationContainer>
  );
}
