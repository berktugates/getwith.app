import React from "react";
import { SafeAreaView, Text, View } from "react-native";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Button, ButtonText } from "@/components/ui/button";
import { Eye } from "lucide-react-native";
import { useRouter } from "expo-router";

const SignIn: React.FC = () => {
  const router = useRouter();
  return (
    <SafeAreaView>
      <View id="root" className="h-full items-center justify-center p-16">
        <View id="header" className="mb-6">
          <Text className="text-5xl font-bold">GetWith</Text>
        </View>
        <View id="form" className="w-full flex gap-y-6 mb-6">
          <Input
            className="rounded-xl"
            variant="outline"
            size="xl"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField type="text" placeholder="Email" />
          </Input>
          <Input
            className="rounded-xl"
            variant="outline"
            size="xl"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField type="password" placeholder="Password" />
            <InputSlot>
              <InputIcon as={Eye} className="mr-2" />
            </InputSlot>
          </Input>
          <Button
            onPress={() => router.navigate("/(tabs)")}
            className="rounded-2xl h-16"
            size="xl"
            variant="solid"
            action="primary"
          >
            <ButtonText>Sign In</ButtonText>
          </Button>
        </View>
        <View id="or-divider" className="flex flex-row items-center my-4">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="mx-4 text-gray-500">OR</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>
        <View id="other-options"></View>
        <View id="sign-up-route" className="flex flex-row gap-x-1">
          <Text className="text-gray-500">Don-t have an account?</Text>
          <Text
            onPress={() => router.navigate("/auth/SignUp")}
            className="text-gray-500 underline"
          >
            Sign Up
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignIn;
