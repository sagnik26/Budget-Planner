import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from "react";
import { getDataString, removeItem } from "@/helpers/async-storage";
import { useRouter } from "expo-router";
import { client } from "@/utils/kindeConfig";
import { supabase } from "@/utils/supabaseConfig";
import Header from "@/components/Header";
import { Colors } from "@/constants/Colors";

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
      await removeItem("login");
      router.push("/login");
    }
  };

  const getCategoryList = async () => {
    const user = await client.getUserDetails();
    let { data: category, error } = await supabase
      .from("category")
      .select("*")
      .eq("created_by", user.email);

    if (error) {
      console.error(error);
      return;
    }

    if (category) {
      console.log("DATA ---> ", category);
    }
  };

  useEffect(() => {
    checkUserAuth();
    getCategoryList();
  }, []);

  return (
    <View
      style={{
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        height: 150,
      }}
    >
      <Header />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});