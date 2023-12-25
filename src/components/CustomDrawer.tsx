import {DrawerContentScrollView} from '@react-navigation/drawer';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {AppColors} from '../utils/colors';
import {Fonts} from '../utils/fonts';
import SignOut from '../assets/icons/sign-out.svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {userSlice} from '../redux/slices/userSlice';

const CustomDrawer: React.FC = props => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(userSlice.actions.logOut());
  };
  return (
    <SafeAreaView edges={['bottom']} style={styles.container}>
      <DrawerContentScrollView>
        <View style={styles.bduLogo}>
          <Image
            style={styles.bduLogoImage}
            source={require('../assets/images/bdu-logo.png')}
          />
        </View>
        <TouchableOpacity onPress={handleLogOut}>
          <View style={styles.signOut}>
            <SignOut width={24} height={24} />
            <Text style={styles.signOutText}>Çıxış</Text>
          </View>
        </TouchableOpacity>
      </DrawerContentScrollView>
      <View style={styles.footer}>
        <Image
          style={styles.devEducationLogo}
          source={require('../assets/images/dev-education-logo.png')}
        />
        <Text style={styles.codeForFuture}>#codeforfuture</Text>
      </View>
    </SafeAreaView>
  );
};
export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  bduLogo: {
    backgroundColor: AppColors.white,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    marginBottom: 24,
  },
  bduLogoImage: {
    width: 150,
    height: 150,
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  codeForFuture: {
    fontSize: 16,
    fontFamily: Fonts.primary.Manrope.SemiBold,
    color: AppColors.blueDark,
    textAlign: 'right',
  },
  devEducationLogo: {
    width: 150,
    height: 21,
    marginBottom: 10,
  },
  signOut: {
    flexDirection: 'row',
    marginHorizontal: 20,
  },
  signOutText: {
    color: AppColors.blueDark,
    fontFamily: Fonts.primary.Manrope.Medium,
    fontSize: 16,
    marginLeft: 10,
  },
});
