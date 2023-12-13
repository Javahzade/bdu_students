import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StackNavigator } from './Stack';

export const Root: React.FC = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}