import React from "react";
import { Card } from "../ui/card";
import { Text, View } from "react-native";
import { ChevronRight, User } from "lucide-react-native";
const SettingsCard: React.FC = () => {
  return (
    <Card
      id="options-card"
      className="bg-gray-100 flex flex-row items-center justify-between rounded-none"
    >
      <View className="flex flex-row items-center  gap-x-2">
        <View className="bg-gray-200 p-1.5 rounded-full">
          <User color={"#4b5563"} />
        </View>
        <Text className="font-medium">Edit Profile</Text>
      </View>
      <ChevronRight color={"#4b5563"} />
    </Card>
  );
};
export default SettingsCard;
