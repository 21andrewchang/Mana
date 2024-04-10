import { Image, Modal, Text, TouchableOpacity, View } from "react-native";

export default function Info({ mode }) {
  return (
    <>
      <View className="flex-row m-6 mt-20 mb-4">
        <View className="flex-1">
          <Text className="text-5xl font-semibold text-white">{mode}</Text>
        </View>
        {mode == "Today" && (
          <TouchableOpacity className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
            <Text className="text-black">AC</Text>
          </TouchableOpacity>
        )}
      </View>
    </>
  );
}
