import Category from "@/components/explore/Category";
import Header from "@/components/explore/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Image } from "@/components/ui/image";
import { Categories } from "@/constants/Categories";
import { FileText } from "lucide-react-native";
import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function TabTwoScreen() {
  return (
    <ScrollView bounces={false} showsHorizontalScrollIndicator={false}>
    <SafeAreaView>
      <View id="root" className="">
        <Header />
        <View id="recommended" className="p-6">
          <View className="flex flex-row items-center justify-between">
            <Text className="text-2xl font-semibold">Recommended For You</Text>
            <Button className="bg-gray-300">
              <Text>See All</Text>
            </Button>
          </View>
          <View id="categories" className="mt-4">
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={Categories}
              keyExtractor={(item) => item.id.toString()}
              renderItem={(item) => <Category item={item.item} />}
            />
          </View>
            <View id="ads" className="mt-4">
              <Card className="bg-gray-300 flex flex-row justify-between items-center my-1">
                <View className="flex flex-row items-center gap-x-2">
                  <Image
                    size="xs"
                    source={require("../../assets/images/explore/x-logo.jpg")}
                    alt="image"
                    className="rounded-xl"
                  />
                  <View id="ads-info">
                    <Text className="font-bold">
                      FullStack Software Engineer
                    </Text>
                    <Text>X Limited Company | Remote</Text>
                  </View>
                </View>
                <FileText color={"black"} />
              </Card>
            </View>
        </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
}
