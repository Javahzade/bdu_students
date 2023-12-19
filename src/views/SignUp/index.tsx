import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export const SignUp = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign Up</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'red',
    fontSize: 24,
    marginBottom: 20,
  },
});
