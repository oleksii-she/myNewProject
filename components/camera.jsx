import * as MediaLibrary from "expo-media-library";
import * as Location from "expo-location";
import { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Camera, CameraType } from "expo-camera";

// icon

import { Entypo } from "@expo/vector-icons";

///styles
import { CameraStyle } from "../Screens/styles";

const CameraComponent = ({ setPhoto }) => {
  //доступ до камери
  const [hasCameraPremission, setHasCameraPremission] = useState(null);

  //тип камери
  const [type, setType] = useState(Camera.Constants.Type.back);
  //Режим спалаху камери
  const [flash, setFlash] = useState(Camera.Constants.FlashMode.off);
  //реф який беремо с камери
  const cameraRef = useRef(null);
  //location
  const [errorMsg, setErrorMsg] = useState(null);

  // useEffect camera
  useEffect(() => {
    (async () => {
      MediaLibrary.requestPermissionsAsync();
      //   Просить користувача надати дозвіл на доступ до камери
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPremission(cameraStatus.status === "granted");
    })();
  }, []);

  // useEffect location
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }
    })();
  }, []);

  // функція яка робить знімок
  const takePicture = async () => {
    if (cameraRef) {
      try {
        const data = await cameraRef.current.takePictureAsync();
        let location = await Location.getCurrentPositionAsync({});
        console.log("====================================");
        console.log(location);
        console.log("====================================");
        setPhoto(data.uri);

        // зебераю фото с камери передаю в в скрін створення фото картки
      } catch (error) {
        console.log("cameraRef", error);
      }
    } else {
      return;
    }
  };

  if (hasCameraPremission === false) {
    return <Text>no acces to camera</Text>;
  }
  return (
    <View style={CameraStyle.createBox}>
      <Camera
        type={type}
        flashMode={flash}
        ref={cameraRef}
        style={CameraStyle.camera}
      >
        <TouchableOpacity
          style={CameraStyle.buttonCamera}
          onPress={takePicture}
        >
          <Entypo name="camera" size={24} color="#BDBDBD" />
        </TouchableOpacity>
      </Camera>
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
// //               onPress={toggleCameraType}r
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
