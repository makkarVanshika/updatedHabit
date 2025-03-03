import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs initialRouteName="app">
      <Tabs.Screen name="home" options={{ title: "Home" }} />
      <Tabs.Screen name="profile" options={{ title: "Profile" }} />
    </Tabs>
  );
}
