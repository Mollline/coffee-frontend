import { useAppContext } from "@/context/DataContext";
import React from "react";
import { View, Text } from "react-native";

export default function TabTwoScreen() {
  const { state, setState } = useAppContext();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>{state}</Text>
    </View>
  );
}
