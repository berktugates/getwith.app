import React, { useState } from "react";
import UserCard from "./UserCard";
import Swiper from "react-native-deck-swiper";
import { StyleSheet } from "react-native";

const CardSwiper: React.FC = () => {
  const [cards] = useState([
    {
      id: 1,
      name: "Rafa Silva",
      age: 24,
      title: "Frontend Developer",
      location: "San Francisco",
      description: `Hello, I am Rafa. In 2024, I graduated as the top student of my department with a GPA of 3.76 from Ondokuz Mayıs University, Department of Graphic Design.`,
      image:
        "https://t4.ftcdn.net/jpg/06/48/39/19/360_F_648391979_uMz6EwAlKNIJnK9r46UpTiM17nT8GuLl.jpg",
      skills: [
        {
          id: 1,
          title: "TypeScript",
        },
        {
          id: 2,
          title: "JavaScript",
        },
        {
          id: 3,
          title: "Python",
        },
      ],
      languages: [
        {
          id: 1,
          icon: "🇺🇸",
        },
        {
          id: 2,
          icon: "🇵🇹",
        },
        {
          id: 3,
          icon: "🇪🇸",
        },
      ],
    },
    {
      id: 1,
      name: "Rafa Silva",
      age: 24,
      title: "Frontend Developer",
      location: "San Francisco",
      description: `Hello, I am Rafa. In 2024, I graduated as the top student of my department with a GPA of 3.76 from Ondokuz Mayıs University, Department of Graphic Design.`,
      image:
        "https://t4.ftcdn.net/jpg/06/48/39/19/360_F_648391979_uMz6EwAlKNIJnK9r46UpTiM17nT8GuLl.jpg",
      skills: [
        {
          id: 1,
          title: "TypeScript",
        },
        {
          id: 2,
          title: "JavaScript",
        },
        {
          id: 3,
          title: "Python",
        },
      ],
      languages: [
        {
          id: 1,
          icon: "🇺🇸",
        },
        {
          id: 2,
          icon: "🇵🇹",
        },
        {
          id: 3,
          icon: "🇪🇸",
        },
      ],
    },
    {
      id: 1,
      name: "Rafa Silva",
      age: 24,
      title: "Frontend Developer",
      location: "San Francisco",
      description: `Hello, I am Rafa. In 2024, I graduated as the top student of my department with a GPA of 3.76 from Ondokuz Mayıs University, Department of Graphic Design.`,
      image:
        "https://t4.ftcdn.net/jpg/06/48/39/19/360_F_648391979_uMz6EwAlKNIJnK9r46UpTiM17nT8GuLl.jpg",
      skills: [
        {
          id: 1,
          title: "TypeScript",
        },
        {
          id: 2,
          title: "JavaScript",
        },
        {
          id: 3,
          title: "Python",
        },
      ],
      languages: [
        {
          id: 1,
          icon: "🇺🇸",
        },
        {
          id: 2,
          icon: "🇵🇹",
        },
        {
          id: 3,
          icon: "🇪🇸",
        },
      ],
    },
  ]);
  return (
    <Swiper
      cards={cards}
      renderCard={(card) => <UserCard card={card} />}
      onSwipedRight={() => console.log("Like!")}
      onSwipedLeft={() => console.log("Nope!")}
      stackSize={cards.length}
      backgroundColor="transparent"
      cardStyle={style.swiperContainer}
    />
  );
};

export default CardSwiper;

const style = StyleSheet.create({
  swiperContainer: {
    display: "flex",
    alignItems: "center",
    margin: "auto",
  },
});
