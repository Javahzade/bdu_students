import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SignIn} from '../views/SignIn';
import {SignUp} from '../views/SignUp';
import { Welcome } from '../views/Welcome';
import { MyWork } from '../views/MyWork';
import { DrawerNavigator } from './Drawer';

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
      <Stack.Screen  name='DrawerNavigator' component={DrawerNavigator} />
    </Stack.Navigator>
  );
};
