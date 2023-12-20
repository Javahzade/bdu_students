import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome} from '../views/Welcome';
import {SignIn} from '../views/SignIn';
import {SignUp} from '../views/SignUp';
import Step1 from '../views/Step1';
import Step2 from '../views/Step1/index1';
import Filter from '../views/Step1/Filter';

const Stack = createStackNavigator();

export const AuthStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
