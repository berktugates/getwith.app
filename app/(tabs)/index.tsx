import { SafeAreaView, View } from "react-native";
import { StatusBar } from "expo-status-bar";
import CardSwiper from "@/components/home/CardSwiper";
import Header from "@/components/home/Header";

export default function HomeScreen() {
  return (
    <SafeAreaView className="h-screen">
      <StatusBar style="dark" />
      <Header />
      <View id="content">
        <CardSwiper />
      </View>
    </SafeAreaView>
  );
}
