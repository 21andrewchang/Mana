import { StatusBar } from "expo-status-bar";
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Checkin from "./src/Checkin";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          margin: 20,
        }}
      >
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 40, fontWeight: "bold" }}>Today</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={{ color: "#FFF" }}>AC</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
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
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
