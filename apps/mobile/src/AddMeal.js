import {
  Image,
  ScrollView,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function AddMeal({ addMealVisible, toggleAddMeal, addMeal }) {
  const cancel = require("../assets/CancelButton.png");
  const foods = [
    { name: "🥯 Bagel", protein: 11, fat: 1, carbs: 56 },
    { name: "🍲 Beef Stew", protein: 26, fat: 16, carbs: 15 },
    { name: "🥩 Steak", protein: 70, fat: 20, carbs: 0 },
    { name: "🍜 Ramen", protein: 9, fat: 7, carbs: 40 },
    { name: "🍝 Pasta", protein: 13, fat: 1, carbs: 43 },
    { name: "🥪 Grilled Cheese", protein: 15, fat: 18, carbs: 28 },
    { name: "🍳 Scrambled Eggs", protein: 13, fat: 18, carbs: 1 },
    { name: "🍕 Pizza", protein: 11, fat: 10, carbs: 36 },
  ];

  return (
    <Modal
      presentationStyle="overFullScreen"
      transparent={true}
      className="z-10 m-0"
      animationType="slide"
      visible={addMealVisible}
    >
      <View className="flex-1 justify-center">
        <View className="mt-24 h-12"></View>
        <View className="flex-1 items-center h-full bg-white rounded-[38px]">
          <ScrollView className="flex-1 mt-6 mb-16 w-full">
            {foods.map((food, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  addMeal(food);
                }}
                className="justify-center m-6 my-2 h-20 rounded-xl bg-black/5"
              >
                <Text className="mx-4 text-2xl font-medium text-black/70">
                  {food.name}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <View className="flex absolute bottom-0 z-50 items-start pb-10 w-full">
            <TouchableOpacity
              onPress={toggleAddMeal}
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
