import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.back_image}
        source={require("../../assets/images/cof.png")}
      >
        <View style={styles.overlay} />
        {/* <Stepper /> */}
        <TouchableOpacity
          onPress={() => router.push("account/coffeeTwo")}
        ></TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.title}>Unlock bean secrets</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Vestibulum eget blandit
          mattis.
        </Text>
      </View>
      <View style={styles.register}>
        <TouchableOpacity onPress={() => router.push("account/register")}>
          <Text style={styles.regist}>Register </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => router.push("account/signin")}>
          <Text style={styles.signIn}>Sign in</Text>
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
    top: 236,
    alignItems: "center",
    width: 328,
  },

  title: {
    fontFamily: "Poppins",
    fontSize: 36,
    fontWeight: "700",
    textAlign: "center",
    color: "white",
    marginBottom: 10,
    lineHeight: 34,
  },
  description: {
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "center",
    color: "#CE9760",
  },
  register: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  regist: {
    color: "#543A20",
    fontSize: 20,
    fontWeight: "bold",
    width: 350,
    height: 53,
    backgroundColor: "#CE9760",
    textAlign: "center",
    lineHeight: 53,
    borderRadius: 10,
  },
  signIn: {
    color: "#CE9760",
    fontSize: 20,
    fontWeight: "bold",
    width: 350,
    height: 53,
    backgroundColor: "transparent",
    // border: 2px solid #CE9760
    textAlign: "center",
    lineHeight: 53,
    borderRadius: 10,
    top: 10,
    borderWidth: 3,
    borderColor: "#CE9760",
  },
});
