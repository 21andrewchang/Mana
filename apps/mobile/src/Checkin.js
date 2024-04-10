import {
  Image,
  ScrollView,
  Modal,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Checkin({ checkinVisible, toggleCheckin }) {
  const cancel = require("../assets/CancelButton.png");

  return (
    <Modal
      presentationStyle="overFullScreen"
      transparent={true}
      className="z-10 m-0"
      animationType="slide"
      visible={checkinVisible}
    >
      <View className="flex-1 justify-center">
        <View className="mt-24 h-12"></View>
        <View className="flex-1 h-full bg-white rounded-[38px]">
          <Text className="m-8 text-3xl font-semibold">How do you feel?</Text>
          <TouchableOpacity className="justify-center m-6 my-2 h-20 rounded-xl bg-black/5">
            <Text className="mx-4 text-2xl font-medium text-black/70">
              👍 Good
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="justify-center m-6 my-2 h-20 rounded-xl bg-black/5">
            <Text className="mx-4 text-2xl font-medium text-black/70">
              🥱 Tired
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="justify-center m-6 my-2 h-20 rounded-xl bg-black/5">
            <Text className="mx-4 text-2xl font-medium text-black/70">
              🤕 Headache
            </Text>
          </TouchableOpacity>
          <TouchableOpacity className="justify-center m-6 my-2 h-20 rounded-xl bg-black/5">
            <Text className="mx-4 text-2xl font-medium text-black/70">
              🤒 Sick
            </Text>
          </TouchableOpacity>
          <View className="flex absolute bottom-0 z-50 items-end pb-10 w-full">
            <TouchableOpacity
              onPress={toggleCheckin}
              className="justify-center mx-8 w-16 h-16 bg-black rounded-full"
            >
              <Image source={cancel} className="flex w-16 h-16" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}
