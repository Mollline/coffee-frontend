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
  return (
    <View style={styles.box}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.push("order/ingredients")}>
          <Svg width="11" height="18" viewBox="0 0 11 18" fill="none">
            <Path
              d="M3.88905 8.75047L10.695 15.5563L8.7505 17.5008L0 8.75047L8.7505 0L10.695 1.94454L3.88905 8.75047Z"
              fill="#CE9760"
            />
          </Svg>
        </TouchableOpacity>
        <Text style={styles.headerText}>My Orders</Text>
        <Svg width="17" height="23" viewBox="0 0 17 23" fill="none">
          <Path
            d="M14.5 8.75C14.5 5.43629 11.8137 2.75 8.5 2.75C5.18629 2.75 2.5 5.43629 2.5 8.75V16.75H14.5V8.75ZM16.5 17.4167L16.9 17.95C17.0657 18.1709 17.0209 18.4843 16.8 18.65C16.7135 18.7149 16.6082 18.75 16.5 18.75H0.5C0.22386 18.75 0 18.5261 0 18.25C0 18.1418 0.0350899 18.0365 0.0999999 17.95L0.5 17.4167V8.75C0.5 4.33172 4.08172 0.75 8.5 0.75C12.9183 0.75 16.5 4.33172 16.5 8.75V17.4167ZM6 19.75H11C11 21.1307 9.8807 22.25 8.5 22.25C7.1193 22.25 6 21.1307 6 19.75Z"
            fill="#F5F5F5"
          />
        </Svg>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    height: "100%",
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
    fontWeight: 700,
    color: "white",
  },
});
