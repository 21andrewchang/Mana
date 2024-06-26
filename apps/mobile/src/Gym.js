import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export default function Gym({ gymVisible, toggleGym }) {
  const cancel = require("../assets/CancelButton.png");

  return (
    <View className="flex-1 h-full bg-white rounded-[38px]">
      <Text className="m-8 text-3xl font-semibold">Gym Progress</Text>
    </View>
  );
}
