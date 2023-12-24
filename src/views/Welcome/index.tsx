import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {AppColors} from '../../utils/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Fonts} from '../../utils/fonts';
import {AppButton} from '../../components/AppButton';

export const Welcome = () => {
  const navigation = useNavigation();

  const handleGetStarted = () => {
    navigation.navigate('SignIn');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          style={styles.bduLogo}
          source={require('../../assets/images/bdu-logo.png')}
        />
        <View style={styles.helpers}>
          <Image
            style={styles.devEducation}
            source={require('../../assets/images/dev-education-logo.png')}
          />
          <Text style={styles.codeForFuture}>#codeforfuture</Text>
        </View>
        <View style={styles.separator}>
          <View style={styles.line} />
          <Text style={styles.separatorText}>dəstəyi ilə</Text>
          <View style={styles.line} />
        </View>
        <View style={styles.textArea}>
          <Text style={styles.title}>Məzun sistem</Text>
          <Text style={styles.description}>
            Bakı Dövlət Universitetinin yekun il{'\n'}diplom qiymətləndirilməsi
            sistemi
          </Text>
        </View>
      </View>
      <AppButton
        label="Başlayın"
        style={styles.button}
        onPress={handleGetStarted}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textArea: {
    paddingHorizontal: 30,
    gap: 16,
  },
  line: {
    backgroundColor: AppColors.blueLight,
    height: 1,
    flex: 1,
  },
  button: {
    marginHorizontal: 20,
    marginBottom: 16,
  },
  devEducation: {
    height: 22,
    width: 150,
    resizeMode: 'contain',
  },
  codeForFuture: {
    fontSize: 16,
    fontFamily: Fonts.primary.Manrope.SemiBold,
    color: AppColors.blueDark,
    textAlign: 'right',
  },
  helpers: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 16,
  },
  bduLogo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  separator: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  separatorText: {
    paddingHorizontal: 16,
    fontSize: 14,
    color: AppColors.blueLight,
    fontFamily: Fonts.primary.Manrope.Medium,
  },
  title: {
    textAlign: 'center',
    fontSize: 32,
    color: AppColors.blueDark,
    fontFamily: Fonts.primary.Manrope.SemiBold,
  },
  description: {
    fontSize: 14,
    color: AppColors.blueLight,
    fontFamily: Fonts.primary.Manrope.Medium,
    textAlign: 'center',
  },
});
