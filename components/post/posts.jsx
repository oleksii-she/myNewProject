import {
  View,
  Text,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  FlatList,
} from "react-native";

//styles
import { postStyles } from "./postStyles";
import { createPostStyles, styles } from "../../Screens/styles";
//icon
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

export const Posts = ({ data, navigation }) => {
  const { height, width } = useWindowDimensions();

  const imageWidth = () => {
    let imegeWidth = width - 16;
    return imegeWidth;
  };

  console.log("====================================");
  console.log(data);
  console.log("====================================");
  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={postStyles.postConteiner}>
          <View style={{ ...createPostStyles.imgBox, marginBottom: 8 }}>
            <Image
              source={{ uri: item.photo }}
              style={{ ...createPostStyles.image, width: imageWidth() }}
            />
          </View>
          <Text style={postStyles.title}>{item.name}</Text>
          <View style={postStyles.descriptionBox}>
            <View style={postStyles.descriptionItem}>
              <TouchableOpacity onPress={() => navigation.navigate("Comments")}>
                <EvilIcons name="comment" size={24} color="black" />
              </TouchableOpacity>
              <Text>0</Text>
            </View>
            <View style={postStyles.descriptionItem}>
              <TouchableOpacity
                onPress={() => navigation.navigate("Map", item)}
              >
                <Feather name="map-pin" size={16} color="#BDBDBD" />
              </TouchableOpacity>
              <Text style={postStyles.descriptionText}>
                {item.locationName}
              </Text>
            </View>
          </View>
        </View>
      )}
    />
  );
};
