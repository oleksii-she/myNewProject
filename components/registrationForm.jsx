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
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { authSignUpUser } from "../redux/auth/authOperation";

const initialState = {
  nickName: "",
  email: "",
  password: "",
};

export const RegistrationForm = ({ navigationLogin }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [dataState, setDataState] = useState(initialState);
  const { height, width } = useWindowDimensions();
  const [passHidden, setPassHidden] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  //borderColor
  const [borderColorLogin, setBorderColorLogin] = useState("transparent");
  const [borderColorEmail, setBorderColorEmail] = useState("transparent");
  const [borderColorPass, setBorderColorPass] = useState("transparent");

  const { statusSignUpUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();

    setPassHidden(true);
  };

  const hendlerSubmit = () => {
    if (
      dataState.email === "" ||
      dataState.nickName === "" ||
      dataState.password === ""
    ) {
      setErrorMessage("all fields must be filled");
    }
    setErrorMessage(null);
    setIsShowKeyboard(false);
    Keyboard.dismiss();

    dispatch(authSignUpUser(dataState));

    setDataState(initialState);
  };

  useEffect(() => {
    statusErrorMessage();
  });
  const statusErrorMessage = () => {
    switch (statusSignUpUser) {
      case "Firebase: Error (auth/invalid-email).":
        setErrorMessage("неверный емейл");
        break;
      case "Firebase: Error (auth/email-already-in-use).":
        setErrorMessage("такой емейл уже существует");
        break;
      case "Firebase: Error (auth/network-request-failed).":
        setErrorMessage("Возникли проблемы с интернет сойденением");
        break;
      default:
        break;
    }
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
          {errorMessage && (
            <Text
              style={{
                marginBottom: 5,
                fontSize: 15,
                color: "red",
                textAlign: "center",
              }}
            >
              {errorMessage}
            </Text>
          )}
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
              value={dataState.nickName}
              onSubmitEditing={keyboardHide}
              onChangeText={(value) =>
                setDataState((prevState) => ({ ...prevState, nickName: value }))
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
              onPress={hendlerSubmit}
            >
              <Text style={styles.refistrTextButton}>Регистрация</Text>
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
