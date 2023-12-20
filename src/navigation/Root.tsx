import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AuthStackNavigator} from './AuthStack';

export const Root: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthStackNavigator />
    </NavigationContainer>
  );
};
