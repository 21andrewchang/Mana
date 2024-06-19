import { View } from "react-native";
import Profile from "./src/Profile";
import NavBar from "./src/NavBar";
import Macros from "./src/Macros";
import Meals from "./src/Meals";
import { useState } from "react";
import AddMeal from "./src/AddMeal";
import Info from "./src/Info";
import Drink from "./src/Drink";
import Journal from "./src/Journal";

//TODO Generate a meal to complete leftover calorie/macro limit?
//TODO Variable Macros
export default function App() {
  const [totalProtein, setTotalProtein] = useState(0);
  const [totalCalories, setTotalCalories] = useState(0);
  const [totalCarbs, setTotalCarbs] = useState(0);
  const [totalFat, setTotalFat] = useState(0);

  const [addMealVisible, setAddMealVisible] = useState(false);
  const [profileVisible, setProfileVisible] = useState(false);
  const [journalVisible, setJournalVisible] = useState(false);
  const [drinkVisible, setDrinkVisible] = useState(false);
  const [mode, setMode] = useState("Today");
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
  function toggleDrink() {
    setDrinkVisible(!drinkVisible);
    if (!drinkVisible) {
      setMode("Today's Mix");
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

  function toggleProfile() {
    setProfileVisible(!profileVisible);
    if (!profileVisible) {
      setMode("Profile");
    } else {
      setMode("Today");
    }
  }
  function toggleJournal() {
    setJournalVisible(!journalVisible);
    if (!journalVisible) {
      setMode("Journal");
    } else {
      setMode("Today");
    }
  }

  return (
    <View className="flex-1 justify-center bg-black">
      <Info toggleProfile={toggleProfile} mode={mode} />
      <View className="flex-1 items-center h-full bg-white rounded-[38px]">
        <Macros
          protein={totalProtein}
          carbs={totalCarbs}
          calories={totalCalories}
          fat={totalFat}
        />
        <Meals removeMeal={removeMeal} meals={meals} />
      </View>
      <NavBar
        toggleAddMeal={toggleAddMeal}
        toggleDrink={toggleDrink}
        toggleJournal={toggleJournal}
      />
      <AddMeal
        addMealVisible={addMealVisible}
        addMeal={addMeal}
        toggleAddMeal={toggleAddMeal}
      />
      <Profile profileVisible={profileVisible} toggleProfile={toggleProfile} />
      <Drink drinkVisible={drinkVisible} toggleDrink={toggleDrink} />
      <Journal journalVisible={journalVisible} toggleJournal={toggleJournal} />
    </View>
  );
}
