import { KindeSDK } from "@kinde-oss/react-native-sdk-0-7x";

// "myapp://niktest.kinde.com/kinde_callback", "exp://192.168.0.107:8081" -> logout uri react-native
export const client = new KindeSDK(
  "https://niktest.kinde.com",
  "myapp://niktest.kinde.com/kinde_callback",
  "102c230848b14fbb936b3a96f6ed4553",
  "myapp://niktest.kinde.com/kinde_callback"
);
