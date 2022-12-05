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
const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={postStyles.postBox}>
        <View>
          <Text>post</Text>
        </View>
        <View style={postStyles.postFooter}>
          <Text>post Footer</Text>
        </View>
      </View>
    </View>
  );
};

export default PostsScreen;
