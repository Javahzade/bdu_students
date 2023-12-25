import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {AppColors} from '../utils/colors';
import {Fonts} from '../utils/fonts';

interface Props {
  label: string;
  loading?: boolean;
  style?: ViewStyle;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
  onPress: () => void;
}

export const AppButton: React.FC<Props> = ({
  label,
  loading,
  variant = 'primary',
  style,
  disabled,
  onPress,
}) => {
  const backgroundColor =
    variant === 'primary'
      ? AppColors.blue
      : variant === 'danger'
      ? AppColors.danger
      : 'transparent';
  const color = variant === 'secondary' ? AppColors.blueDark : AppColors.white;
  const opacity = disabled ? 0.5 : 1;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[styles.button, {backgroundColor, opacity}, style]}
      onPress={onPress}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <Text style={[styles.label, {color}]}>{label}</Text>
      )}
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
