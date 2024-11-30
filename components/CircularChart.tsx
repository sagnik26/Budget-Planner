import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PieChart from "react-native-pie-chart";
import { Colors } from "@/constants/Colors";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const CircularChart = () => {
  const widthAndHeight = 150;
  const [series, setSeries] = useState([1]);
  const [sliceColor, setSliceColor] = useState([Colors.GRAY]);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 20,
          fontFamily: "Outfit-Regular",
        }}
      >
        Total Estimate: <Text style={{ fontFamily: "Outfit-Bold" }}>0$</Text>
      </Text>
      <View style={styles.subContainer}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.65}
          coverFill={"#FFF"}
        />
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 5,
            alignItems: "center",
            width: "20%",
          }}
        >
          <MaterialCommunityIcons
            name="checkbox-blank-circle"
            size={24}
            color={Colors.GRAY}
          />
          <Text style={{ fontFamily: "Outfit-Regular" }}>NA</Text>
        </View>
      </View>
    </View>
  );
};

export default CircularChart;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    backgroundColor: Colors.WHITE,
    padding: 20,
    borderRadius: 15,
    elevation: 21,
  },
  subContainer: {
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    gap: 60,
  },
});
