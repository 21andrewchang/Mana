import { Image, Modal, Text, TouchableOpacity, View } from "react-native";
import NavBar from "./src/NavBar";
import Macros from "./src/Macros";
import Meals from "./src/Meals";
import { useState } from "react";
import AddMeal from "./src/AddMeal";
import Info from "./src/Info";
import Drink from "./src/Drink";
import Checkin from "./src/Checkin";

//TODO Generate a meal to complete leftover calorie/macro limit?
//TODO Variable Macros
export default function App() {
  const [addMealVisible, setAddMealVisible] = useState(false);
  const [checkinVisible, setCheckinVisible] = useState(false);
  const [drinkVisible, setDrinkVisible] = useState(false);
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

  function toggleDrink() {
    setDrinkVisible(!drinkVisible);
    if (!drinkVisible) {
      setMode("Drink");
    } else {
      setMode("Today");
    }
  }

  function toggleAddMeal() {
    setAddMealVisible(!addMealVisible);
    if (!addMealVisible) {
      setMode("Add Meal");
    } else {
      setMode("Today");
    }
  }

  function toggleCheckin() {
    setCheckinVisible(!checkinVisible);
    if (!checkinVisible) {
      setMode("Daily Checkin");
    } else {
      setMode("Today");
    }
  }

  return (
    <View className="flex-1 justify-center bg-black">
      <Info mode={mode} addMealVisible={addMealVisible} />
      <View className="flex-1 items-center h-full bg-white rounded-[38px]">
        <Macros />
        <Meals removeMeal={removeMeal} meals={meals} />
      </View>
      <NavBar
        toggleAddMeal={toggleAddMeal}
        toggleDrink={toggleDrink}
        toggleCheckin={toggleCheckin}
      />
      <AddMeal
        addMealVisible={addMealVisible}
        addMeal={addMeal}
        toggleAddMeal={toggleAddMeal}
      />
      <Drink drinkVisible={drinkVisible} toggleDrink={toggleDrink} />
      <Checkin checkinVisible={checkinVisible} toggleCheckin={toggleCheckin} />
    </View>
  );
}
