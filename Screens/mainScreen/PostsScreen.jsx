import { createStackNavigator } from "@react-navigation/stack";
import Home from "../nestedScreens/Home";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";
import { Feather } from "@expo/vector-icons";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator
      screenOptions={{
        headerRightContainerStyle: { paddingRight: 15 },
      }}
    >
      <NestedScreen.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: "Публикации",
          headerTitleAlign: "center",
          headerRight: ({ focused, size, color }) => (
            <Feather name="log-out" size={20} color="#BDBDBD" />
          ),
        }}
      />
      <NestedScreen.Screen name="Comments" component={CommentsScreen} />
      <NestedScreen.Screen name="Map" component={MapScreen} />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
