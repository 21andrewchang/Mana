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
      <View style={styles.top}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>Welcome Back</Text>
          <Text style={{ fontSize: 30, fontWeight: "bold" }}> Andrew</Text>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Text style={{ color: "#FFF" }}>AC</Text>
        </TouchableOpacity>
      </View>
      <Checkin />
      <TouchableOpacity style={styles.drinkButton}>
        <Text style={{ color: "#FFF" }}>Request Drink</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
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
    borderRadius: 10,
    width: 150,
    height: 50,
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
