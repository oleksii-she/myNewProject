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
import { styles, loginStyle } from "../styles";
import React, { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

const LoginScreen = ({ navigation }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [dataState, setDataState] = useState(initialState);
  const { height, width } = useWindowDimensions();

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setDataState(initialState);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
      }}
    >
      <View
        style={{
          ...loginStyle.loginBox,
          maxHeight: isShowKeyboard ? 300 : null,
          paddingBottom: height <= 420 ? 15 : 111,
        }}
      >
        <View style={styles.form}>
          <Text style={styles.title}>Войти</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Адрес электронной почты"
              onFocus={() => setIsShowKeyboard(true)}
              value={dataState.email}
              onChangeText={(value) =>
                setDataState((prevState) => ({ ...prevState, email: value }))
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry={true}
              onFocus={() => setIsShowKeyboard(true)}
              value={dataState.password}
              onSubmitEditing={Keyboard.dismiss}
              onChangeText={(value) =>
                setDataState((prevState) => ({ ...prevState, password: value }))
              }
            />

            <TouchableOpacity
              style={styles.buttonRegistr}
              onPress={keyboardHide}
            >
              <Text style={styles.refistrTextButton}>Войти</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonLogin}
              onPress={() => navigation.navigate("Registr")}
            >
              <Text
                style={{
                  ...styles.buttonLoginText,
                }}
              >
                Нет аккаунта? Зарегистрироваться
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;
