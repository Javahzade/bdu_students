import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthStackNavigator} from './AuthStack';
import {MainStackNavigator} from './MainStack';

export const Root: React.FC = () => {
  const isSigned = false;
  return (
    <NavigationContainer>
      {isSigned ? <MainStackNavigator /> : <AuthStackNavigator />}
    </NavigationContainer>
  );
};
