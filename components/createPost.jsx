import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";

import { createPostStyles } from "../Screens/styles";

// icons
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export const CreatePost = ({ photo }) => {
  return (
    <View style={createPostStyles.photoBox}>
      <View style={createPostStyles.imgBox}>
        <Image source={{ uri: photo }} style={createPostStyles.image} />
      </View>
      <View style={createPostStyles.boxEdited}>
        <TouchableOpacity>
          <Text style={createPostStyles.editedText}>Редактировать фото</Text>
        </TouchableOpacity>
      </View>

      <TextInput placeholder="Название..."></TextInput>
      <View>
        <TextInput placeholder="Местность..."></TextInput>
        <TouchableOpacity>
          <MaterialCommunityIcons name="google-maps" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
