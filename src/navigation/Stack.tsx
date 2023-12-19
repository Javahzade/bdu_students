import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Welcome} from '../views/Welcome';
import {SignIn} from '../views/SignIn';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="SignIn" component={SignIn} />
    </Stack.Navigator>
  );
};
