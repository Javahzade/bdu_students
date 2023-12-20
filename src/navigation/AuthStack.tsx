import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome} from '../views/Welcome';
import {SignIn} from '../views/SignIn';
import {SignUp} from '../views/SignUp';
import { Home } from '../views/Home';
import { Home2 } from '../views/Home/index2';
import { Home3 } from '../views/Home/index3';

const Stack = createStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Home3} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
