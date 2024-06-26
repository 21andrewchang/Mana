import { Image, TouchableOpacity, View } from "react-native";

export default function NavBar({ toggleGym, toggleJournal, toggleHome }) {
  const log = require("../assets/CheckinButton.png");
  const drink = require("../assets/DrinkButton.png");
  const add = require("../assets/AddMealButton.png");
  const cancel = require("../assets/CancelButton.png");

  return (
    <View className="absolute bottom-0 flex-row flex-1 justify-end items-center pb-10">
      <TouchableOpacity
        onPress={toggleGym}
        className="justify-center mx-10 w-12 h-12 rounded-full"
      >
        <Image source={drink} resizeMode="contain" className="flex w-16 h-16" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggleHome}
        className="justify-center mx-10 w-12 h-12 rounded-full"
      >
        <Image source={add} resizeMode="contain" className="flex w-16 h-16" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggleJournal}
        className="justify-center mx-10 w-12 h-12 rounded-full"
      >
        <Image source={log} resizeMode="contain" className="flex w-16 h-16" />
      </TouchableOpacity>
    </View>
  );
}
