import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {userSlice} from '../../redux/slices/userSlice';

export const Home: React.FC = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(userSlice.actions.logOut());
  };
  return (
    <SafeAreaView>
      <Text>Home</Text>
      <Button title="Log Out" onPress={handleLogOut} />
    </SafeAreaView>
  );
};
