import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthStackNavigator} from './AuthStack';
import {MainStackNavigator} from './MainStack';
import {useSelector} from 'react-redux';
import {RootState} from '../redux/store';

export const Root: React.FC = () => {
  const {token, id} = useSelector((state: RootState) => state.user);

  console.log(token);
  return (
    <NavigationContainer>
      {token ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};
