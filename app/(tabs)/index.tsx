import { SafeAreaView, Text, View } from "react-native";
import { Button, ButtonText } from "@/components/ui/button";

export default function HomeScreen() {
  return (
    <SafeAreaView>
      <View id="content" className="flex items-center justify-center h-screen">
      <Text>Ece denemeee</Text>
        <Button size="md" variant="solid" action="primary">
          <ButtonText>GetWith</ButtonText>
        </Button>
      </View>
    </SafeAreaView>
  );
}
