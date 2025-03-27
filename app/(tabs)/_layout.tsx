import React from 'react';
import { Platform, useWindowDimensions } from 'react-native';
import { Tabs } from 'expo-router';
import {Aperture} from "lucide-react-native"

export default function TabLayout() {
  const { width, height } = useWindowDimensions();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
            bottom: height < 750 ? 35 : 55,
            width: width / 2,
            height: height < 750 ? 50 :60,
            marginLeft: (width - width / 2) / 2,
            borderRadius: 20,
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            alignItems: "center",
            rowGap: 6,
           },
          android:{
            position: "absolute",
            bottom: 25,
            width: width / 2,
            height: 60,
            marginLeft: (width - width / 2) / 2,
            borderRadius: 20,
            display: "flex",
            flexDirection:"row",
            justifyContent: "center",
            alignItems: "center",
            rowGap: 6,
         },
        }),
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <Aperture size={20} color={"black"} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: () => <Aperture size={20} color={"black"} />,
        }}
      />
    </Tabs>
  );
}
