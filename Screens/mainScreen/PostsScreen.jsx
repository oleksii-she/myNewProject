import {
  ImageBackground,
  View,
  Text,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";
import { styles, postStyles } from "../styles";

import { Posts } from "../../components/posts";
const PostsScreen = ({ route }) => {
  return (
    <View>
      <Posts />
    </View>
  );
};

export default PostsScreen;
