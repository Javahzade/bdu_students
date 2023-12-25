import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {userSlice} from '../../redux/slices/userSlice';
import {AppHeader} from '../../components/AppHeader';
import MenuIcon from '../../assets/icons/menu.svg';
import {AppColors} from '../../utils/colors';
import {DrawerActions, useNavigation} from '@react-navigation/native';

export const Home: React.FC = () => {
  const navigation = useNavigation();

  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <SafeAreaView style={styles.area}>
      <AppHeader
        title="Mənim işlərim"
        rightAccessory={
          <TouchableOpacity onPress={toggleDrawer}>
            <MenuIcon width={24} height={24} stroke={AppColors.blueDark} />
          </TouchableOpacity>
        }
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
});
