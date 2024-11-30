import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function Layout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen name="[...missing]" options={{ headerShown: false }} />
          <Stack.Screen name="login" options={{ headerShown: false }} />
          <Stack.Screen
            name="add-new-category"
            options={{
              headerShown: true,
              presentation: "modal",
              headerTitle: "Add New Category",
            }}
          />
        </Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
