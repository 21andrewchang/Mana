import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import NavBar from "./src/NavBar";
import Macros from "./src/Macros";
import Meals from "./src/Meals";
import { useState } from "react";
import AddMeal from "./src/AddMeal";

//TODO Generate a meal to complete leftover calorie/macro limit?
export default function App() {
  const [addMealVisible, setAddMealVisible] = useState(false);
  const [mode, setMode] = useState("Today");
  const [meals, setMeals] = useState([
    { title: "Meal 1", food: "🍳 Scrambled Eggs" },
    { title: "Meal 2", food: "🥪 Grilled Cheese" },
    { title: "Meal 3", food: "🥩 Steak" },
  ]);

  function addMeal(newFood) {
    setMeals((currentMeals) => {
      const nextMealNumber = currentMeals.length + 1;
      const newMeal = {
        title: `Meal ${nextMealNumber}`,
        food: newFood,
      };
      toggleAddMeal();
      return [...currentMeals, newMeal];
    });
  }
  function removeMeal(mealIndex) {
    setMeals((currentMeals) =>
      currentMeals.filter((_, index) => index !== mealIndex),
    );
  }

  function toggleAddMeal() {
    setAddMealVisible(!addMealVisible);
    if (!addMealVisible) {
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
        {!addMealVisible && (
          <TouchableOpacity className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
            <Text className="text-black">AC</Text>
          </TouchableOpacity>
        )}
      </View>
      <View className="flex-1 items-center h-full bg-white rounded-[38px]">
        <Macros />
        <Meals removeMeal={removeMeal} meals={meals} />
      </View>
      <NavBar toggleAddMeal={toggleAddMeal} />
      <AddMeal
        addMealVisible={addMealVisible}
        addMeal={addMeal}
        toggleAddMeal={toggleAddMeal}
      />
    </View>
  );
}
