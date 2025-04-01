import React, { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { Card } from "../ui/card";
import { Image } from "../ui/image";
import { Star } from "lucide-react-native";
import { Button, ButtonText } from "../ui/button";

interface IAdsCard {
  company: string;
  jobTitle: string;
  jobDesc: string;
  jobLocation: string;
  icon: string;
}

const AdsCard: React.FC<IAdsCard> = ({
  company,
  jobTitle,
  jobDesc,
  jobLocation,
  icon,
}) => {
  const [isAdsOpen, setIsAdsOpen] = useState<boolean>(false);
  return (
    <Pressable
      id="ads"
      className="mt-4"
      onLongPress={() => setIsAdsOpen(!isAdsOpen)}
    >
      <Card
        className={`bg-stone-200 border border-stone-700 flex my-1 rounded-3xl ${
          isAdsOpen ? "relative max-h-[450px]" : "h-24 justify-center"
        }`}
      >
        <ScrollView
          showsVerticalScrollIndicator={false}
          scrollEnabled={isAdsOpen}
        >
          <View
            className={`flex  ${
              isAdsOpen
                ? "static h-full"
                : "flex-row gap-x-2 items-center justify-between"
            }`}
          >
            <View
              id="brand-logo&job-title"
              className="flex flex-row items-center gap-x-2"
            >
              <Image
                size="xs"
                source={{
                  uri: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
                }}
                alt="ads-brand-logo"
                className="rounded-xl"
              />
              <View id="ads-info" className="my-4">
                <Text className={`font-bold ${isAdsOpen ? "text-xl" : ""}`}>
                  {jobTitle}
                </Text>
                <Text>
                  {company} | {jobLocation}
                </Text>
              </View>
            </View>
            {isAdsOpen == false ? (
              <Star color={"#facc15"} fill={"#facc15"} />
            ) : (
              <></>
            )}
            {isAdsOpen && (
              <View id="ads-content">
                <Text>{jobDesc}</Text>
              </View>
            )}
            {isAdsOpen && (
              <View id="apply-button" className="mt-4">
                <Button
                  onPress={() => setIsAdsOpen(false)}
                  size="md"
                  variant="solid"
                  action="primary"
                >
                  <ButtonText>Apply</ButtonText>
                </Button>
              </View>
            )}
          </View>
        </ScrollView>
      </Card>
    </Pressable>
  );
};
export default AdsCard;
