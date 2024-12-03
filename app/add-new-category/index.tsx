import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import ColorPicker from "@/components/ColorPicker";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { supabase } from "@/utils/supabaseConfig";
import { client } from "@/utils/kindeConfig";
import { ToastAndroid } from "react-native";
import { useRouter } from "expo-router";

const AddNewCategory = () => {
  const [selectedIcon, setSelectedIcon] = useState("IC");
  const [selectedColor, setSelectedColor] = useState(Colors.SPLITWISE_GREEN);
  const [categoryName, setCategoryName] = useState("");
  const [totalBudget, setTotalBudget] = useState("");
  const router = useRouter();

  const onCreatecategory = async () => {
    const user = await client.getUserDetails();

    const { data, error } = await supabase
      .from("category")
      .insert([
        {
          name: categoryName,
          assigned_budget: totalBudget,
          icon: selectedIcon,
          color: selectedColor,
          created_by: user.email,
        },
      ])
      .select();

    if (error) {
      console.error("Error while inserting data", error);
      ToastAndroid.show("Category Creation failed!", ToastAndroid.TOP);
    }

    if (data) {
      console.log("Inserted data", data);
      ToastAndroid.show("Category Created!", ToastAndroid.TOP);
      router.replace({
        pathname: "/category-detail",
        params: {
          categoryId: data[0].id,
        },
      });
    }
  };

  return (
    <View
      style={{
        padding: 20,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextInput
          style={[
            styles.iconInput,
            {
              backgroundColor: selectedColor,
            },
          ]}
          maxLength={2}
          onChangeText={(value: any) => setSelectedIcon(value)}
        >
          {selectedIcon}
        </TextInput>
        <ColorPicker
          selectedColor={selectedColor}
          setSelectedColor={setSelectedColor}
        />
      </View>

      {/* Add category name and Total Budget Section */}
      <View style={styles.inputView}>
        <MaterialIcons name="local-offer" size={24} color={Colors.GRAY} />
        <TextInput
          placeholder="Category Name"
          style={{ width: "100%", fontSize: 17 }}
          onChangeText={(value: any) => setCategoryName(value)}
          value={categoryName}
        />
      </View>

      <View style={styles.inputView}>
        <FontAwesome6 name="dollar-sign" size={24} color={Colors.GRAY} />
        <TextInput
          placeholder="Total Budget"
          style={{ width: "100%", fontSize: 17 }}
          keyboardType="numeric"
          onChangeText={(value: any) => setTotalBudget(value)}
          value={totalBudget}
        />
      </View>
      <TouchableOpacity
        style={[
          styles.button,
          !categoryName || !totalBudget
            ? { backgroundColor: Colors.GRAY }
            : { backgroundColor: Colors.DARK_GRAY },
        ]}
        disabled={!categoryName || !totalBudget}
        onPress={onCreatecategory}
      >
        <Text
          style={{
            textAlign: "center",
            fontSize: 16,
            color: Colors.WHITE,
            fontFamily: "Outfit-Regular",
          }}
        >
          Create
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddNewCategory;

const styles = StyleSheet.create({
  iconInput: {
    textAlign: "center",
    fontSize: 30,
    padding: 20,
    borderRadius: 99,
    paddingHorizontal: 28,
    color: Colors.WHITE,
  },
  inputView: {
    borderWidth: 1,
    display: "flex",
    flexDirection: "row",
    gap: 2,
    padding: 14,
    borderRadius: 10,
    borderColor: Colors.GRAY,
    alignItems: "center",
    marginTop: 20,
  },
  button: {
    fontSize: 30,
    padding: 15,
    borderRadius: 99,
    marginTop: 30,
  },
});
