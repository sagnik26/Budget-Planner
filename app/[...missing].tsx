import { useRouter } from "expo-router";
import { View, Text, Button, ActivityIndicator } from "react-native";

export default function NotFound() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
