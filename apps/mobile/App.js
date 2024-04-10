import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import NavBar from "./src/NavBar";
import Macros from "./src/Macros";
import Meals from "./src/Meals";
import { useState } from "react";

export default function App() {
  const cancel = require("./assets/CancelButton.png");
  const [addMeal, setAddMeal] = useState(false);
  const [mode, setMode] = useState("Today");
  function toggleAddMeal() {
    setAddMeal(!addMeal);
    if (!addMeal) {
      setMode("Add Meal");
    } else {
      setMode("Today");
    }
  }

  return (
    <View className="flex-1 justify-center bg-black">
      <View className="flex-row m-8 mt-20 mb-4">
        <View className="flex-1">
          <Text className="text-5xl font-semibold text-white">{mode}</Text>
        </View>
        {!addMeal && (
          <TouchableOpacity className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
            <Text className="text-black">AC</Text>
          </TouchableOpacity>
        )}
      </View>
      <View className="flex-1 items-center h-full bg-white rounded-[38px]">
        <Macros />
        <Meals />
      </View>
      <NavBar toggleAddMeal={toggleAddMeal} />
      <Modal
        presentationStyle="overFullScreen"
        transparent={true}
        className="z-10 m-0"
        animationType="slide"
        visible={addMeal}
      >
        <View className="flex-1 justify-center">
          <View className="mt-24 h-12"></View>
          <View className="flex-1 items-center h-full bg-white rounded-[38px]">
            <View className="flex absolute bottom-0 z-50 items-end pb-12 w-full">
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
    </View>
  );
}
