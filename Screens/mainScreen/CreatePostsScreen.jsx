import React, { useCallback, useState, Button } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { View, Text } from "react-native";

import CameraComponent from "../../components/camera";
import { styles } from "./../styles";

import { CreatePost } from "../../components/createPost";
import { useNavigation } from "@react-navigation/native";

const CreatePostsScreen = ({ navigation }) => {
  const [photo, setPhoto] = useState(null);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
  });

  const onFontsLoaded = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const deletePhoto = () => {
    setPhoto(null);
  };

  const publicationData = (data) => {
    navigation.navigate("Home", data);
    deletePhoto();
  };

  return (
    <View style={styles.container} onLayout={onFontsLoaded}>
      {photo ? (
        <CreatePost
          photo={photo}
          deletePhoto={deletePhoto}
          publicationData={publicationData}
        />
      ) : (
        <CameraComponent setPhoto={setPhoto} />
      )}
    </View>
  );
};

export default CreatePostsScreen;
