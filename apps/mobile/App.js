import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView className="flex-1 justify-center bg-black">
      <View className="flex-row m-8">
        <View className="flex-1">
          <Text className="text-4xl font-semibold text-white">Today</Text>
        </View>
        <TouchableOpacity>
          <Text style={{ color: "#FFF" }}>AC</Text>
        </TouchableOpacity>
      </View>
      <View className="flex-1 h-full bg-white rounded-3xl">
        <View className="absolute flex-row b-0">
          <TouchableOpacity style={styles.drinkButton}>
            <Text style={{ color: "#FFF" }}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drinkButton}>
            <Text style={{ color: "#FFF" }}>Drink</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.drinkButton}>
            <Text style={{ color: "#FFF" }}>Log</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10,
    paddingHorizontal: 30,
  },
  profileButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    width: 50,
    height: 50,
    backgroundColor: "#020202",
  },
  drinkButton: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    margin: 20,
    width: 80,
    height: 80,
    backgroundColor: "#020202",
  },
});
