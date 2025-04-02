import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "@/components/settings/Header";
import SettingsCard from "@/components/settings/SettingsCard";

const settings: React.FC = () => {
  return (
    <>
      <StatusBar style="light" backgroundColor="black" />
      <SafeAreaView className="bg-black">
        <View id="root" className="bg-black h-screen">
          <Header />
          <ScrollView
            id="options"
            className="bg-white flex-1 px-6 py-8 rounded-t-3xl"
          >
            <View id="area-1" className="bg-gray-100 p-2 rounded-3xl">
              <SettingsCard />
            </View>
            <View id="area-2" className="bg-gray-100 mt-4 p-2 rounded-3xl">
              <SettingsCard />
              <SettingsCard />
              <SettingsCard />
            </View>
            <View id="area-3" className="bg-gray-100 mt-4 p-2 rounded-3xl">
              <SettingsCard />
              <SettingsCard />
              <SettingsCard />
            </View>
            <View id="area-3" className="bg-gray-100 mt-4 p-2 rounded-3xl">
              <SettingsCard />
              <SettingsCard />
              <SettingsCard />
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};
export default settings;
