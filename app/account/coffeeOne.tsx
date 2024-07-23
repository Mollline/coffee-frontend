import { useRouter } from "expo-router";
import React from "react";
import Stepper from "../../assets/components/stepper";
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
        source={require("../../assets/images/coffe.png")}
      >
        <View style={styles.overlay} />
        {/* <Stepper /> */}
        <TouchableOpacity onPress={() => router.push("account/coffeeTwo")}>
          <Text
            style={{
              color: "white",
              top: 40,
              fontSize: 14,
              textAlign: "right",
              height: 50,
              right: 30,
            }}
          >
            Next
          </Text>
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.title}>Embrace coffee essence</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet consectetur. Vestibulum eget blandit
          mattis.
        </Text>
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
});
