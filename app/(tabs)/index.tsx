import { useRouter } from "expo-router";
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => router.push("account/start")}>
        <Text>Hello world</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
