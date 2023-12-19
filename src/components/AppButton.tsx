import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {Colors} from '../utils/colors';
import {Fonts} from '../utils/fonts';

interface Props {
  label: string;
  style?: ViewStyle;
  variant?: 'primary' | 'secondary' | 'danger';
  onPress: () => void;
}

export const AppButton: React.FC<Props> = ({
  label,
  variant = 'primary',
  style,
  onPress,
}) => {
  const backgroundColor =
    variant === 'primary'
      ? Colors.blue
      : variant === 'danger'
      ? Colors.danger
      : 'transparent';
  const color = variant === 'secondary' ? Colors.blueDark : Colors.white;

  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor}, style]}
      onPress={onPress}>
      <Text style={[styles.label, {color}]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 44,
    maxHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    fontFamily: Fonts.primary.Manrope.SemiBold,
  },
});
