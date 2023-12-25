import React from 'react';
import {
  LayoutAnimation,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from 'react-native';
import Animated, {useSharedValue, withTiming} from 'react-native-reanimated';
import {Fonts} from '../utils/fonts';
import {AppColors} from '../utils/colors';
import ChevronIcon from '../assets/icons/chevron-up.svg';

const AnimatedButton = Animated.createAnimatedComponent(TouchableOpacity);

if (
  Platform.OS === 'android' &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

interface Props extends React.PropsWithChildren {
  title: string;
  expanded?: boolean;
}

export const AppAccordion: React.FC<Props> = ({expanded, title, children}) => {
  const iconValue = useSharedValue(expanded ? '0deg' : '180deg');
  const [toggle, setToggle] = React.useState(expanded);

  const toggleExpand = React.useCallback((): void => {
    LayoutAnimation.configureNext({
      duration: 300,
      create: {type: 'linear', property: 'opacity'},
      update: {type: 'spring', springDamping: 0.8},
      delete: {type: 'linear', property: 'opacity'},
    });
    iconValue.value = withTiming(toggle ? '180deg' : '0deg');
    setToggle(!toggle);
  }, [toggle, iconValue]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
        <AnimatedButton
          style={{transform: [{rotate: iconValue}]}}
          onPress={toggleExpand}>
          <ChevronIcon width={24} height={24} stroke={AppColors.blueDark} />
        </AnimatedButton>
      </View>
      <View style={styles.content}>{toggle && children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: AppColors.blueLight,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: AppColors.blueDark,
    fontFamily: Fonts.primary.Manrope.SemiBold,
    fontSize: 16,
  },
  content: {
    paddingTop: 10,
  },
});
