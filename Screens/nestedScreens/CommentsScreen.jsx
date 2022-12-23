import React, { useCallback, useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import { styles, comentsStyles, createPostStyles } from "../styles";

//firebase
import { db } from "../../fireBase/config";

import {
  collection,
  getDocs,
  addDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  document,
} from "firebase/firestore";

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
  StyleSheet,
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
  const { height, width } = useWindowDimensions();
  const [comment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  const { nickName } = useSelector((state) => state.auth);
  const { postId, uri } = route.params;

  const createPost = async () => {
    var DataTime = new Date().toLocaleString();

    if (postId) {
      try {
        if (comment === "") {
          return;
        }

        const postsDocRef = doc(db, "posts", postId);

        const ref = await addDoc(collection(postsDocRef, "comments"), {
          comment,
          nickName,
          time: DataTime,
        });

        setComment("");
        Keyboard.dismiss();
      } catch (error) {
        console.error;
      }
    }
  };
  useEffect(() => {
    getAllComments();
  }, []);

  const getAllComments = async () => {
    try {
      const docRef = await doc(db, "posts", postId);

      const q = await query(collection(docRef, "comments"));

      onSnapshot(q, (data) => {
        setAllComments([]);
        data.forEach((doc) => {
          setAllComments((prevState) => {
            const newComments = { ...doc.data(), id: doc.id };

            return [...prevState, newComments];
          });
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={comentsStyles.box}>
          <View style={comentsStyles.imgBox}>
            <Image source={{ uri: uri }} style={createPostStyles.image} />
          </View>
          <SafeAreaView style={{ flex: 1 }}>
            <FlatList
              data={allComments}
              renderItem={({ item }) => (
                <View style={comentsStyles.comentBox}>
                  <Text
                    style={{
                      ...comentsStyles.text,
                      fontSize: 10,
                      textAlign: "left",
                    }}
                  >
                    {item.nickName}
                  </Text>
                  <Text style={comentsStyles.text}>{item.comment}</Text>
                  <Text
                    style={{
                      ...comentsStyles.text,
                      fontSize: 10,
                      textAlign: "right",
                    }}
                  >
                    {item.time}
                  </Text>
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
              onChangeText={setComment}
            />
            <TouchableOpacity onPress={createPost} activeOpacity={0.8}>
              <View style={comentsStyles.btnArrow}>
                <Feather name="arrow-up" size={14} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default CommentsScreen;
