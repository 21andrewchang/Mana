import { Image, TouchableOpacity, View } from "react-native";

export default function NavBar({ toggleAddMeal }) {
  const log = require("../assets/CheckinButton.png");
  const drink = require("../assets/DrinkButton.png");
  const add = require("../assets/AddMealButton.png");
  return (
    <View className="absolute bottom-0 z-50 flex-row pb-12 w-full">
      <TouchableOpacity className="justify-center mx-8 w-16 h-16 bg-black rounded-full">
        <Image source={log} resizeMode="contain" className="flex w-16 h-16" />
      </TouchableOpacity>
      <TouchableOpacity className="justify-center mx-8 w-16 h-16 bg-black rounded-full">
        <Image source={drink} resizeMode="contain" className="flex w-16 h-16" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={toggleAddMeal}
        className="justify-center mx-8 w-16 h-16 bg-black rounded-full"
      >
        <Image source={add} resizeMode="contain" className="flex w-16 h-16" />
      </TouchableOpacity>
    </View>
  );
}
