import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  useWindowDimensions,
} from "react-native";
import { useState } from "react";
import { createPostStyles, styles } from "../Screens/styles";
import { useSelector } from "react-redux";
// icons
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../fireBase/config";
import { collection, addDoc } from "firebase/firestore";

import { v4 as uuidv4 } from "uuid";

//data
const initialState = {
  name: "",
  locationName: "",
};

export const CreatePost = ({ photoData, deletePhoto, publicationData }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [dataState, setDataState] = useState(initialState);
  const { height, width } = useWindowDimensions();
  const { userId, nickName } = useSelector((state) => state.auth);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  const imageWidth = () => {
    let imegeWidth = width - 16;
    return imegeWidth;
  };

  const submit = () => {
    const data = {
      ...dataState,
      ...photoData,
    };
    if (data.name !== "" || data.location !== "") {
      publicationData(data);
      uploadPostToServer();
    }
    setDataState(initialState);
  };

  const heightImageIsShowKeyboard = () => {
    if (height <= 690) {
      return 50;
    } else {
      return 200;
    }
  };

  const uploadPhotoToserver = async () => {
    try {
      // поміщаю знімок в фетч, отримую респ із ним

      const response = await fetch(photoData.uri);

      // з респонса роблю блоб файл
      const file = await response.blob();

      // унікальне айді
      const postId = uuidv4();

      // викликаю стореж
      const storage = getStorage();

      // створюю референс
      const reference = "images/";

      // шлях до сторежа, референс, імя файла, унікальний айді
      const storageRef = ref(
        storage,
        reference + `${file.data.name}-${postId}`
      );

      //завантажую файл, вказую референс сторежа, передаю файл блоб
      await uploadBytes(storageRef, file);

      //беру шлях до звантаженого файлу
      const imgRef = await getDownloadURL(storageRef);

      return imgRef;
    } catch (error) {
      console.log(error);
    }
  };

  const uploadPostToServer = async () => {
    /// беру фото з сторeжa
    const photo = await uploadPhotoToserver();

    try {
      // додаю документ. створюю колекцію
      const docRef = await addDoc(collection(db, "posts"), {
        photo: photo,
        name: dataState.name,
        location: {
          name: dataState.locationName,
          cords: {
            latitude: photoData.latitude,
            longitude: photoData.longitude,
          },
        },
        userId,
        nickName,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
        setIsShowKeyboard(false);
      }}
    >
      <View style={createPostStyles.photoBox}>
        <View>
          <View style={createPostStyles.imgBox}>
            <Image
              source={{ uri: photoData.uri }}
              style={{
                ...createPostStyles.image,
                height: isShowKeyboard ? heightImageIsShowKeyboard() : 240,
                width: imageWidth(),
              }}
            />
          </View>
          <View style={createPostStyles.boxEdited}>
            <TouchableOpacity>
              <Text style={createPostStyles.editedText}>
                Редактировать фото
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TextInput
          placeholder="Название..."
          style={createPostStyles.createInput}
          onFocus={() => setIsShowKeyboard(true)}
          onSubmitEditing={keyboardHide}
          value={dataState.name}
          onChangeText={(value) =>
            setDataState((prevState) => ({
              ...prevState,
              name: value,
            }))
          }
        />
        <View style={createPostStyles.boxMapIcon}>
          <TextInput
            placeholder="Местность..."
            style={{
              ...createPostStyles.createInput,
              paddingLeft: 18,
              marginBottom: 32,
            }}
            onFocus={() => setIsShowKeyboard(true)}
            onSubmitEditing={keyboardHide}
            value={dataState.locationName}
            onChangeText={(value) =>
              setDataState((prevState) => ({
                ...prevState,
                locationName: value,
              }))
            }
          />
          <TouchableOpacity style={createPostStyles.iconMap}>
            <Feather name="map-pin" size={16} color="#BDBDBD" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={createPostStyles.buttonPuplication}
          onPress={submit}
        >
          <Text style={styles.refistrTextButton}>Опубликовать</Text>
        </TouchableOpacity>
        <View style={createPostStyles.buttonBixDelete}>
          <TouchableOpacity
            style={createPostStyles.buttonDellete}
            onPress={deletePhoto}
          >
            <AntDesign name="delete" size={16} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
