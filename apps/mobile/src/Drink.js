import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import { useState } from "react";

export default function Drink({
  vitaminC,
  potassium,
  calcium,

  drinkVisible,
  toggleDrink,
}) {
  const cancel = require("../assets/CancelButton.png");

  const [vitaminCStatus, setVitaminCStatus] = useState(true);
  const [potassiumStatus, setPotassiumStatus] = useState(true);
  const [calciumStatus, setCalciumStatus] = useState(true);

  const sendRecipeData = async () => {
    const recipeData = {
      vitaminC: vitaminC,
      potassium: potassium,
      calcium: calcium,
    };

    try {
      const postResponse = await fetch(
        "http://4aea-173-230-116-3.ngrok-free.app/recipe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(recipeData),
        },
      );

      const textPostResponse = await postResponse.text();
      console.log("POST Raw response text:", textPostResponse);

      if (
        postResponse.ok &&
        postResponse.headers.get("Content-Type")?.includes("application/json")
      ) {
        const jsonResponse = JSON.parse(textPostResponse);
        console.log("POST Response:", jsonResponse);
      } else {
        console.log(
          "Failed to send recipe data. Status Code:",
          postResponse.status,
        );
      }

      // Fetching the status after sending the data
      const getStatusResponse = await fetch(
        "http://4aea-173-230-116-3.ngrok-free.app/status",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        },
      );

      const textGetStatusResponse = await getStatusResponse.text();
      console.log("GET Raw response text:", textGetStatusResponse);

      if (
        getStatusResponse.ok &&
        getStatusResponse.headers
          .get("Content-Type")
          ?.includes("application/json")
      ) {
        const statusResponse = JSON.parse(textGetStatusResponse);
        console.log("Status Response:", statusResponse);

        // Update the states with the new status information
        setVitaminCStatus(statusResponse.vitaminC);
        setPotassiumStatus(statusResponse.potassium);
        setCalciumStatus(statusResponse.calcium);

        // Check if all statuses are true before closing the modal
        if (
          !statusResponse.vitaminC &&
          !statusResponse.potassium &&
          !statusResponse.calcium
        ) {
          toggleDrink(); // Close the modal only if all statuses are true
        }
      } else {
        console.log(
          "Failed to receive status. Status Code:",
          getStatusResponse.status,
        );
      }
    } catch (error) {
      console.error("Error during fetch operations:", error);
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
                  {calcium}mg Calcium
                </Text>
                <Text className="mx-4 text-xl font-medium text-red-500">
                  {calciumStatus ? "Low Capacity" : ""}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="justify-center m-6 my-2 h-24 rounded-xl bg-black/5">
              <Text className="mx-4 text-2xl font-semibold">
                😷 Immune Boost
              </Text>
              <View className="flex-row justify-between">
                <Text className="mx-4 text-xl font-medium text-black/70">
                  {vitaminC}mg Vitamin C
                </Text>
                <Text className="mx-4 text-xl font-medium text-red-500">
                  {vitaminCStatus ? "Low Capacity" : ""}
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="justify-center m-6 my-2 h-24 rounded-xl bg-black/5">
              <Text className="mx-4 text-2xl font-semibold">
                ❤️ Heart Health
              </Text>
              <View className="flex-row justify-between">
                <Text className="mx-4 text-xl font-medium text-black/70">
                  {potassium}mg Potassium
                </Text>
                <Text className="mx-4 text-xl font-medium text-red-500">
                  {potassiumStatus ? "Low Capacity" : ""}
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
