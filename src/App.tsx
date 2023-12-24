import React from 'react';
import {Root} from './navigation/Root';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/es/integration/react';
import {persistor, store} from './redux/store';
import FlashMessage from 'react-native-flash-message';

export const App: React.FC = () => {
  return (
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <SafeAreaProvider style={styles.area}>
          <StatusBar
            translucent
            barStyle="dark-content"
            backgroundColor="transparent"
          />
          <Root />
          <FlashMessage
            position="top"
            statusBarHeight={StatusBar.currentHeight}
          />
        </SafeAreaProvider>
      </Provider>
    </PersistGate>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
});
