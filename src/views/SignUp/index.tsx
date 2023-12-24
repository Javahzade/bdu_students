import React, {useState} from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AppHeader} from '../../components/AppHeader';
import {AppInput} from '../../components/AppInput';
import {AppButton} from '../../components/AppButton';
import {AppColors} from '../../utils/colors';
import EyeIcon from '../../assets/icons/eye.svg';
import EyeClosedIcon from '../../assets/icons/eye-closed.svg';
import {useCreateUserMutation} from '../../redux/queries/auth';
import {useNavigation} from '@react-navigation/native';
import {showMessage} from 'react-native-flash-message';

export const SignUp = () => {
  const navigation = useNavigation();
  const [emailValue, setEmailValue] = useState('');
  const [userNameValue, setUserNameValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [groupNumberValue, setGroupNumberValue] = useState('');
  const [phoneNumberValue, setPhoneNumberValue] = useState('+994');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [apiCreateUser] = useCreateUserMutation();

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
    apiCreateUser({
      firstName: userNameValue.split(' ')[0],
      lastName: userNameValue.split(' ')[1],
      groupNumber: groupNumberValue,
      email: emailValue,
      password: passwordValue,
      phoneNumber: phoneNumberValue,
    })
      .unwrap()
      .then(() => {
        navigation.goBack();
        showMessage({
          message: 'İstifadəçi uğurla yaradıldı!',
          type: 'success',
        });
      })
      .catch(err =>
        showMessage({
          message: `Sistem xətası ${err.status}!`,
          type: 'danger',
        }),
      );
  };

  const togglePasswordVisibility = (): void => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title="Qeydiyyat" canGoBack />
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
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
            secureTextEntry={!passwordVisible}
            accessory={
              <TouchableOpacity onPress={togglePasswordVisibility}>
                {passwordVisible ? (
                  <EyeClosedIcon
                    width={24}
                    height={24}
                    stroke={AppColors.grayDark}
                  />
                ) : (
                  <EyeIcon width={24} height={24} fill={AppColors.grayDark} />
                )}
              </TouchableOpacity>
            }
            onChangeText={onChangePasswordText}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <AppButton
        label="Qeydiyyatdan keç"
        style={styles.button}
        disabled={
          !(userNameValue && groupNumberValue && emailValue && passwordValue)
        }
        onPress={handleCreateUser}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
    gap: 16,
  },
  keyboard: {
    flex: 1,
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
});
