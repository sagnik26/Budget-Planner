import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Images } from "@/constants/Images";
import { Colors } from "@/constants/Colors";
import { client } from "@/utils/kindeConfig";
import { useRouter } from "expo-router";
import { removeItem, storeDataString } from "@/helpers/async-storage";

export const LoginScreen = () => {
  const router = useRouter();

  const handleSignIn = async () => {
    const token = await client.login();

    if (token) {
      console.log("TOKK", token);
      router.push("/");
      await storeDataString("login", "true");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={Images.loginBg} style={styles.bgImage} />
      <View
        style={{
          backgroundColor: Colors.SPLITWISE_GREEN,
          width: "100%",
          height: "60%",
          paddingTop: 20,
          paddingHorizontal: 10,
          marginTop: -30,
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          position: "absolute",
          bottom: 0,
        }}
      >
        <Text
          style={{
            fontSize: 35,
            textAlign: "center",
            color: Colors.WHITE,
            fontFamily: "Outfit-Bold",
          }}
        >
          Personal Budget Planner
        </Text>
        <Text
          style={{
            fontSize: 18,
            textAlign: "center",
            color: Colors.WHITE,
            marginTop: 20,
            fontFamily: "Outfit-Regular",
          }}
        >
          Stay on Track, Event by Event, Your Personal Budget Planner
        </Text>
        <TouchableOpacity style={styles.loginBtn} onPress={handleSignIn}>
          <Text
            style={{
              textAlign: "center",
              color: Colors.WHITE,
              fontFamily: "Outfit-Bold",
            }}
          >
            Login / Signup
          </Text>
        </TouchableOpacity>
        <Text
          style={{
            fontSize: 13,
            color: Colors.WHITE,
            marginTop: 10,
            fontFamily: "Outfit-Regular",
          }}
        >
          * By login/signup you will agree to our terms and conditions
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: Colors.WHITE,
    position: "relative",
    flex: 1,
  },
  bgImage: {
    width: "100%",
    height: 400,
  },
  loginBtn: {
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 30,
    borderRadius: 30,
  },
});
