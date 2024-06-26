import { View, TouchableOpacity, Text } from "react-native";
import Profile from "./src/Profile";
import NavBar from "./src/NavBar";
import Macros from "./src/Macros";
import { useState } from "react";
import AddMeal from "./src/AddMeal";
import Info from "./src/Info";
import Gym from "./src/Gym";
import Journal from "./src/Journal";

//TODO Generate a meal to complete leftover calorie/macro limit?
//TODO Variable Macros
export default function App() {
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalFat, setTotalFat] = useState(0);

  const [homeVisible, setHomeVisible] = useState(true);
  const [profileVisible, setProfileVisible] = useState(false);
  const [journalVisible, setJournalVisible] = useState(false);
  const [gymVisible, setGymVisible] = useState(false);
  const [mode, setMode] = useState("Day 237");
  const [meals, setMeals] = useState([]);

  function addMeal(newFood) {
    setMeals((currentMeals) => {
      const nextMealNumber = currentMeals.length + 1;
      const newMeal = {
        title: `Meal ${nextMealNumber}`,
        food: newFood.name,
        protein: newFood.protein,
        fat: newFood.fat,
        carbs: newFood.carbs,
        potassium: newFood.potassium,
        vitaminC: newFood.vitaminC,
        calcium: newFood.calcium,
        calories: newFood.calories,
      };
      toggleAddMeal();
      return [...currentMeals, newMeal];
    });

    // Update the total macronutrients and micronutrients state
    setTotalProtein((prevProtein) => prevProtein + newFood.protein);
    setTotalFat((prevFat) => prevFat + newFood.fat);
    setTotalCarbs((prevCarbs) => prevCarbs + newFood.carbs);
    setTotalCalories((prevCalories) => prevCalories + newFood.calories);
  }

  function removeMeal(mealIndex) {
    setMeals((currentMeals) => {
      // Remove the meal at the specified index
      const updatedMeals = currentMeals.filter(
        (_, index) => index !== mealIndex,
      );

      // Update the total macronutrients and micronutrients by subtracting the meal's macros and micros
      if (currentMeals[mealIndex]) {
        // Ensure the meal exists before trying to access its properties
        setTotalProtein(
          (prevProtein) => prevProtein - currentMeals[mealIndex].protein,
        );
        setTotalFat((prevFat) => prevFat - currentMeals[mealIndex].fat);
        setTotalCarbs((prevCarbs) => prevCarbs - currentMeals[mealIndex].carbs);
        setTotalCalories(
          (prevCalories) => prevCalories - currentMeals[mealIndex].calories,
        );
      }

      // Correct the numbering of the meals after the removal
      return updatedMeals.map((meal, index) => ({
        ...meal,
        title: `Meal ${index + 1}`, // Recalculate the title based on the new index
      }));
    });
  }
  const toggleView = (view) => {
    setProfileVisible(view === "Profile");
    setHomeVisible(view === "Home");
    setJournalVisible(view === "Journal");
    setGymVisible(view === "Gym");

    if (view === "Profile") {
      setMode("Profile");
    } else {
      setMode("Today");
    }
  };

  return (
    <View className="flex-1 justify-center bg-black">
      <Info toggleProfile={() => toggleView("Profile")} mode={mode} />
      {journalVisible && <Journal />}
      {gymVisible && <Gym />}
      {homeVisible && (
        <View className="flex-1 items-center h-full bg-white rounded-[38px]">
          <Macros
            protein={totalProtein}
            carbs={totalCarbs}
            calories={totalCalories}
            fat={totalFat}
          />
          <View className="flex-1 w-full">
            <TouchableOpacity className="flex-row m-6 my-2 h-24 rounded-xl bg-black/5">
              <Text className="m-8 text-xl font-semibold">Meal 1</Text>
              <Text className="m-8 text-xl font-semibold">Macros</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row m-6 my-2 h-24 rounded-xl bg-black/5">
              <Text className="m-8 text-xl font-semibold">Meal 2</Text>
              <Text className="m-8 text-xl font-semibold">Macros</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row m-6 my-2 h-24 rounded-xl bg-black/5">
              <Text className="m-8 text-xl font-semibold">Meal 3</Text>
              <Text className="m-8 text-xl font-semibold">Macros</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <NavBar
        toggleHome={() => toggleView("Home")}
        toggleGym={() => toggleView("Gym")}
        toggleJournal={() => toggleView("Journal")}
      />
    </View>
  );
}
