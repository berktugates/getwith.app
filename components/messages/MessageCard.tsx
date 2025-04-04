import React from "react";
import { Text, View } from "react-native";
import { Image } from "../ui/image";

interface IMessageCard {
    name:string;
    message:string;
}

const MessageCard: React.FC<IMessageCard> = ({name,message}) => {
  return (
    <View
      id="message-box"
      className="flex flex-row items-center justify-between gap-x-4 border-b border-gray-400 p-3 my-2"
    >
      <View className="flex flex-row items-center gap-x-2">
        <Image
          className="rounded-full"
          size="sm"
          source={{
            uri: "https://t4.ftcdn.net/jpg/06/48/39/19/360_F_648391979_uMz6EwAlKNIJnK9r46UpTiM17nT8GuLl.jpg",
          }}
          alt="user-photo"
        />
        <View>
          <Text className="text-2xl font-semibold">{name}</Text>
          <Text className="font-medium text-gray-500">{message}</Text>
        </View>
      </View>
      <Text className="text-gray-500">08.00</Text>
    </View>
  );
};
export default MessageCard;
