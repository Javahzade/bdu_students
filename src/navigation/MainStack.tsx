import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {DrawerNavigator} from './Drawer';
import {StepOne} from '../views/Steps/One';
import {StepTwo} from '../views/Steps/Two';
import {Filters} from '../views/Steps/Filters';
import TaskDetailScreen from '../views/TaskDetailScreen';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="StepOne" component={StepOne} />
        <Stack.Screen name="StepTwo" component={StepTwo} />
        <Stack.Screen name="Filters" component={Filters} />
      </Stack.Group>
      <Stack.Screen name="TaskDetailScreen" component={TaskDetailScreen} />
    </Stack.Navigator>
  );
};
