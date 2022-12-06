import { View, TouchableWithoutFeedback, Text } from "react-native";
import { StyleSheet } from "react-native";
import CreatePublication from "../assets/image/iconMain/createPublication.svg";
export const ButtonsCreatePublication = () => {
  return (
    <View>
      <View style={styleButtonsCreate.border}>
        <CreatePublication />
      </View>
    </View>
  );
};

const styleButtonsCreate = StyleSheet.create({
  box: { flex: 1 },
  border: {
    backgroundColor: "#FF6C00",
    width: 70,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  content: { width: 1, height: 13 },
});
