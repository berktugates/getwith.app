import React from "react";
import { Text, View } from "react-native";
import { Image } from "../ui/image";

const Header:React.FC = ()=>{
    return (
        <View id="header"className="mb-4">
          <View id="header-title" className="flex items-center">
            <Text className="text-black text-2xl font-semibold tracking-wider">
              Settings
            </Text>
          </View>
          <View id="header-user-info" className="flex items-center mt-8">
            <Image
              className="rounded-full mb-4"
              size="lg"
              source={{
                uri: "https://t4.ftcdn.net/jpg/06/48/39/19/360_F_648391979_uMz6EwAlKNIJnK9r46UpTiM17nT8GuLl.jpg",
              }}
              alt="user-photo"
            />
            <Text className="text-black text-3xl font-normal tracking-tighter mb-1">
              Rafa Silva
            </Text>
            <Text className="text-gray-500  font-normal tracking-tighter">
              contact@rafasilva.com
            </Text>
          </View>
        </View>
    )
}
export default Header;