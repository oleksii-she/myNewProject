// import React, { useCallback, useState, useEffect } from "react";
// import * as SplashScreen from "expo-splash-screen";
// import { useFonts } from "expo-font";

// import {
//   ImageBackground,
//   View,
//   Text,
//   Image,
//   TextInput,
//   Button,
//   TouchableOpacity,
//   Platform,
//   KeyboardAvoidingView,
//   Keyboard,
//   TouchableWithoutFeedback,
//   useWindowDimensions,
// } from "react-native";
// import { styles, postStyles } from "../styles";

// import { Posts } from "../../components/post/posts";

// const PostsScreen = ({ route }) => {
//   const [fontsLoaded] = useFonts({
//     "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Medium": require("../../assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Bold": require("../../assets/fonts/Roboto-Bold.ttf"),
//   });
//   const [post, setPost] = useState([]);

//   useEffect(() => {
//     if (route.params) {
//       setPost((prevState) => [...prevState, route.params]);
//     }
//   }, [route.params]);

//   const onFontsLoaded = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <View style={styles.container} onLayout={onFontsLoaded}>
//       <Posts data={post} />
//     </View>
//   );
// };

// export default PostsScreen;

import { createStackNavigator } from "@react-navigation/stack";
import Home from "../nestedScreens/Home";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator screenOptions={{ headerShown: false }}>
      <NestedScreen.Screen name="Home" component={Home} />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
