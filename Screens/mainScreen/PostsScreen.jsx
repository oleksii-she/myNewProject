import { createStackNavigator } from "@react-navigation/stack";
import Home from "../nestedScreens/Home";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";
import { Feather } from "@expo/vector-icons";
import { BottomTabBar } from "@react-navigation/bottom-tabs";

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
      <NestedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{ headerTitle: "Комментарии", headerTitleAlign: "center" }}
      />

      <NestedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{ headerTitle: "Карта", headerTitleAlign: "center" }}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
