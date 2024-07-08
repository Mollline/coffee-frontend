import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
import Svg, { Path, ClipPath, Defs } from "react-native-svg";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.back_image}
        source={require("../../assets/images/coffee.jpeg")}
      >
        <View style={styles.overlay} />
      </ImageBackground>
      <View style={styles.content}>
        <TouchableOpacity onPress={() => router.push("account/coffeeOne")}>
          <Text style={styles.getStart}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  back_image: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.2)",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  getStart: {
    color: "#543A20",
    fontSize: 20,
    fontWeight: "bold",
    width: 242,
    height: 53,
    borderRadius: 20,
    backgroundColor: "#CE9760",
    textAlign: "center",
    lineHeight: 53,
  },
});
