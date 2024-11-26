import { useEffect } from "react";
import { useRouter, useLocalSearchParams } from "expo-router";
import { View, Text, ActivityIndicator } from "react-native";

export default function Callback() {
  const router = useRouter();
  const params = useLocalSearchParams();

  useEffect(() => {
    // Simulate token processing or query parameter extraction
    const processLogin = async () => {
      try {
        // Log or process query parameters from the redirect URI
        console.log("Received params:", params);

        // Example: Redirect to the Home screen after processing
        router.push("/");
      } catch (error) {
        console.error("Error processing login:", error);
      }
    };

    processLogin();
  }, [params]);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
      <Text>Processing login...</Text>
    </View>
  );
}
