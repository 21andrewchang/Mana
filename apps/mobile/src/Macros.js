import { Text, View } from "react-native";

export default function Macros() {
  return (
    <View className="flex-row my-6">
      <View className="justify-center mx-6 w-20 h-20 bg-red-400 rounded-xl">
        <Text className="text-4xl text-center">🍖</Text>
        <Text className="font-semibold text-center text-white text-l">
          120g
        </Text>
      </View>
      <View className="justify-center mx-6 w-20 h-20 bg-purple-300 rounded-xl">
        <Text className="text-4xl text-center">🍞</Text>
        <Text className="font-semibold text-center text-white text-l">
          200g
        </Text>
      </View>
      <View className="justify-center mx-6 w-20 h-20 bg-orange-300 rounded-xl">
        <Text className="text-4xl text-center">🧈</Text>
        <Text className="font-semibold text-center text-white text-l">20g</Text>
      </View>
    </View>
  );
}
