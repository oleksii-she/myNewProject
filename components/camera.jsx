import * as MediaLibrary from "expo-media-library";
import { Camera, CameraType } from "expo-camera";
import { useEffect, useRef, useState } from "react";

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

// icon
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

///styles
import { styles, CreatePostStyles } from "../Screens/styles";

const CameraComponent = () => {
  //доступ до камери
  const [hasCameraPremission, setHasCameraPremission] = useState(null);
  //знімок
  const [image, setImage] = useState(null);
  //тип камери
  const [type, setType] = useState(Camera.Constants.Type.back);
  //Режим спалаху камери
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      //   Просить користувача надати дозвіл на доступ до камери
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPremission(cameraStatus.status === "granted");
    })();
  }, []);

  // функція яка робить знімок
  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        console.log("====================================");
        console.log(data);
        console.log("====================================");
        setImage(data.uri);
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (hasCameraPremission === false) {
    return <Text>no acces to camera</Text>;
  }
  return (
    <View style={styles.container}>
      <View style={CreatePostStyles.createBox}>
        <Camera style={CreatePostStyles.camera} type={type} flashMode={flash}>
          <View style={CreatePostStyles.buttonCamera}>
            <TouchableOpacity
              style={CreatePostStyles.camera}
              onPress={takePicture}
            >
              <Entypo name="camera" size={24} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
        </Camera>
        <View style={CreatePostStyles.photoBox}>
          <Image source={{ uri: image }} />
        </View>
      </View>
    </View>
  );
};

export default CameraComponent;

// // return (
// //     <View style={styles.container}>
// //       <View style={CreatePostStyles.createBox}>
// //         <Camera style={CreatePostStyles.camera} type={takePhoto}>
// //           <View style={CreatePostStyles.buttonCamera}>
// //             <TouchableOpacity
// //               style={CreatePostStyles.camera}
// //               onPress={toggleCameraType}
// //             >
// //               <Entypo name="camera" size={24} color="#BDBDBD" />
// //             </TouchableOpacity>
// //           </View>
// //         </Camera>
// //         <View style={CreatePostStyles.photoBox}></View>
// //         <TouchableOpacity
// //           style={CreatePostStyles.buttonPuplication}
// //           onPress={() => {}}
// //         >
// //           <Text style={styles.refistrTextButton}>Опубликовать</Text>
// //         </TouchableOpacity>
// //         <TouchableOpacity
// //           style={CreatePostStyles.buttonDellete}
// //           onPress={() => {}}
// //         >
// //           <AntDesign name="delete" size={16} color="#DADADA" />
// //         </TouchableOpacity>
// //       </View>
// //     </View>
