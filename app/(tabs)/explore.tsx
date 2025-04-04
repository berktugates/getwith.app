import { FlatList, SafeAreaView, ScrollView, Text, View } from "react-native";
import Category from "@/components/explore/Category";
import Header from "@/components/explore/Header";
import { Button } from "@/components/ui/button";
import { Categories } from "@/constants/Categories";
import AdsCard from "../../components/explore/AdsCard";
import { useState } from "react";

export default function TabTwoScreen() {
  const [isPressedCategory, setIsPressedCategory] = useState<number>();
  return (
    <>
      <SafeAreaView className="flex-1">
          <Header />
          <View id="recommended" className="flex-1 p-6">
            <View className="flex flex-row items-center justify-between">
              <Text className="text-2xl font-semibold">
                Recommended For You
              </Text>
              <Button className="bg-stone-300">
                <Text>See All</Text>
              </Button>
            </View>
            <View id="categories" className="mt-4">
              <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                data={Categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={(item) => (
                  <Category
                    onPress={() => setIsPressedCategory(item.item.id)}
                    item={item.item}
                    selectedCategory={isPressedCategory}
                  />
                )}
              />
            </View>
            <ScrollView className="flex-1" bounces={false}>
              <AdsCard
                company={"X Limited Corp."}
                jobTitle={"Full Stack Software Engineer"}
                jobDesc={"Lorem ipsum dolor sit amet."}
                jobLocation={"Remote"}
                icon={
                  "https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg"
                }
              />
            </ScrollView>
          </View>
      </SafeAreaView>
    </>
  );
}
