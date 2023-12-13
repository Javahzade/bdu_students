import React from 'react';
import { Root } from './navigation/Root';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export const App: React.FC = () => {
  return (
    <SafeAreaProvider style={{flex:1}}>
      <Root />
    </SafeAreaProvider>
  )
}