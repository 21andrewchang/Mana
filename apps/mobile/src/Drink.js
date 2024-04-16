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
          <View className="flex-1 mt-6 mb-16 w-full">
            <View className="m-6 my-2 h-72 rounded-xl bg-black/5">
              <Text className="m-4 text-2xl font-medium text-black/70">
                Protein 60g
              </Text>
            </View>
          </View>
          <View className="flex absolute bottom-0 flex-row justify-between pb-10 w-full">
            <TouchableOpacity
              onPress={toggleDrink}
              className="justify-center mx-8 w-16 h-16 bg-black rounded-full"
            >
              <Image source={cancel} className="flex w-16 h-16" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={toggleDrink}
              className="justify-center mr-8 w-36 h-16 bg-black rounded-3xl"
            >
              <Text className="text-xl font-semibold text-center text-white">
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
