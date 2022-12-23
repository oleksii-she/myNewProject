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
import { styles } from "../styles";

import { Posts } from "../../components/post/posts";

import {
  collection,
  getDocs,
  onSnapshot,
  doc,
  query,
} from "firebase/firestore";
import { db } from "../../fireBase/config";

const Home = ({ route, navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
  });
  const [post, setPost] = useState([]);

  const getAllPost = async () => {
    try {
      const q = query(collection(db, "posts"));

      onSnapshot(q, (data) => {
        setPost([]);
        data.forEach((doc) => {
          setPost((prevState) => {
            const newComments = { ...doc.data(), id: doc.id };

            return [...prevState, newComments];
          });
        });
      });
    } catch (error) {}
  };

  useEffect(() => {
    getAllPost();
  }, []);

  const onFontsLoaded = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onFontsLoaded}>
      <Posts data={post} navigation={navigation} />
    </View>
  );
};

export default Home;
