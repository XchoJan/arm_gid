import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import WelcomeComponent from '../screens/AuthScreens/Welcome/WelcomeScreen';
import RegistrationComponent from "../screens/AuthScreens/Registration/RegistrationScreen";
import LoginComponent from "../screens/AuthScreens/Login/LoginScreen";

function WelcomeScreen({navigation}) {
  return <WelcomeComponent navigation={navigation} />;
}
function RegistrationScreen({navigation}) {
  return <RegistrationComponent navigation={navigation} />;
}
function LoginScreen({navigation}) {
  return <LoginComponent navigation={navigation} />;
}

export default function LogOutNavigations() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>

      <Stack.Screen name="Welcome" component={WelcomeScreen} />

      <Stack.Screen name="Login" component={LoginScreen } />

      <Stack.Screen name="Registration" component={RegistrationScreen} />


    </Stack.Navigator>
  );
}
