import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {Colors} from '../utils/colors';
import {Fonts} from '../utils/fonts';
import BackIcon from '../assets/icons/chevron-right.svg';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
  canGoBack?: boolean;
  rightAccessory?: React.ReactElement;
}

export const AppHeader: React.FC<Props> = ({
  title,
  canGoBack,
  rightAccessory,
}) => {
  const navigation = useNavigation();
  const handleGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        {canGoBack && (
          <TouchableOpacity onPress={handleGoBack}>
            <BackIcon width={24} height={24} stroke={Colors.blueDark} />
          </TouchableOpacity>
        )}
        <Text style={styles.title}>{title}</Text>
      </View>
      {rightAccessory && rightAccessory}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: Colors.blueDark,
    fontFamily: Fonts.primary.Manrope.SemiBold,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
