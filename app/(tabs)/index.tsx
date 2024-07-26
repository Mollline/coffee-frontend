import { useRouter } from "expo-router";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SingleProduct } from "../components/singleProduct";
import Svg, { Path } from "react-native-svg";
import { Category, useGetAllCategoriesQuery } from "@/generated";
import { useAppContext } from "@/context/DataContext";
export default function HomeScreen() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(
    null
  );
  const [isMounted, setIsMounted] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const { users } = useAppContext();
  const { data, loading, error } = useGetAllCategoriesQuery();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {
    if (!isMounted) return;

    const isUserLoggedIn = () => {
      const user = localStorage.getItem("email");
      const name = localStorage.getItem("fullname");
      console.log(name);
      if (!user) {
        router.push("/account/start");
      } else {
        console.log("great");
      }
    };

    isUserLoggedIn();
  }, [isMounted, router]);

  useEffect(() => {
    if (data?.getAllCategories) {
      setCategories(data.getAllCategories);
    }
  }, [data]);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <View style={styles.container}>
      <View style={styles.account}>
        <View style={styles.acc}>
          <View style={styles.profile}></View>
          <View>
            <Text style={styles.name}>{users[0].fullName}</Text>
            <Text style={styles.morning}>Good morning</Text>
          </View>
        </View>
        <View style={styles.searchSVG}>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z"
              fill="#F5F5F5"
            />
          </Svg>
          <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <Path
              d="M18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10V18H18V10ZM20 18.6667L20.4 19.2C20.5657 19.4209 20.5209 19.7343 20.3 19.9C20.2135 19.9649 20.1082 20 20 20H4C3.72386 20 3.5 19.7761 3.5 19.5C3.5 19.3918 3.53509 19.2865 3.6 19.2L4 18.6667V10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10V18.6667ZM9.5 21H14.5C14.5 22.3807 13.3807 23.5 12 23.5C10.6193 23.5 9.5 22.3807 9.5 21Z"
              fill="#F5F5F5"
            />
          </Svg>
        </View>
      </View>
      <View style={styles.discount}>
        <View style={styles.dis}>
          <Text style={styles.discountText}>
            Get 20% Discount On your First Order!
          </Text>
          <Text style={styles.discountSubText}>
            Lorem ipsum dolor sit amet consectetur. Vestibulum eget blandit
            mattis
          </Text>
        </View>
        <View style={styles.disImg}></View>
      </View>
      <View style={styles.scrollView}>
        <ScrollView horizontal>
          {categories.map((category) => (
            <TouchableOpacity
              key={category.id}
              onPress={() => setSelectedCategory(category)}
            >
              <Text
                style={[
                  styles.categoryText,
                  selectedCategory?.id === category.id &&
                    styles.selectedCategoryText,
                ]}
              >
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <SingleProduct />
        <SingleProduct />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#543A20",
    padding: 20,
  },
  account: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    height: 24,
  },
  profile: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
  },
  name: {
    fontWeight: "600",
    fontSize: 22,
    lineHeight: 33,
    color: "white",
  },
  morning: {
    fontWeight: "300",
    fontSize: 18,
    lineHeight: 27,
    color: "#E3E3E3",
  },
  acc: {
    flexDirection: "row",
    gap: 20,
  },
  searchSVG: {
    flexDirection: "row",
    gap: 15,
    marginTop: 26,
  },
  discount: {
    width: "100%",
    height: 146,
    borderRadius: 10,
    backgroundColor: "#CE97607D",
    top: 63,
    paddingVertical: 23,
    paddingHorizontal: 13,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  dis: {
    gap: 9,
    width: 184,
  },
  discountText: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: "600",
    color: "white",
  },
  discountSubText: {
    fontSize: 9,
    lineHeight: 11,
    fontWeight: "400",
    color: "white",
  },
  disImg: {
    width: 109,
    height: 99,
    backgroundColor: "white",
  },
  scrollView: {
    top: 79,
  },
  categoryText: {
    fontSize: 16,
    color: "white",
    marginHorizontal: 10,
    marginBottom: 20,
  },
  selectedCategoryText: {
    color: "#CE9760",
  },
});
