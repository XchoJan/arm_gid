import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import HomeComponent from "../screens/MainScreens/Home/HomeScreen";
import SingleChatComponent from "../screens/MainScreens/SingleChat/SingleChatScreen";
import MoreComponent from "../screens/MainScreens/More/MoreScreen";

function HomeScreen({navigation}) {
  return <HomeComponent navigation={navigation} />;
}
function SingleChatScreen({navigation}) {

  return <SingleChatComponent user={user} navigation={navigation} />;
}
function MoreScreen({navigation, route}) {
  const {product} = route?.params
  return <MoreComponent product={product} navigation={navigation} />;
}

export default function MainNavigations() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen name="Home" component={HomeScreen} />

      <Stack.Screen name="SingleChat" component={SingleChatScreen} />

      <Stack.Screen name="More" component={MoreScreen} />


    </Stack.Navigator>
  );
}
