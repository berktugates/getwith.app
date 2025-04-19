import React, { useEffect } from "react";
import { Button, ButtonText } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";
import ImgSource from "../../assets/images/logo.png";

const Greetings: React.FC = () => {
  const router = useRouter();

  const AnimatedButton = Animated.createAnimatedComponent(Button);
  const AnimatedButtonText = Animated.createAnimatedComponent(ButtonText);
  const opacity = useSharedValue(0);

  useEffect(() => {
    opacity.value = withTiming(1, {
      duration: 3000,
      easing: Easing.out(Easing.exp),
    });
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      transform: [{ scale: 0.9 + opacity.value * 0.1 }],
    };
  });
  return (
    <>
      <SafeAreaView className="bg-black">
        <View id="root" className="p-4">
          <View
            id="large-section"
            className="basis-3/4 border flex items-center justify-center"
          >
            <Image source={ImgSource} size="2xl" />
          </View>
          <View id="buttons-sections" className="flex gap-y-4 basis-1/4">
            <AnimatedButton
              onPress={() => router.navigate("/auth/SignIn")}
              size="xl"
              className="rounded-xl bg-gray-100"
              style={animatedStyle}
            >
              <AnimatedButtonText
                className="text-gray-700 font-medium tracking-widest"
                style={animatedTextStyle}
              >
                Sign In
              </AnimatedButtonText>
            </AnimatedButton>
            <AnimatedButton
              onPress={() => router.navigate("/auth/SignUp")}
              size="xl"
              className="rounded-xl bg-gray-100"
              style={animatedStyle}
            >
              <AnimatedButtonText
                className="text-gray-700 font-medium tracking-widest"
                style={animatedTextStyle}
              >
                Sign Up
              </AnimatedButtonText>
            </AnimatedButton>
          </View>
        </View>
      </SafeAreaView>
      <StatusBar style="light" backgroundColor="#000" />
    </>
  );
};
export default Greetings;
