import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { getDataString, removeItem } from "@/helpers/async-storage";
import { useRouter } from "expo-router";
import { client } from "@/utils/kindeConfig";
import { supabase } from "@/utils/supabaseConfig";
import Header from "@/components/Header";
import { Colors } from "@/constants/Colors";
import CircularChart from "@/components/CircularChart";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Link } from "expo-router";
import CategoryList from "@/components/CategoryList";

export const Home = () => {
  const router = useRouter();
  const [categoryList, setcategoryList] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const checkUserAuth = async () => {
    const result = await getDataString("login");

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
    setLoading(true);
    const user = await client.getUserDetails();
    let { data: category, error } = await supabase
      .from("category")
      .select("*, CategoryItems(*)")
      .eq("created_by", user.email);

    if (error) {
      console.error(error);
      return;
    }

    if (category) {
      console.log("DATA ---> ", category);
      setcategoryList(category);
      setLoading(false);
    }
  };

  useEffect(() => {
    checkUserAuth();
    getCategoryList();

    // listen to realtime changes in db
    const channels = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "category" },
        (payload) => {
          console.log("PPP", payload);
          if (payload.eventType === "INSERT") {
            setcategoryList((prev: any) => [...prev, payload.new]);
          }
        }
      )
      .subscribe();

    // remove channel subscription after component unmounts
    return () => {
      supabase.removeChannel(channels);
    };
  }, []);

  return (
    <View
      style={{
        flex: 1,
        position: "relative",
      }}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            onRefresh={() => getCategoryList()}
            refreshing={loading}
          />
        }
      >
        <View
          style={{
            padding: 20,
            backgroundColor: Colors.SPLITWISE_GREEN,
            height: 150,
          }}
        >
          <Header />
        </View>

        <View style={{ padding: 20, marginTop: -75 }}>
          <CircularChart />
          <CategoryList categoryList={categoryList} />
        </View>
      </ScrollView>

      <Link href={"/add-new-category"} style={styles.addBtnContainer}>
        <AntDesign name="pluscircle" size={54} color={Colors.SPLITWISE_GREEN} />
      </Link>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  addBtnContainer: {
    position: "absolute",
    bottom: 16,
    right: 16,
  },
});
