import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import Svg, { Path } from "react-native-svg";

export default function HomeScreen() {
  const router = useRouter();
  const product = [
    "product",
    "product",
    "product",
    "product",
    "product",
    "product",
    "product",
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Svg width="11" height="18" viewBox="0 0 11 18" fill="none">
          <Path
            d="M3.88905 8.75047L10.695 15.5563L8.7505 17.5008L0 8.75047L8.7505 0L10.695 1.94454L3.88905 8.75047Z"
            fill="#CE9760"
          />
        </Svg>
        <Text style={styles.headerText}>Favorite</Text>
        <Svg width="17" height="23" viewBox="0 0 17 23" fill="none">
          <Path
            d="M14.5 8.75C14.5 5.43629 11.8137 2.75 8.5 2.75C5.18629 2.75 2.5 5.43629 2.5 8.75V16.75H14.5V8.75ZM16.5 17.4167L16.9 17.95C17.0657 18.1709 17.0209 18.4843 16.8 18.65C16.7135 18.7149 16.6082 18.75 16.5 18.75H0.5C0.22386 18.75 0 18.5261 0 18.25C0 18.1418 0.0350899 18.0365 0.0999999 17.95L0.5 17.4167V8.75C0.5 4.33172 4.08172 0.75 8.5 0.75C12.9183 0.75 16.5 4.33172 16.5 8.75V17.4167ZM6 19.75H11C11 21.1307 9.8807 22.25 8.5 22.25C7.1193 22.25 6 21.1307 6 19.75Z"
            fill="#F5F5F5"
          />
        </Svg>
      </View>
      <View style={styles.searchContainer}>
        <TextInput style={styles.input} placeholder="Search" />
        <View style={styles.searchButton}>
          <Svg width="21" height="21" viewBox="0 0 21 21" fill="none">
            <Path
              d="M16.031 14.6168L20.3137 18.8995L18.8995 20.3137L14.6168 16.031C13.0769 17.263 11.124 18 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18 11.124 17.263 13.0769 16.031 14.6168ZM14.0247 13.8748C15.2475 12.6146 16 10.8956 16 9C16 5.1325 12.8675 2 9 2C5.1325 2 2 5.1325 2 9C2 12.8675 5.1325 16 9 16C10.8956 16 12.6146 15.2475 13.8748 14.0247L14.0247 13.8748Z"
              fill="#543A20"
            />
          </Svg>
        </View>
      </View>
      <ScrollView horizontal style={styles.scrollView}>
        {product.map((e, index) => (
          <View key={index} style={styles.product}>
            <View style={styles.productImage}></View>
            <View style={styles.productInfo}>
              <View style={styles.productTextContainer}>
                <Text style={styles.discountText}>Arabica</Text>
                <Text style={styles.productDescription}>
                  Lorem ipsum dolor sit amet cons
                </Text>
              </View>
              <Text style={styles.productPrice}>$15</Text>
              <View style={styles.heartIcon}>
                <Svg width="17" height="16" viewBox="0 0 17 16" fill="none">
                  <Path
                    d="M8.33417 1.27378C10.2917 -0.483333 13.3167 -0.424999 15.2022 1.46447C17.0877 3.35393 17.1525 6.36417 15.3988 8.3275L8.33325 15.4042L1.26782 8.3275C-0.485793 6.36417 -0.420243 3.34918 1.46447 1.46447C3.35131 -0.422374 6.37099 -0.485941 8.33417 1.27378Z"
                    fill="#F90F0F"
                  />
                </Svg>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#543A20",
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginVertical: 30,
  },
  headerText: {
    fontSize: 22,
    fontWeight: "700",
    color: "white",
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  input: {
    flex: 1,
    height: 40,
    backgroundColor: "white",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    paddingHorizontal: 10,
    borderColor: "#CE9760",
    borderWidth: 1,
  },
  searchButton: {
    width: 59,
    height: 40,
    backgroundColor: "#CE9760",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderColor: "#CE9760",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  scrollView: {
    marginTop: 20,
  },
  product: {
    width: 166,
    height: 179,
    backgroundColor: "#CE9760",
    borderRadius: 7,
    alignItems: "center",
    padding: 7,
    marginRight: 20,
  },
  productImage: {
    width: 95,
    height: 81,
    backgroundColor: "white",
  },
  productInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  productTextContainer: {
    width: 101,
    gap: 10,
  },
  discountText: {
    fontSize: 18,
    lineHeight: 27,
    fontWeight: "600",
    color: "white",
  },
  productDescription: {
    fontSize: 9,
    color: "#39260B",
  },
  productPrice: {
    fontSize: 16,
    color: "#39260B",
    fontWeight: "bold",
    marginRight: -40,
  },
  heartIcon: {
    marginTop: -80,
  },
});
