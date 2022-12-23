import React, { useCallback, useState, useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  FlatList,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import { styles, profileStyles, createPostStyles } from "./../styles";
import { postStyles } from "../../components/post/postStyles";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

import { authSignOutUser } from "../../redux/auth/authOperation";

import { useDispatch, useSelector } from "react-redux";

import { db } from "../../fireBase/config";

//icon
import { EvilIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const ProfileScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
  });

  const [userPosts, setUserPosts] = useState([]);

  const { userId, nickName } = useSelector((state) => state.auth);

  const { height, width } = useWindowDimensions();

  const dispatch = useDispatch();

  useEffect(() => {
    const getUsserPost = async () => {
      try {
        const q = query(
          collection(db, "posts"),
          where("userId", "==", `${userId}`)
        );

        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          const posts = { id: doc.id, ...doc.data() };

          setUserPosts((prevPost) => {
            const newComment = { ...doc.data() };
            return [newComment, ...prevPost];
          });
        });
      } catch (error) {
        console.log("error", error);
      }
    };
    getUsserPost();
  }, []);

  const onFontsLoaded = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  const heightProfileBorder = () => {
    const totalHeight = height;
    const numeric = 80;
    const result = (totalHeight / 100) * numeric;

    return result;
  };

  const imageWidth = () => {
    let imegeWidth = width - 16;
    return imegeWidth;
  };

  return (
    <View style={styles.container} onLayout={onFontsLoaded}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/image/PhotoBG.png")}
      >
        <View
          style={{
            ...profileStyles.profileBox,
            height: heightProfileBorder(),
          }}
        >
          <TouchableOpacity>
            <Feather
              name="log-out"
              size={20}
              color="#BDBDBD"
              onPress={() => dispatch(authSignOutUser())}
              style={{ textAlign: "right" }}
            />
          </TouchableOpacity>
          <Text style={profileStyles.title}>{nickName}</Text>
          <SafeAreaView style={styles.container}>
            <FlatList
              data={userPosts}
              renderItem={({ item }) => (
                <View style={postStyles.postConteiner}>
                  <View style={{ ...createPostStyles.imgBox, marginBottom: 8 }}>
                    <Image
                      source={{ uri: item.photo }}
                      style={{ ...createPostStyles.image, width: imageWidth() }}
                    />
                  </View>
                  <Text style={postStyles.title}>{item.name}</Text>

                  <View style={postStyles.descriptionBox}>
                    {/* <View style={postStyles.descriptionItem}>
                      <TouchableOpacity
                      // onPress={() =>
                      //   navigation.navigate("Comments", {
                      //     postId: item.id,
                      //     uri: item.photo,
                      //   })
                      // }
                      >
                        <EvilIcons name="comment" size={24} color="black" />
                      </TouchableOpacity>
                      <Text>0</Text>
                    </View> */}
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </SafeAreaView>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfileScreen;

// <View style={postStyles.descriptionItem}>
//   <TouchableOpacity
//   // onPress={() => navigation.navigate("Map", item)}
//   >
//     <Feather name="map-pin" size={16} color="#BDBDBD" />
//   </TouchableOpacity>
//   {/* <Text style={postStyles.descriptionText}>
//     {item.locationName}
//   </Text> */}
// </View>
// </View>
