import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
  useWindowDimensions,
} from "react-native";

import { styles } from "../Screens/styles";
import React, { useState } from "react";

const initialState = {
  email: "",
  password: "",
};

export const RegistrationForm = ({ navigationLogin }) => {
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
          ...styles.regBox,
          maxHeight: isShowKeyboard ? 290 : null,
          paddingBottom: height <= 420 ? 8 : 45,
        }}
      >
        <View style={styles.imgBox}>
          <Image
            source={require("../assets/image/avatar.png")}
            style={styles.avatar}
          />
        </View>
        <View style={styles.form}>
          <Text style={styles.title}>Войти</Text>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Логин"
              onFocus={() => setIsShowKeyboard(true)}
              value={dataState.name}
              onSubmitEditing={keyboardHide}
              onChangeText={(value) =>
                setDataState((prevState) => ({ ...prevState, name: value }))
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Адрес электронной почты"
              onFocus={() => setIsShowKeyboard(true)}
              onSubmitEditing={keyboardHide}
              value={dataState.email}
              onChangeText={(value) =>
                setDataState((prevState) => ({
                  ...prevState,
                  email: value,
                }))
              }
            />
            <TextInput
              style={styles.input}
              placeholder="Пароль"
              secureTextEntry={true}
              onFocus={() => setIsShowKeyboard(true)}
              value={dataState.password}
              onSubmitEditing={keyboardHide}
              onChangeText={(value) =>
                setDataState((prevState) => ({
                  ...prevState,
                  password: value,
                }))
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
              onPress={navigationLogin}
            >
              <Text
                style={{
                  ...styles.buttonLoginText,
                }}
              >
                Уже есть аккаунт? Войти
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
