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
  const [passHidden, setPassHidden] = useState(true);
  //borderColor
  const [borderColorLogin, setBorderColorLogin] = useState("transparent");
  const [borderColorEmail, setBorderColorEmail] = useState("transparent");
  const [borderColorPass, setBorderColorPass] = useState("transparent");
  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setDataState(initialState);
    setPassHidden(true);
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setIsShowKeyboard(false);
        Keyboard.dismiss();
        setPassHidden(true);
      }}
    >
      <View
        style={{
          ...styles.regBox,
          maxHeight: isShowKeyboard ? 360 : null,
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
          <Text style={styles.title}>Регистрация</Text>
          <View>
            <TextInput
              style={{
                ...styles.input,
                borderColor: borderColorLogin,
              }}
              placeholder="Логин"
              onFocus={() => {
                setIsShowKeyboard(true);
                setBorderColorLogin("#FF6C00");
              }}
              onBlur={() => {
                setPassHidden(true);
                setBorderColorLogin("transparent");
              }}
              value={dataState.name}
              onSubmitEditing={keyboardHide}
              onChangeText={(value) =>
                setDataState((prevState) => ({ ...prevState, name: value }))
              }
            />
            <TextInput
              style={{
                ...styles.input,
                borderColor: borderColorEmail,
              }}
              placeholder="Адрес электронной почты"
              onFocus={() => {
                setIsShowKeyboard(true);
                setBorderColorEmail("#FF6C00");
              }}
              onBlur={() => {
                setPassHidden(true);
                setBorderColorEmail("transparent");
              }}
              onSubmitEditing={keyboardHide}
              value={dataState.email}
              onChangeText={(value) =>
                setDataState((prevState) => ({
                  ...prevState,
                  email: value,
                }))
              }
            />

            <View style={styles.inputPassBox}>
              <TextInput
                style={{
                  ...styles.input,
                  borderColor: borderColorPass,
                }}
                placeholder="Пароль"
                secureTextEntry={passHidden}
                autoFocus={true}
                onFocus={() => {
                  setIsShowKeyboard(true);
                  setBorderColorPass("#FF6C00");
                }}
                onBlur={() => {
                  setPassHidden(true);
                  setBorderColorPass("transparent");
                }}
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
                style={styles.hiddenPass}
                onPress={() => setPassHidden(false)}
              >
                <Text style={styles.textPassHidden}>Показать</Text>
              </TouchableOpacity>
            </View>

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
