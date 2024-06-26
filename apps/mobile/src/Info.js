import { Image, Modal, Text, TouchableOpacity, View } from "react-native";

export default function Info({ toggleProfile, mode }) {
  const pfp = require("../../mobile/assets/pfp.png");
  return (
    <>
      <View className="flex-row m-6 mt-20 mb-4">
        <View className="flex-1">
          <Text className="text-5xl font-extrabold text-white">{mode}</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            toggleProfile();
          }}
          className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
        >
          <Image
            source={pfp}
            resizeMode="cover"
            className="flex-1 rounded-full aspect-square"
          />
        </TouchableOpacity>
      </View>
    </>
  );
}
