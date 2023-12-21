import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome} from '../views/Welcome';
import {SignIn} from '../views/SignIn';
import {SignUp} from '../views/SignUp';
import {HomeScreen} from '../views/HomeScreen';
const Stack = createStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={HomeScreen} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
