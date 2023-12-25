import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../views/Home';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {useUserInfoQuery} from '../redux/queries/user';
import {DrawerNavigator} from './Drawer';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StepOne} from '../views/Steps/One';
import {StepTwo} from '../views/Steps/Two';
import {Filters} from '../views/Steps/Filters';
import TaskScreen from '../views/TaskScreen';
import TaskDetailScreen from '../views/TaskDetailScreen';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  const navigation = useNavigation();
  const {id} = useSelector((state: RootState) => state.user);
  const {data} = useUserInfoQuery({id});

  useEffect(() => {
    if (!data?.teacher) {
      navigation.navigate('StepOne');
    }
  }, [data, navigation]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="StepOne" component={TaskScreen} />
        <Stack.Screen name="StepTwo" component={StepTwo} />
        <Stack.Screen name="Filters" component={Filters} />
        <Stack.Screen name="TaskScreen" component={TaskScreen} />
        <Stack.Screen name="TaskDetailScreen" component={TaskDetailScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
