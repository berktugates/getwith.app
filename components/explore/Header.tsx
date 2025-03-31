import React from "react";
import { Text, View } from "react-native";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import {
  Bell,
  MapPin,
  Search,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react-native";

const Header: React.FC = () => {
  return (
    <View id="header" className="p-6 bg-black rounded-b-xl">
      <View
        id="location-notification"
        className="flex flex-row items-center justify-between"
      >
        <View id="location" className="flex gap-y-1">
          <Text className="text-lg text-gray-400">Location</Text>
          <View className="flex flex-row gap-x-1 items-center">
            <MapPin color={"white"} size={17} />
            <Text className="text-gray-200 text-2xl">New York, USA</Text>
          </View>
        </View>
        <View id="header-icons" className="flex flex-row gap-x-4">
          <Bell color={"white"} />
          <Sparkles color={"white"} />
        </View>
      </View>
      <View id="filter" className="flex flex-row gap-x-4 mt-4 items-center">
        <Input className="bg-white w-[90%] rounded-lg h-12">
          <InputSlot className="pl-3">
            <InputIcon as={Search} />
          </InputSlot>
          <InputField placeholder="Search" />
        </Input>
        <SlidersHorizontal color={"white"} />
      </View>
    </View>
  );
};
export default Header;
