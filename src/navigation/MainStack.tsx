import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Home} from '../views/Home';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';
import {useUserInfoQuery} from '../redux/queries/user';

const Stack = createStackNavigator();

export const MainStackNavigator = () => {
  const {id} = useSelector((state: RootState) => state.user);
  const {data} = useUserInfoQuery(id);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};
