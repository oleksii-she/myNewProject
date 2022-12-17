import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { View, TouchableWithoutFeedback, Button } from "react-native";
const AuthStack = createNativeStackNavigator();
const MainTab = createBottomTabNavigator();

//athorization
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";

// main screen

import PostsScreen from "./Screens/mainScreen/PostsScreen";
import CreatePostsScreen from "./Screens/mainScreen/CreatePostsScreen";
import ProfileScreen from "./Screens/mainScreen/ProfileScreen";

//svg
import Profile from "././assets/image/iconMain/profile.svg";

import Publications from "././assets/image/iconMain/publications.svg";

import { ButtonsCreatePublication } from "./components/buttonsCreate";

import { AntDesign } from "@expo/vector-icons";

import { styles } from "./Screens/styles";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <AuthStack.Screen
          name="Registr"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
      </AuthStack.Navigator>
    );
  }
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        // headerLeftContainerStyle: { paddingRight: 16 },
      }}
    >
      <MainTab.Screen
        options={{
          headerShown: false,

          headerTitleAlign: "center",
          headerRightContainerStyle: { paddingRight: 15 },
          tabBarIcon: ({ focused, size, color }) => (
            <Publications name="postage-stamp" size={size} color={color} />
          ),
        }}
        name="Posts"
        component={PostsScreen}
      />

      <MainTab.Screen
        name="Create"
        options={{
          headerTitleAlign: "center",
          headerTitle: "Создать публикацию",
          // headerShown: false,

          // headerLeft: ({ focused, size, color }) => (
          //   <AntDesign name="arrowleft" size={24} color={color} />
          // ),
          // tabBarStyle: { display: "none" },

          tabBarIcon: ({ focused, size, color }) => (
            <ButtonsCreatePublication
              name="postage-stamp"
              size={size}
              color={color}
              onPress={() => navigate("Posts")}
            />
          ),
        }}
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        name="Profile"
        options={{
          headerShown: false,

          tabBarIcon: ({ focused, size, color }) => (
            <Profile name="postage-stamp" size={size} color={color} />
          ),
        }}
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};
