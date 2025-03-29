import React from "react";
import { Stack } from "expo-router";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <GluestackUIProvider mode="light">
      <Stack screenOptions={{
        headerShown: false 
      }}>
        <Stack.Screen
          name="index"
          options={{ headerShown: false }}
        />
        <Stack.Screen name="auth/SignIn/SignIn.tsx"/>
        <Stack.Screen name="(tabs)"/>
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
    </GluestackUIProvider>
  );
}
