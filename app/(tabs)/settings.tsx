import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "@/components/settings/Header";
import SettingsCard from "@/components/settings/SettingsCard";

const settings: React.FC = () => {
  return (
    <>
      <StatusBar style="dark" backgroundColor="black" />
      <ScrollView
        id="options"
        bounces={false}
        showsVerticalScrollIndicator={false}
        className="flex-1 p-6"
      >
        <SafeAreaView className="flex-1">
          <Header />
          <SettingsCard />
        </SafeAreaView>
      </ScrollView>
    </>
  );
};
export default settings;
