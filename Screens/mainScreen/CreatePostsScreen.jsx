import { View, Text } from "react-native";
import CameraComponent from "../../components/camera";
import { styles } from "./../styles";
import { useState } from "react";
import { CreatePost } from "../../components/createPost";
const CreatePostsScreen = () => {
  const [photo, setPhoto] = useState(null);

  return (
    <View style={styles.container}>
      {photo ? (
        <CreatePost photo={photo} />
      ) : (
        <CameraComponent setPhoto={setPhoto} />
      )}
    </View>
  );
};

export default CreatePostsScreen;
