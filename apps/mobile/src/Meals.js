import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Meals() {
  return (
    <ScrollView className="w-full">
      <TouchableOpacity className="m-6 my-2 h-20 rounded-xl bg-black/10">
        <Text className="text-center">Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity className="m-6 my-2 h-20 rounded-xl bg-black/10">
        <Text className="text-center">Hello</Text>
      </TouchableOpacity>
      <TouchableOpacity className="m-6 my-2 h-20 rounded-xl bg-black/10">
        <Text className="text-center">Hello</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
