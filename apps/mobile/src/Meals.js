import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Meals({ meals, removeMeal }) {
  return (
    <View className="flex w-full h-[460px]">
      <ScrollView className="flex-1 w-full">
        {meals.map((meal, index) => (
          <TouchableOpacity
            onPress={() => {
              removeMeal(index);
            }}
            key={index}
            className="justify-center m-6 my-2 h-24 rounded-xl bg-black/5"
          >
            <Text className="mx-4 text-3xl font-semibold">{meal.title}</Text>
            <Text className="mx-4 text-2xl font-medium text-black/70">
              {meal.food}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
