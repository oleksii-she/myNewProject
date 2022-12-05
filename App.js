import React, { useState, useCallback } from "react";
// import { View, ImageBackground } from "react-native";
import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
// import { styles } from "./Screens/styles";
// import { useFonts } from "expo-font";
// import * as SplashScreen from "expo-splash-screen";

// SplashScreen.preventAutoHideAsync();

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const AuthStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack.Navigator>
        <AuthStack.Screen
          name="Login"
          component={LoginScreen}
          options={{ title: "Welcome" }}
        />
        <AuthStack.Screen
          name="Registr"
          component={RegistrationScreen}
          options={{ title: "Welcome" }}
        />
      </AuthStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// const App = () => {
//   const [fontsLoaded] = useFonts({
//     "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
//     "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
//     "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),
//   });

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync();
//     }
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null;
//   }

//   return (
//     <View style={styles.container} onLayout={onLayoutRootView}>
//       <ImageBackground
//         source={require("./Screens/images/PhotoBG.png")}
//         style={styles.image}
//       >
//         {/* <RegistrationScreen /> */}
//         <LoginScreen />
//       </ImageBackground>
//     </View>
//   );
// };
