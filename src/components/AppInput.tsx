import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from '../utils/colors';
import {Fonts} from '../utils/fonts';

interface Props extends TextInputProps {
  label: string;
  accessory?: React.ReactElement;
  style?: ViewStyle;
}

export const AppInput: React.FC<Props> = ({
  label,
  accessory,
  style,
  ...props
}) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.inputWrap}>
        <TextInput style={styles.input} {...props} />
        {accessory && accessory}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    color: Colors.grayDark,
    fontSize: 16,
    fontFamily: Fonts.primary.Manrope.Medium,
  },
  inputWrap: {
    borderWidth: 1,
    borderColor: Colors.grayLight,
    borderRadius: 10,
    paddingHorizontal: 20,
    height: 46,
    maxHeight: 46,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: '100%',
  },
});
