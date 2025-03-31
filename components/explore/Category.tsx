import React from "react";
import { Button } from "../ui/button";
import { Text } from "react-native";



const Category: React.FC = ({item}) => {
  return (
    <Button id="category" size="lg" className="w-32 bg-black rounded-xl me-0.5">
      <Text className="text-white">{item.name}</Text>
    </Button>
  );
};
export default Category;
