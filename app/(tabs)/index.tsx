import { SafeAreaView, View } from "react-native";
import CardSwiper from "@/components/home/CardSwiper";
import Header from "@/components/home/Header";

export default function HomeScreen() {
  return (
    <SafeAreaView className="h-screen">
      <Header />
      <View id="content">
        <CardSwiper />
      </View>
    </SafeAreaView>
  );
}
