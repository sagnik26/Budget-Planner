import { StyleSheet, View, Image, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { client } from "@/utils/kindeConfig";
import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";
import Avatar from "../Avatar";

const Header = () => {
  const [user, setUser] = useState<any>("");

  const getUserData = async () => {
    const userData = await client.getUserDetails();
    if (userData) {
      setUser(userData);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);

  console.log("USER---", user);

  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 8,
        alignItems: "center",
      }}
    >
      <Avatar name={user?.given_name} />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          width: "82%",
        }}
      >
        <View>
          <Text style={{ color: Colors.WHITE, fontSize: 16 }}>Welcome,</Text>
          <Text
            style={{ color: Colors.WHITE, fontSize: 20, fontWeight: "bold" }}
          >
            {user?.given_name}
          </Text>
        </View>
        <Ionicons name="notifications" size={24} color="white" />
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
