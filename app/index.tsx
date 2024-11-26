import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { getDataString, removeItem } from "@/helpers/async-storage";
import { useRouter } from "expo-router";
import { client } from "@/utils/kindeConfig";

export const Home = () => {
  const router = useRouter();

  const checkUserAuth = async () => {
    const result = await getDataString("login");

    console.log("IS LOGIN---", result);
    if (result !== "true") {
      router.push("/login");
    }
  };

  const handleLogout = async () => {
    // With open web in your apps
    const isLoggedOut = await client.logout();

    if (isLoggedOut) {
      // Need to implement, e.g: redirect user to login screen, etc...
      await removeItem("login");
      router.push("/login");
    }
  };

  useEffect(() => {
    checkUserAuth();
  }, []);

  return (
    <View>
      <Text>Home</Text>
      {/* {loggedIn !== "true" ? <LoginScreen /> : <Text>Home</Text>} */}
      <Button title="logout" onPress={handleLogout} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
