import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import * as AppleAuthentication from 'expo-apple-authentication';
import { EyeClosed } from "lucide-react-native";

const SignIn: React.FC = () => {
  return (
    <SafeAreaView>
      <View id="root" className="p-4 h-full flex justify-center">
        <View id="header" className="items-center my-4">
          <Text className="text-5xl font-semibold tracking-wider">GetWith</Text>
        </View>
        <View id="form" className="flex gap-y-6 p-6">
          <Input
            className="rounded-xl"
            variant="outline"
            size="lg"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField placeholder="Email" type="text" />
          </Input>
          <Input
            className="rounded-xl"
            variant="outline"
            size="lg"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField placeholder="Password" type="password" />
            <InputSlot className="p-1">
              <InputIcon as={EyeClosed} />
            </InputSlot>
          </Input>
          <Button size="lg" variant="solid" action="primary">
            <ButtonText>Login</ButtonText>
          </Button>
        </View>
        <View id="or-divider" className="flex flex-row items-center">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">OR</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>
        <View id="other-options">
        <AppleAuthentication.AppleAuthenticationButton
        buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
        buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
        cornerRadius={5}
        onPress={async()=>{
            try{
                console.log("ece");
            }catch(err){
                console.log(err);
            }
        }}
        />
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignIn;
