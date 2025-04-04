import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import MessageCard from "@/components/messages/MessageCard";

const index: React.FC = () => {
  const router = useRouter();
  
  return (
    <SafeAreaView className="flex-1">
      <View id="root" className="flex-1 p-6">
        <ChevronLeft size={30} color={"black"} onPress={() => router.back()} />
        <View id="header" className="mt-8">
          <Text className="text-3xl font-bold">Chat</Text>
        </View>
        <ScrollView id="content" className="mt-8" showsVerticalScrollIndicator={false} >
          <MessageCard name="1Sami Abi" message="Hi! What's up?" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default index;
