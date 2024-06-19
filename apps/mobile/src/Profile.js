import React, { useState } from "react";
import {
  Image,
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

export default function Profile({ profileVisible, toggleProfile }) {
  const cancel = require("../assets/CancelButton.png");

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activityLevel, setActivityLevel] = useState(1.55);
  const [maintenanceCalories, setMaintenanceCalories] = useState(null);

  const calculateMaintenanceCalories = () => {
    let BMR;
    if (gender === "male") {
      BMR = 88.362 + 13.397 * weight + 4.799 * height - 5.677 * age;
    } else {
      BMR = 447.593 + 9.247 * weight + 3.098 * height - 4.33 * age;
    }
    const maintenance = BMR * activityLevel;
    setMaintenanceCalories(maintenance.toFixed(0));
  };

  return (
    <Modal
      presentationStyle="overFullScreen"
      transparent={true}
      animationType="slide"
      visible={profileVisible}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View className="flex-1 justify-center">
          <View className="mt-24 h-12"></View>
          <View className="flex-1 items-center h-full bg-white rounded-[38px]">
            <View className="flex-1 mt-6 mb-16 w-full">
              <View className="m-6 my-2 rounded-xl bg-black/5">
                <Text className="m-4 text-2xl font-medium text-black">
                  📏 Height (cm)
                </Text>
                <TextInput
                  value={height}
                  onChangeText={setHeight}
                  keyboardType="numeric"
                  placeholder="Enter height in cm"
                  className="m-4 text-xl"
                />
              </View>
              <View className="m-6 my-2 mb-12 rounded-xl bg-black/5">
                <Text className="m-4 text-2xl font-medium text-black">
                  🪨 Weight (kg)
                </Text>
                <TextInput
                  value={weight}
                  onChangeText={setWeight}
                  keyboardType="numeric"
                  placeholder="Enter weight in kg"
                  className="m-4 text-xl"
                />
              </View>
              <TouchableOpacity
                onPress={calculateMaintenanceCalories}
                className="p-4 m-6 my-2 bg-blue-500 rounded-xl"
              >
                <Text className="text-2xl font-medium text-center text-white">
                  Calculate
                </Text>
              </TouchableOpacity>
              {maintenanceCalories && (
                <View className="m-6 my-2 rounded-xl bg-black/5">
                  <Text className="m-4 text-2xl font-medium text-black">
                    Maintenance Calories: {maintenanceCalories}
                  </Text>
                </View>
              )}
            </View>
            <View className="flex absolute bottom-0 flex-row justify-between pb-10 w-full">
              <TouchableOpacity
                onPress={toggleProfile}
                className="justify-center mx-8 w-16 h-16 bg-black rounded-full"
              >
                <Image source={cancel} className="flex w-16 h-16" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
}
