import React from "react";
import { Text, View } from "react-native";

interface ISkillCard{
    title:string;
}

const SkillCard: React.FC<ISkillCard> = ({title}) => {
  return (
    <View
      id="skill"
      className="rounded-3xl bg-gray-200 border-blue-700 px-2 py-1.5"
    >
      <Text className="text-gray-700 text-sm font-medium">{title}</Text>
    </View>
  );
};
export default SkillCard;
