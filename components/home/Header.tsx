import React from "react";
import { Text, View } from "react-native";
import { Mail } from "lucide-react-native";
import { useRouter } from "expo-router";

const Header: React.FC = () => {
  const router = useRouter();
  return (
    <View
      id="header"
      className="flex flex-row items-center justify-between p-6"
    >
      <Text className="text-3xl font-bold">GetWith</Text>
      <Mail
      onPress={()=> router.navigate("/messages")}
        size={30}
        color={"black"}
      />
    </View>
  );
};
export default Header;
