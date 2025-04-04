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
    <View id="header" className="px-6 py-8 border-b border-black rounded-b-3xl">
      <View
        id="location-notification"
        className="flex flex-row items-center justify-between"
      >
        <View id="location" className="flex gap-y-1">
          <Text className="text-lg text-gray-500">Location</Text>
          <View className="flex flex-row gap-x-1 items-center">
            <MapPin color={"black"} size={17} />
            <Text className="text-gray-700 text-2xl">New York, USA</Text>
          </View>
        </View>
        <View id="header-icons" className="flex flex-row gap-x-4">
          <Bell color={"black"} />
          <Sparkles color={"black"} />
        </View>
      </View>
      <View id="filter" className="flex flex-row gap-x-4 mt-4 items-center">
        <Input className="bg-white w-[90%] rounded-lg h-12">
          <InputSlot className="pl-3">
            <InputIcon as={Search} />
          </InputSlot>
          <InputField placeholder="Search" />
        </Input>
        <SlidersHorizontal color={"black"} />
      </View>
    </View>
  );
};
export default Header;
