import React from 'react';
import {Root} from './navigation/Root';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './modules/store';

export const App: React.FC = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider style={styles.area}>
        <Root />
      </SafeAreaProvider>
    </Provider>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
});
