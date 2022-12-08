import { View, Text, Image } from "react-native";

export const CreatePost = ({ photo }) => {
  return (
    <View>
      <Image source={{ uri: photo }} />
    </View>
  );
};
