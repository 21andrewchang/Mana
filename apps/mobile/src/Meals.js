import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Meals() {
  return (
    <ScrollView className="w-full">
      <TouchableOpacity className="justify-center m-6 my-2 h-24 rounded-xl bg-black/5">
        <Text className="mx-4 text-3xl font-semibold">Meal 1</Text>
        <Text className="mx-4 text-2xl font-medium text-black/70">
          🍳 Scrambled Eggs
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="justify-center m-6 my-2 h-20 rounded-xl bg-black/5">
        <Text className="mx-4 text-3xl font-semibold">Meal 2</Text>
        <Text className="mx-4 text-2xl font-medium text-black/70">
          🥪 Grilled Cheese
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="justify-center m-6 my-2 h-20 rounded-xl bg-black/5">
        <Text className="mx-4 text-3xl font-semibold">Meal 3</Text>
        <Text className="mx-4 text-2xl font-medium text-black/70">
          🥩 Steak
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
