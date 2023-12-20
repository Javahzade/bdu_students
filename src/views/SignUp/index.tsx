import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppHeader } from '../../components/AppHeader';
import { AppInput } from '../../components/AppInput';
import { AppButton } from '../../components/AppButton';

export const SignUp = () => {

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader title='Qeydiyyat' canGoBack/>
      <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
        <AppInput
         label="*Ad və Soyad" 
         placeholder="Tələbə adı və soyadı"
         />
        <AppInput label="*Qrup №" 
        placeholder='Təhsil aldığın qrupun nömrəsi'
        />
        <AppInput label="Mobil nömrə"
        />
        <AppInput label="*E-poçt" 
        placeholder='example@mail.com'
        />
        <AppInput label="*Şifrə" 
        placeholder='*********' 
        />
      </ScrollView>
      <AppButton style={styles.button} label="Qeydiyyatdan keç"  />
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,

  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 20,
  },
  countryCode: {

  },
});
