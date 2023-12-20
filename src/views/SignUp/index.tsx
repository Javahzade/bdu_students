import React, {useState} from 'react';
import {StyleSheet, ScrollView, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppHeader} from '../../components/AppHeader';
import {AppInput} from '../../components/AppInput';
import {AppButton} from '../../components/AppButton';
import {Colors} from '../../utils/colors';
import EyeIcon from '../../assets/icons/eye.svg';
import EyeClosedIcon from '../../assets/icons/eye-closed.svg';
import {Api} from '../../utils/api';
import {err} from 'react-native-svg';

export const SignUp = () => {
  const [emailValue, setEmailValue] = useState('');
  const [userNameValue, setUserNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [groupNumberValue, setGroupNumberValue] = useState('');
  const [phoneNumberValue, setPhoneNumberValue] = useState('+994');
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onChangeUserNameText = (text: string): void => {
    setUserNameValue(text);
  };

  const onChangeGroupNumberText = (text: string): void => {
    setGroupNumberValue(text);
  };

  const onChangePhoneNumberText = (text: string): void => {
    setPhoneNumberValue(text);
  };

  const onChangeEmailText = (text: string): void => {
    setEmailValue(text);
  };

  const onChangePasswordText = (text: string): void => {
    setPasswordValue(text);
  };

  const handleCreateUser = async (): Promise<void> => {
    const responseBody = JSON.stringify({
      fullName: userNameValue,
      groupNumber: groupNumberValue,
      email: emailValue,
      password: passwordValue,
      phoneNumber: phoneNumberValue,
    });
    try {
      const response = await fetch(Api.baseUrl + Api.createStudent, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: responseBody,
      });
      const reponseJson = response.json();
    } catch (error) {
      console.log(err);
    }
  };

  const togglePasswordVisibility = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Qeydiyyat" canGoBack />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}>
        <AppInput
          label="*Ad və Soyad"
          placeholder="Tələbə adı və soyadı"
          onChangeText={onChangeUserNameText}
        />
        <AppInput
          label="*Qrup №"
          placeholder="Təhsil aldığın qrupun nömrəsi"
          onChangeText={onChangeGroupNumberText}
        />
        <AppInput
          label="Mobil nömrə"
          value={phoneNumberValue}
          keyboardType="phone-pad"
          onChangeText={onChangePhoneNumberText}
        />
        <AppInput
          label="*E-poçt"
          placeholder="example@mail.com"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={onChangeEmailText}
        />
        <AppInput
          label="*Şifrə"
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
      </ScrollView>
      <AppButton
        label="Qeydiyyatdan keç"
        style={styles.button}
        onPress={handleCreateUser}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    gap: 16,
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
