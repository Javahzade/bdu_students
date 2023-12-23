import React from 'react';
import {StyleSheet, Text, TouchableOpacity, ViewStyle} from 'react-native';
import {Colors} from '../utils/colors';
import {Fonts} from '../utils/fonts';

interface Props {
  label: string;
  style?: ViewStyle;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  onPress: () => void;
}

export const AppButton: React.FC<Props> = ({
  label,
  variant = 'primary',
  style,
  disabled,
  onPress,
}) => {
  const backgroundColor =
    variant === 'primary'
      ? Colors.blue
      : variant === 'danger'
      ? Colors.danger
      : 'transparent';
  const color = variant === 'secondary' ? Colors.blueDark : Colors.white;
  const opacity = disabled ? 0.5 : 1;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, {backgroundColor, opacity}, style]}
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
