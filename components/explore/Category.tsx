import React from "react";
import { Button } from "../ui/button";
import { Text } from "react-native";

const Category: React.FC = ({ item, selectedCategory, onPress }) => {
  return (
    <Button
      onPress={() => onPress()}
      id="category"
      size="lg"
      className={`w-32 rounded-xl me-0.5 ${
        selectedCategory === item.id ? "bg-slate-300 border border-slate-800" : "bg-black"
      }`}
    >
      <Text className={`text-center ${selectedCategory === item.id ? "text-black": "text-white"}`}>{item.name}</Text>
    </Button>
  );
};
export default Category;
