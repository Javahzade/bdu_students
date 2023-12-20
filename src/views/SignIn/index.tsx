import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import EyeIcon from '../../assets/icons/eye.svg';
import EyeClosedIcon from '../../assets/icons/eye-closed.svg';
import {useNavigation} from '@react-navigation/native';
import {AppButton} from '../../components/AppButton';
import {Colors} from '../../utils/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Fonts} from '../../utils/fonts';
import {AppInput} from '../../components/AppInput';

export const SignIn = () => {
  const navigation = useNavigation();
  const [emailValie, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogIn = (): void => {};

  const handleSignUp = (): void => {
    navigation.navigate('SignUp');
  };

  const onChangeEmailText = (text: string): void => {
    setEmailValue(text);
  };
  const onChangePasswordText = (text: string): void => {
    setPasswordValue(text);
  };

  return (
    <SafeAreaView style={styles.area}>
      <View style={styles.header}>
        <Text style={styles.title}>Giriş</Text>
        <Text style={styles.description}>Xoş gəlmisiniz!</Text>
      </View>
      <KeyboardAvoidingView
        style={styles.inputs}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <AppInput
          placeholder="example@mail.com"
          label="E-poçt"
          onChangeText={onChangeEmailText}
        />
        <AppInput
          label="Şifrə"
          placeholder="*********"
          secureTextEntry={passwordVisible}
          accessory={
            <TouchableOpacity onPress={togglePasswordVisibility}>
              {passwordVisible ? (
                <EyeClosedIcon
                  width={24}
                  height={24}
                  stroke={Colors.grayDark}
                />
              ) : (
                <EyeIcon width={24} height={24} fill={Colors.grayDark} />
              )}
            </TouchableOpacity>
          }
          onChangeText={onChangePasswordText}
        />
      </KeyboardAvoidingView>
      <AppButton label="Daxil olun" onPress={handleLogIn} />
      <AppButton
        label="Qeydiyyatdan keç"
        variant="secondary"
        style={styles.button}
        onPress={handleSignUp}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: Colors.white,
    paddingHorizontal: 20,
  },
  header: {
    marginTop: 48,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    color: Colors.blueDark,
    fontFamily: Fonts.primary.Manrope.SemiBold,
  },
  description: {
    marginTop: 16,
    fontSize: 16,
    textAlign: 'center',
    color: Colors.blueLight,
    fontFamily: Fonts.primary.Manrope.SemiBold,
  },
  inputs: {
    flex: 1,
    gap: 16,
    justifyContent: 'center',
  },
  button: {
    marginVertical: 16,
  },
});
