import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { SafeAreaView, Text } from "react-native";

const index: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <ChevronLeft color={"black"} onPress={() => router.back()} />
      <Text>Messages page</Text>
    </SafeAreaView>
  );
};
export default index;
