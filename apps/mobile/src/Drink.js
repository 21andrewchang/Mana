import { Image, Modal, Text, TouchableOpacity, View } from "react-native";

export default function Drink({
  vitaminC,
  potassium,
  calcium,
  drinkVisible,
  toggleDrink,
}) {
  const cancel = require("../assets/CancelButton.png");
  const drinkPotassium = 2600 - potassium;
  const drinkCalcium = 1000 - calcium;
  const drinkVitaminC = 75 - vitaminC;
  const sendRecipeData = async () => {
    const recipeData = {
      vitaminC: drinkVitaminC,
      potassium: drinkPotassium,
      calcium: drinkCalcium,
    };

    try {
      const response = await fetch(
        "https://e65c-50-218-51-5.ngrok-free.app/send-recipe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recipeData),
        },
      );

      const jsonResponse = await response.json();
      console.log("Response:", jsonResponse);
      toggleDrink(); // Close the modal after sending data
    } catch (error) {
      console.error("Failed to send recipe:", error);
    }
  };

  return (
    <Modal
      presentationStyle="overFullScreen"
      transparent={true}
      className="z-10 m-0"
      animationType="slide"
      visible={drinkVisible}
    >
      <View className="flex-1 justify-center">
        <View className="mt-24 h-12"></View>
        <View className="flex-1 items-center h-full bg-white rounded-[38px]">
          <View className="flex-1 mt-6 mb-16 w-full">
            <TouchableOpacity className="justify-center m-6 my-2 h-24 rounded-xl bg-black/5">
              <Text className="mx-4 text-2xl font-semibold">
                💪 Muscle Function
              </Text>
              <View className="flex-row justify-between">
                <Text className="mx-4 text-xl font-medium text-black/70">
                  Calcium
                </Text>
                <Text className="mx-4 text-xl font-medium text-black/70">
                  {drinkCalcium}mg
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="justify-center m-6 my-2 h-24 rounded-xl bg-black/5">
              <Text className="mx-4 text-2xl font-semibold">
                😷 Immune Boost
              </Text>
              <View className="flex-row justify-between">
                <Text className="mx-4 text-xl font-medium text-black/70">
                  Vitamin C
                </Text>
                <Text className="mx-4 text-xl font-medium text-black/70">
                  {drinkVitaminC}mg
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="justify-center m-6 my-2 h-24 rounded-xl bg-black/5">
              <Text className="mx-4 text-2xl font-semibold">
                ❤️ Heart Health
              </Text>
              <View className="flex-row justify-between">
                <Text className="mx-4 text-xl font-medium text-black/70">
                  Potassium
                </Text>
                <Text className="mx-4 text-xl font-medium text-black/70">
                  {drinkPotassium}mg
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View className="flex absolute bottom-0 flex-row justify-between pb-10 w-full">
            <TouchableOpacity
              onPress={toggleDrink}
              className="justify-center mx-8 w-16 h-16 bg-black rounded-full"
            >
              <Image source={cancel} className="flex w-16 h-16" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                sendRecipeData();
              }}
              className="justify-center mr-8 w-36 h-16 bg-black rounded-3xl"
            >
              <Text className="text-xl font-semibold text-center text-white">
                Confirm
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
