import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

interface Props {
  name: string;
}

const Avatar: React.FC<Props> = ({ name }) => {
  return (
    <View
      style={{
        width: 60,
        height: 60,
        borderRadius: 90,
        backgroundColor: "#1B4D3E",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
      }}
    >
      <Text
        style={{
          fontSize: 24,
          color: Colors.WHITE,
          fontWeight: "bold",
        }}
      >
        {name && typeof name === "string" ? name.charAt(0).toUpperCase() : "--"}
      </Text>
    </View>
  );
};

export default Avatar;

const styles = StyleSheet.create({});
