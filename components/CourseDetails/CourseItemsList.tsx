import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";

interface Props {
  categoryData: any;
}

const CourseItemsList: React.FC<Props> = ({ categoryData }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Item List</Text>
      <View style={{ marginTop: 15 }}>
        {categoryData?.CategoryItems?.length !== 0 ? (
          categoryData?.CategoryItems?.map((item: any, index: number) => (
            <View key={index}>
              <View style={styles.itemContainer}>
                <Image source={{ uri: item?.Image }} style={styles.image} />
                <View style={{ flex: 1, marginLeft: 10 }}>
                  <Text style={styles.name}>{item?.name}</Text>
                  {/* <Text style={styles.url}>{item?.url}</Text> */}
                </View>
                <Text style={styles.cost}>{item?.cost}</Text>
              </View>

              {/* Show bottom border for all except last one */}
              {categoryData?.CategoryItems?.length - 1 === index && (
                <View
                  style={{
                    borderWidth: 0.5,
                    marginTop: 10,
                    borderColor: Colors.GRAY,
                  }}
                ></View>
              )}
            </View>
          ))
        ) : (
          <View style={styles.ItemNotFoundView}>
            <Text style={styles.ItemNotFoundText}>No Items Found !</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default CourseItemsList;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  heading: {
    fontFamily: "Outfit-Bold",
    fontSize: 20,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 15,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontSize: 20,
    fontFamily: "Outfit-Bold",
  },
  url: {
    fontFamily: "Outfit",
    color: Colors.LIGHT_GRAY,
  },
  cost: {
    fontSize: 20,
    fontFamily: "Outfit-Bold",
  },
  ItemNotFoundView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  ItemNotFoundText: {
    textAlign: "center",
    fontSize: 20,
    fontFamily: "Outfit-Medium",
    width: "50%",
    backgroundColor: Colors.WHITE,
    borderRadius: 10,
    padding: 5,
    color: Colors.LIGHT_GRAY,
  },
});
