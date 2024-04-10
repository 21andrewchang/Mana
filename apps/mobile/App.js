import { Text, TouchableOpacity, View } from "react-native";
import NavBar from "./src/NavBar";
import Macros from "./src/Macros";
import Meals from "./src/Meals";

export default function App() {
  return (
    <View className="flex-1 justify-center bg-black">
      <View className="flex-row m-8 mt-20 mb-4">
        <View className="flex-1">
          <Text className="text-5xl font-semibold text-white">Today</Text>
        </View>
        <TouchableOpacity className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
          <Text className="text-black">AC</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1 items-center h-full bg-white rounded-[38px]">
        <Macros />
        <Meals />
      </View>
      <NavBar />
    </View>
  );
}
