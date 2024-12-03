import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface Props {
  categoryData: any;
}

const CourseDetails: React.FC<Props> = ({ categoryData }) => {
  return (
    <View>
      <View style={styles.container}>
        <View
          style={[
            styles.iconContainer,
            {
              backgroundColor: categoryData?.color ?? Colors.SPLITWISE_GREEN,
            },
          ]}
        >
          <Text style={styles.textIcon}>{categoryData?.icon ?? "--"}</Text>
        </View>
        <View style={{ flex: 1, marginLeft: 20 }}>
          <Text style={styles.categoryName}>{categoryData?.name}</Text>
          <Text style={styles.categoryItem}>
            {categoryData?.CategoryItems?.length} Items
          </Text>
        </View>
        <FontAwesome name="trash-o" size={24} color="red" />
      </View>
      {/* Progress Bar */}
      <View style={styles.amountContainer}>
        <Text style={{ fontFamily: "Outfit-Regular" }}>$500</Text>
        <Text style={{ fontFamily: "Outfit-Regular" }}>
          Total Budget: {categoryData?.assigned_budget}
        </Text>
      </View>

      <View style={styles.progressBarConatainer}>
        <View style={styles.progressBarSubConatainer}></View>
      </View>
    </View>
  );
};

export default CourseDetails;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 2,
  },
  textIcon: {
    fontSize: 25,
    textAlign: "center",
    padding: 20,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "baseline",
    width: "20%",
    borderRadius: 15,
  },
  categoryName: {
    fontFamily: "Outfit-Bold",
    fontSize: 24,
  },
  categoryItem: {
    fontFamily: "Outfit",
    fontSize: 16,
  },
  amountContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  progressBarConatainer: {
    width: "100%",
    height: 15,
    backgroundColor: Colors.GRAY,
    borderRadius: 99,
    marginTop: 7,
  },
  progressBarSubConatainer: {
    width: "40%",
    backgroundColor: Colors.SPLITWISE_GREEN,
    height: 15,
    borderRadius: 99,
  },
});