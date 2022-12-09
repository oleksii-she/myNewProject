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

export const Posts = ({ data }) => {
  const { height, width } = useWindowDimensions();

  const imageWidth = () => {
    let imegeWidth = width - 16;
    return imegeWidth;
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={postStyles.postConteiner}>
          <View style={{ ...createPostStyles.imgBox, marginBottom: 8 }}>
            <Image
              source={{ uri: item.img }}
              style={{ ...createPostStyles.image, width: imageWidth() }}
            />
          </View>
          <Text style={postStyles.title}>{item.name}</Text>
          <View style={postStyles.descriptionBox}>
            <View style={postStyles.descriptionItem}>
              <TouchableOpacity>
                <EvilIcons name="comment" size={24} color="black" />
              </TouchableOpacity>
              <Text>0</Text>
            </View>
            <View style={postStyles.descriptionItem}>
              <TouchableOpacity>
                <Feather name="map-pin" size={16} color="#BDBDBD" />
              </TouchableOpacity>
              <Text style={postStyles.descriptionText}>{item.location}</Text>
            </View>
          </View>
        </View>
      )}
    />
  );
};

// return data ? (
//   <View style={postStyles.postConteiner}>
//     <View style={{ ...createPostStyles.imgBox, marginBottom: 8 }}>
//       <Image
//         source={{ uri: data.img }}
//         style={{ ...createPostStyles.image, width: imageWidth() }}
//       />
//     </View>
//     <Text style={postStyles.title}>{data.name}</Text>
//     <View style={postStyles.descriptionBox}>
//       <View style={postStyles.descriptionItem}>
//         <TouchableOpacity>
//           <EvilIcons name="comment" size={24} color="black" />
//         </TouchableOpacity>
//         <Text>0</Text>
//       </View>
//       <View style={postStyles.descriptionItem}>
//         <TouchableOpacity>
//           <Feather name="map-pin" size={16} color="#BDBDBD" />
//         </TouchableOpacity>
//         <Text style={postStyles.descriptionText}>{data.location}</Text>
//       </View>
//     </View>
//   </View>
// ) : (
//   <View>
//     <Text>Ooops</Text>
//   </View>
// );
