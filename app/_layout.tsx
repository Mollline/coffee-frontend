import React, { useEffect } from "react";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { Text, View } from "react-native";
import ApolloProviders from "../provider/apollo-provider";
import { useColorScheme } from "@/hooks/useColorScheme";
import { AppWrapper } from "../context/DataContext"; // Import your context provider

SplashScreen.preventAutoHideAsync();

export default function RootLayout({ children }: any) {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return (
      <View>
        <Text>Loading</Text>
      </View>
    );
  }

  return (
    <ApolloProviders>
      <AppWrapper>
        <ThemeProvider
          value={colorScheme === "dark" ? DarkTheme : DefaultTheme}
        >
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen
              name="account/start"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="account/signin"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="account/register"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="account/coffeeTwo"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="account/coffeeOne"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="account/coffeeThree"
              options={{ headerShown: false }}
            />
            <Stack.Screen name="+not-found" />
            <Stack.Screen
              name="order/ingredients"
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="order/finalizeOrder"
              options={{ headerShown: false }}
            />
          </Stack>
          {children}
        </ThemeProvider>
      </AppWrapper>
    </ApolloProviders>
  );
}
