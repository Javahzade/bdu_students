import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../views/Home';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {useUserInfoQuery} from '../redux/queries/user';
import {DrawerNavigator} from './Drawer';
import {Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  const navigation = useNavigation();
  const {id} = useSelector((state: RootState) => state.user);
  const {data} = useUserInfoQuery({id});

  console.log(data);

  useEffect(() => {
    if (!data?.teacher) {
      navigation.navigate('Step1');
    }
  }, [data, navigation]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Drawer" component={DrawerNavigator} />
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Step1" component={() => <Text>1</Text>} />
      </Stack.Group>
    </Stack.Navigator>
  );
};
