import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function NavBar() {
  return (
    <View className="absolute bottom-0 flex-row pb-12 w-full">
      <TouchableOpacity className="justify-center mx-8 w-16 h-16 bg-black rounded-full">
        <Text className="p-4 text-center text-white">Log</Text>
      </TouchableOpacity>
      <TouchableOpacity className="justify-center mx-8 w-16 h-16 bg-black rounded-full">
        <Text className="p-4 text-center text-white">Drink</Text>
      </TouchableOpacity>
      <TouchableOpacity className="justify-center mx-8 w-16 h-16 bg-black rounded-full">
        <Text className="p-4 text-center text-white">Add</Text>
      </TouchableOpacity>
    </View>
  );
}
