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
    {
      name: "🥯 Bagel",
      protein: 11,
      fat: 1,
      carbs: 56,
      potassium: 70,
      vitaminC: 0.6,
      calcium: 30,
      calories: 280, // 1 medium bagel
    },
    {
      name: "🍲 Beef Stew",
      protein: 26,
      fat: 16,
      carbs: 15,
      potassium: 370,
      vitaminC: 1.2,
      calcium: 20,
      calories: 250, // 1 cup of beef stew
    },
    {
      name: "🥩 Steak",
      protein: 70,
      fat: 20,
      carbs: 0,
      potassium: 318,
      vitaminC: 0,
      calcium: 9,
      calories: 679, // 8 oz grilled ribeye steak
    },
    {
      name: "🍜 Ramen",
      protein: 9,
      fat: 7,
      carbs: 40,
      potassium: 100,
      vitaminC: 0,
      calcium: 20,
      calories: 371, // 1 package instant ramen
    },
    {
      name: "🍝 Pasta",
      protein: 13,
      fat: 1,
      carbs: 43,
      potassium: 63,
      vitaminC: 0,
      calcium: 10,
      calories: 221, // 1 cup cooked pasta
    },
    {
      name: "🥪 Grilled Cheese",
      protein: 15,
      fat: 18,
      carbs: 28,
      potassium: 84,
      vitaminC: 0,
      calcium: 206,
      calories: 556, // 1 sandwich
    },
    {
      name: "🍳 Scrambled Eggs",
      protein: 13,
      fat: 18,
      carbs: 1,
      potassium: 138,
      vitaminC: 0,
      calcium: 56,
      calories: 200, // 2 large eggs with butter
    },
    {
      name: "🍕 Pizza",
      protein: 11,
      fat: 10,
      carbs: 36,
      potassium: 184,
      vitaminC: 1.5,
      calcium: 219,
      calories: 285, // 1 slice of cheese pizza
    },
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
