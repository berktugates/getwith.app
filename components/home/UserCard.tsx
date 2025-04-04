import React, { useState } from "react";
import { Card } from "../ui/card";
import { Pressable, Text, View } from "react-native";
import { Image } from "../ui/image";
import { MapPin, Rocket, X } from "lucide-react-native";
import SkillCard from "./SkillCard";
import UserDetailCard from "./modal/UserDetailCard";

const UserCard: React.FC = ({ card, handleConfirm, handleCancel }) => {
  const [isUserDetailCardActive, setIsUserDetailCardActive] =
    useState<boolean>(false);

  return (
    <>
      <Pressable
        className="px-4"
        onLongPress={() => setIsUserDetailCardActive(true)}
      >
        <Card key={card} className="min-h-[600] rounded-3xl shadow-md">
          <View id="user-info" className="flex flex-row gap-x-2 px-4 py-3">
            <Image
              className="rounded-full"
              size="lg"
              source={{
                uri: "https://t4.ftcdn.net/jpg/06/48/39/19/360_F_648391979_uMz6EwAlKNIJnK9r46UpTiM17nT8GuLl.jpg",
              }}
              alt="user-photo"
            />
            <View>
              <Text className="text-3xl font-semibold">{card.name}</Text>
              <Text className="text-lg">{card.title}</Text>
              <View
                id="user-location"
                className="flex flex-row items-center gap-x-1"
              >
                <MapPin color={"black"} size={15} />
                <Text>{card.location}</Text>
              </View>
            </View>
          </View>
          <View id="user-about" className="px-4 py-3">
            <Text className="text-lg leading-snug">
              {card.description.slice(0, 80)}...
            </Text>
          </View>
          <View id="user-skills" className="px-4 py-3">
            <Text className="mb-1 text-lg font-medium">Skills</Text>
            <View className="flex flex-row flex-wrap gap-1">
              {card.skills.map((skill) => {
                return <SkillCard title={skill.title} />;
              })}
            </View>
          </View>
          <View id="user-languages" className="px-4 py-3">
            <Text className="mb-1 font-medium text-lg">Languages</Text>
            <View id="icons" className="flex flex-row flex-wrap gap-x-1">
              {card.languages.map((language) => {
                return <Text className="text-4xl">{language.icon}</Text>;
              })}
            </View>
          </View>
          <View
            id="options"
            className="flex flex-row justify-center gap-x-12 absolute bottom-10 inset-x-0 mx-auto"
          >
            <Pressable
              onPress={() => handleCancel()}
              className="bg-red-200 rounded-full p-3.5 flex items-center justify-center"
            >
              <X color={"#b91c1c"} size={35} />
            </Pressable>
            <Pressable
              onPress={() => handleConfirm()}
              className="bg-gray-800 rounded-full p-3.5 flex items-center justify-center"
            >
              <Rocket color={"white"} size={35} />
            </Pressable>
          </View>
        </Card>
      </Pressable>
      {isUserDetailCardActive && (
        <UserDetailCard
          isUserDetailCardActive={isUserDetailCardActive}
          setIsUserDetailCardActive={setIsUserDetailCardActive}
          card={card}
        />
      )}
    </>
  );
};
export default UserCard;
