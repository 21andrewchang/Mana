import {
  Image,
  ScrollView,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Drink({ drinkVisible, toggleDrink }) {
  const cancel = require("../assets/CancelButton.png");
  const foods = [
    "🥯 Bagel",
    "🍲 Beef Stew",
    "🥩 Steak",
    "🍜 Ramen",
    "🍝 Pasta",
    "🥪 Grilled Cheese",
    "🍳 Scrambled Eggs",
    "🍕 Pizza",
  ];

  return (
    <Modal
      presentationStyle="overFullScreen"
      transparent={true}
      className="z-10 m-0"
      animationType="slide"
      visible={drinkVisible}
    >
      <View className="flex-1 justify-center">
        <View className="mt-24 h-12"></View>
        <View className="flex-1 items-center h-full bg-white rounded-[38px]">
          <View className="flex absolute bottom-0 z-50 items-end pb-10 w-full">
            <TouchableOpacity
              onPress={toggleDrink}
              className="justify-center mx-8 w-16 h-16 bg-black rounded-full"
            >
              <Image source={cancel} className="flex w-16 h-16" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
