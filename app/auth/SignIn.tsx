import React from "react";
import { SafeAreaView, Text, View, Image, Alert } from "react-native";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Eye } from "lucide-react-native";
import { useRouter } from "expo-router";
import { BlurView } from "expo-blur";
import { AppleButton } from "@invertase/react-native-apple-authentication";

const SignIn: React.FC = () => {
  const router = useRouter();
  return (
    <BlurView
      intensity={40}
      tint="light"
      className="bg-white/30 border border-white/50 backdrop-blur-md"
    >
      <Image
        source={require("../../assets/images/ece-bg.jpg")}
        style={{
          position: "absolute",
          opacity: 0.5,
          width: "100%",
          height: "100%",
        }}
      />
      <SafeAreaView>
        <View id="root" className="h-full items-center justify-center p-12">
          <View id="header" className="mb-6">
            <Text className="text-5xl font-bold">GetWith</Text>
          </View>
          <View id="form" className="w-full flex gap-y-6 mb-6">
            <Input
              className="rounded-xl border-gray-600"
              variant="outline"
              size="xl"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField type="text" placeholder="Email" />
            </Input>
            <Input
              className="rounded-xl border-gray-600"
              variant="outline"
              size="xl"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField type="password" placeholder="Password" />
              <InputSlot>
                <InputIcon as={Eye} className="mr-2 text-gray-600" />
              </InputSlot>
            </Input>
            <Button
              onPress={() => router.navigate("/(tabs)")}
              className="rounded-2xl h-16 bg-black"
              size="xl"
              variant="solid"
              action="primary"
            >
              <ButtonText>Sign In</ButtonText>
            </Button>
          </View>
          <View id="or-divider" className="flex flex-row items-center my-6">
            <View className="flex-1 h-px bg-gray-600" />
            <Text className="mx-4 text-gray-800">OR</Text>
            <View className="flex-1 h-px bg-gray-600" />
          </View>
          <View id="other-options">
            <AppleButton
              buttonStyle={AppleButton.Style.BLACK}
              buttonType={AppleButton.Type.SIGN_IN}
              style={{
                width: 350,
                height: 50,
              }}
              onPress={() => Alert.alert("Ece", "Eceeeeeee")}
            />
          </View>
          <View id="sign-up-route" className="flex flex-row gap-x-1 mt-4">
            <Text className="text-gray-800">Don-t have an account?</Text>
            <Text
              onPress={() => router.navigate("/auth/SignUp")}
              className="text-gray-800 underline"
            >
              Sign Up
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </BlurView>
  );
};
export default SignIn;
