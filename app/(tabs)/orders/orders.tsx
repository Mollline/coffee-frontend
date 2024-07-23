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
    <View>
      <View style={styles.box}>
        <View style={styles.header}>
          <Svg width="11" height="18" viewBox="0 0 11 18" fill="none">
            <Path
              d="M3.88905 8.75047L10.695 15.5563L8.7505 17.5008L0 8.75047L8.7505 0L10.695 1.94454L3.88905 8.75047Z"
              fill="#CE9760"
            />
          </Svg>
          <Text style={styles.headerText}>My Orders</Text>
          <View></View>
        </View>
      </View>
      <View>
        <View style={{ padding: 20 }}>
          <View style={styles.image}></View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View>
              <Text>erfdc</Text>
              <Text></Text>
              <Text></Text>
            </View>
            <Text>erfsd</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    backgroundColor: "#543A20",
    padding: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
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
  image: {
    width: 104,
    height: 103,
    backgroundColor: "#CE9760",
  },
});
