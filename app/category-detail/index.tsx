import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { supabase } from "@/utils/supabaseConfig";
import Ionicons from "@expo/vector-icons/Ionicons";
import CourseDetails from "@/components/CourseDetails";

const CategoryDetail = () => {
  const { categoryId } = useLocalSearchParams();
  const [categoryData, setCategoryData] = useState<any>(null);
  const router = useRouter();

  const getCategoryDetail = async () => {
    const { data, error } = await supabase
      .from("category")
      .select("*, CategoryItems(*)")
      .eq("id", categoryId);

    if (error) {
      console.error(error);
    }

    if (data) {
      console.log("CATT", data);
      setCategoryData(data[0]);
    }
  };

  useEffect(() => {
    if (categoryId) {
      getCategoryDetail();
    }
  }, [categoryId]);

  return (
    <View style={{ padding: 20, marginTop: 20 }}>
      <Ionicons
        name="arrow-back"
        size={24}
        color="black"
        onPress={() => router.back()}
      />
      <CourseDetails categoryData={categoryData} />
    </View>
  );
};

export default CategoryDetail;

const styles = StyleSheet.create({
  textIcon: {
    fontSize: 20,
  },
});