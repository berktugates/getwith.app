import { Button, ButtonText } from "@/components/ui/button";
import { Input, InputField, InputIcon, InputSlot } from "@/components/ui/input";
import { Calendar, Eye } from "lucide-react-native";
import React, { useState } from "react";
import { SafeAreaView, Text, View } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useRouter } from "expo-router";

const SignUp: React.FC = () => {
  const [isDateTimePickerOpen, setIsDateTimePickerOpen] =
    useState<boolean>(false);
    const router = useRouter();
  return (
    <SafeAreaView>
      <View id="root" className="h-full items-center justify-center p-12">
        <View id="header" className="mb-6">
          <Text className="text-5xl font-bold">GetWith</Text>
        </View>
        <View id="form" className="w-full flex gap-y-6 mb-6">
          <View
            id="form-name-surname-section"
            className="flex flex-row gap-x-2"
          >
            <Input
              className="rounded-xl w-1/2"
              variant="outline"
              size="xl"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField type="text" placeholder="Name" />
            </Input>
            <Input
              className="rounded-xl w-1/2"
              variant="outline"
              size="xl"
              isDisabled={false}
              isInvalid={false}
              isReadOnly={false}
            >
              <InputField type="text" placeholder="Surname" />
            </Input>
          </View>

          <Input
            className="rounded-xl"
            variant="outline"
            size="xl"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}
          >
            <InputField type="text" placeholder="06/17/2002" />
            <InputSlot onPress={() => setIsDateTimePickerOpen(true)}>
              {isDateTimePickerOpen ? (
                <DateTimePicker
                  className="w-full"
                  value={new Date()}
                  onChange={(event, date) => {
                    setIsDateTimePickerOpen(false);
                  }}
                />
              ) : (
                <InputIcon as={Calendar} className="mr-2" />
              )}
            </InputSlot>
          </Input>

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
            className="rounded-2xl h-16"
            size="xl"
            variant="solid"
            action="primary"
          >
            <ButtonText>Sign Up</ButtonText>
          </Button>
        </View>
        <View id="sign-in-router" className="flex flex-row gap-x-1">
        <Text className="text-gray-500">Already have an account?</Text>
        <Text onPress={()=>router.navigate("/auth/SignIn")} className="text-gray-500 underline">Sign In</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
export default SignUp;
