import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

interface Props {
  categoryList: any[];
}

const CategoryList: React.FC<Props> = ({ categoryList }) => {
  const router = useRouter();
  const onCategoryClick = (item: any) => {
    router.push({
      pathname: "/category-detail",
      params: {
        categoryId: item.id,
      },
    });
  };

  return (
    <View
      style={{
        marginTop: 20,
      }}
    >
      <Text
        style={{
          fontFamily: "Outfit-Bold",
          fontSize: 25,
          marginBottom: 10,
        }}
      >
        Budget List
      </Text>
      <View>
        {categoryList.map((item: any, index: number) => (
          <TouchableOpacity
            key={index}
            style={styles.container}
            onPress={() => onCategoryClick(item)}
          >
            <View style={styles.iconContainer}>
              <Text
                style={[
                  styles.iconText,
                  {
                    backgroundColor: item.color ?? Colors.SPLITWISE_GREEN,
                  },
                ]}
              >
                {item.icon ?? "--"}
              </Text>
            </View>
            <View style={styles.subContainer}>
              <View>
                <Text style={styles.categoryText}>{item.name}</Text>
                <Text style={styles.itemCount}>
                  {item.CategoryItems?.length}
                </Text>
              </View>
              <Text style={styles.totalAmountText}>
                ${item.assigned_budget}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    display: "flex",
    flexDirection: "row",
    gap: 7,
    alignItems: "center",
    backgroundColor: Colors.WHITE,
    padding: 10,
    borderRadius: 15,
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "baseline",
    width: "22%",
  },
  iconText: {
    fontSize: 35,
    padding: 16,
    borderRadius: 15,
    width: "100%",
    textAlign: "center",
  },
  categoryText: {
    fontFamily: "Outfit-Bold",
    fontSize: 17,
  },
  itemCount: {
    fontFamily: "Outfit-Regular",
  },
  subContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "75%",
  },
  totalAmountText: {
    fontFamily: "Outfit-Bold",
    fontSize: 17,
  },
});
