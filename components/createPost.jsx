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

// icons
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

//data
const initialState = {
  name: "",
  location: "",
};

export const CreatePost = ({ photo, deletePhoto, publicationData }) => {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [dataState, setDataState] = useState(initialState);
  const { height, width } = useWindowDimensions();

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
      img: `${photo}`,
    };
    if (data.name !== "" || data.location !== "") {
      publicationData(data);
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
              source={{ uri: photo }}
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
            value={dataState.location}
            onChangeText={(value) =>
              setDataState((prevState) => ({
                ...prevState,
                location: value,
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
