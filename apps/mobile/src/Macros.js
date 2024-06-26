import React from "react";
import { Text, View } from "react-native";
import * as Progress from "react-native-progress";

export default function Macros({ protein, calories }) {
  const proteinPercentage = protein / 170;
  const caloriesPercentage = calories / 3000;

  return (
    <View className="flex justify-center items-center my-4">
      <View className="flex-row items-center m-2">
        <Text className="text-3xl text-center">🍖</Text>
        <Progress.Bar
          progress={proteinPercentage}
          width={300}
          height={28}
          color="#FE6464"
          unfilledColor="#F7F7F7"
          borderWidth={0}
          borderRadius={100}
        />
      </View>
      <View className="flex-row items-center">
        <Text className="mb-3 text-3xl text-center">🎯</Text>
        <Progress.Bar
          progress={caloriesPercentage}
          width={300}
          height={28}
          color="#70EFF9"
          unfilledColor="#F7F7F7F7"
          borderWidth={0}
          borderRadius={100}
        />
      </View>
    </View>
  );
}
