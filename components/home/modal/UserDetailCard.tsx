import React from "react";
import { Modal, SafeAreaView, ScrollView, Text, View } from "react-native";
import SkillCard from "../SkillCard";
import { X } from "lucide-react-native";

interface IisUserDetailCard {
  isUserDetailCardActive: boolean;
  setIsUserDetailCardActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserDetailCard: React.FC<IisUserDetailCard> = ({
  isUserDetailCardActive,
  setIsUserDetailCardActive,
  card,
}) => {
  return (
    <Modal visible={isUserDetailCardActive} animationType="fade">
      <ScrollView>
        <SafeAreaView>
          <View id="root" className="p-6">
            <View id="header">
              <X
                onPress={() => setIsUserDetailCardActive(false)}
                color={"black"}
              />
            </View>
            <View id="user-intro" className="flex items-center gap-y-0.5">
              <Text className="text-3xl font-medium">{card.name}</Text>
              <Text>{card.title}</Text>
              <Text>{card.location} | 34</Text>
            </View>
            <View id="user-experience" className="mt-12">
              <Text className="text-2xl font-medium border-b">Experience</Text>
              <View
                id="experience-card"
                className="my-2 flex flex-row items-center justify-between"
              >
                <View>
                  <Text className="text-xl font-medium">
                    Boyner Limited Corporation
                  </Text>
                  <Text className="font-medium">Frontend Developer</Text>
                </View>
                <Text>03/2020 - 04/2024</Text>
              </View>
              <View
                id="experience-card"
                className="my-2 flex flex-row items-center justify-between"
              >
                <View>
                  <Text className="text-xl font-medium">Healtia</Text>
                  <Text className="font-medium">Frontend Developer</Text>
                </View>
                <Text>03/2016 - 04/2019</Text>
              </View>
            </View>
            <View id="user-education" className="mt-12">
              <Text className="text-2xl font-medium border-b">Education</Text>
              <View
                id="education-card"
                className="my-2 flex flex-row items-center justify-between"
              >
                <View>
                  <Text className="text-xl font-medium">
                    İstanbul Arel University
                  </Text>
                  <Text className="font-medium">Bachelor's Degree</Text>
                </View>
                <Text>03/2011 - 04/2015</Text>
              </View>
            </View>
            <View id="user-skills" className="mt-12">
              <Text className="text-2xl font-medium border-b">Skills</Text>
              <View className="flex flex-row gap-x-2 mt-4">
                {card.skills.map((skill) => {
                  return <SkillCard title={skill.title} />;
                })}
              </View>
            </View>
            <View id="user-languages" className="mt-12">
              <Text className="text-2xl font-medium border-b">Languages</Text>
              <View id="icons" className="flex flex-row flex-wrap gap-x-1 mt-4">
                {card.languages.map((language) => {
                  return <Text className="text-3xl">{language.icon}</Text>;
                })}
              </View>
            </View>
            <View id="user-projects" className="mt-12">
              <Text className="text-2xl font-medium border-b">Projects</Text>
              <View id="project" className="mt-4">
                <Text id="project-title" className="font-medium">
                  Application for Health Data Synchronization and Analysis
                </Text>
                <Text id="project-desc" className="font-light">
                  The application, which is among the 9,000 projects that are
                  eligible to receive a grant in 2023, analyzes health data and
                  determines disease risks with machine learning.
                </Text>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ScrollView>
    </Modal>
  );
};
export default UserDetailCard;
