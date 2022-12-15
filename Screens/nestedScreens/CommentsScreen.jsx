import React, { useCallback, useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import { styles, comentsStyles, createPostStyles } from "../styles";

//firebase
import { collection, getDocs, addDoc } from "firebase/firestore";

import { db } from "../../fireBase/config";

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
  SafeAreaView,
  FlatList,
} from "react-native";

///icon
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";

const CommentsScreen = ({ route }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
  });
  const [comment, setComent] = useState("");
  const [allComent, setAllComent] = useState([]);

  const { nickName } = useSelector((state) => state.auth);
  const { postId, uri } = route.params;

  useEffect(() => {
    getAllComments();
  }, []);

  const cratePost = async () => {
    var DataTime = new Date().toLocaleString();

    if (postId) {
      try {
        const docRef = await addDoc(
          collection(db, "posts", `${postId}/comment`),
          {
            comment,
            nickName,
            time: DataTime,
          }
        );
        setComent("");
      } catch (error) {
        console.error;
      }
    }
  };

  const getAllComments = async () => {
    try {
      const querySnapshot = await getDocs(
        collection(db, "posts", `${postId}/comment`)
      );
      querySnapshot.forEach((doc) => {
        const newComment = { ...doc.data() };
        setAllComent((prevPosts) => {
          const newComment = { ...doc.data() };
          return [...prevPosts, newComment];
        });
      });
    } catch (error) {
      console.log("error", error);
    }
  };

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
      <View style={comentsStyles.box}>
        <SafeAreaView>
          <View>
            <Image source={{ uri: uri }} style={createPostStyles.image} />
          </View>
          <FlatList
            data={allComent}
            renderItem={({ item }) => (
              <View style={comentsStyles.comentBox}>
                <Text>{item.nickName}</Text>
                <Text>{item.comment}</Text>
                <Text>{item.time}</Text>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </SafeAreaView>

        <View style={comentsStyles.inputBox}>
          <TextInput
            placeholder="Комментировать..."
            style={comentsStyles.input}
            value={comment}
            onChangeText={setComent}
          />
          <TouchableOpacity onPress={cratePost}>
            <View style={comentsStyles.btnArrow}>
              <Feather name="arrow-up" size={14} color="#FFFFFF" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CommentsScreen;
