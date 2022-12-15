import React, { useCallback, useState } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { View, Text, Button } from "react-native";

import CameraComponent from "../../components/camera";
import { styles } from "./../styles";

import { CreatePost } from "../../components/createPost";

const CreatePostsScreen = ({ navigation }) => {
  const [photoData, setPhotoData] = useState(null);

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
    setPhotoData(null);
  };

  const publicationData = (data) => {
    navigation.navigate("Home");
    deletePhoto();
  };

  return (
    <View style={styles.container} onLayout={onFontsLoaded}>
      {photoData ? (
        <CreatePost
          photoData={photoData}
          deletePhoto={deletePhoto}
          publicationData={publicationData}
        />
      ) : (
        <CameraComponent setPhotoData={setPhotoData} />
      )}
    </View>
  );
};

export default CreatePostsScreen;
