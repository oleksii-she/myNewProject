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
    <View>
      <View>
        <View>
          <Text>post</Text>
        </View>
        {/* <View style={postStyles.postFooter}>
          <Text>post Footer</Text>
        </View> */}
      </View>
    </View>
  );
};

export default PostsScreen;
