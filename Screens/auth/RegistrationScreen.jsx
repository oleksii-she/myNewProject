import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { ImageBackground, View } from "react-native";
import { RegistrationForm } from "../../components/registrationForm";
import { styles } from "../styles";

const RegistrationScreen = ({ navigation }) => {
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

  const navigationLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container} onLayout={onFontsLoaded}>
      <ImageBackground
        style={styles.image}
        source={require("../../assets/image/PhotoBG.png")}
      >
        <RegistrationForm navigationLogin={navigationLogin} />
      </ImageBackground>
    </View>
  );
};

export default RegistrationScreen;
