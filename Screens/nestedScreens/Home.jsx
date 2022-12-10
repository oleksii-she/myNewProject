import React, { useCallback, useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

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

import { Posts } from "../../components/post/posts";

const Home = ({ route, navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
  });
  const [post, setPost] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPost((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  const onFontsLoaded = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const navigationMap = () => {
    navigation.navigate("Map");
  };
  const navigationComments = () => {
    navigation.navigate("Comments");
  };

  return (
    <View style={styles.container} onLayout={onFontsLoaded}>
      <Posts
        data={post}
        navigationMap={navigationMap}
        navigationComments={navigationComments}
      />
    </View>
  );
};

export default Home;
