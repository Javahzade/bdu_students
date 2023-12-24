import React, {useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SliderIcon from '../../assets/icons/sliders.svg';
import {AppInput} from '../../components/AppInput';
import {AppButton} from '../../components/AppButton';
import {AppColors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';
import {useNavigation} from '@react-navigation/native';
import {AppHeader} from '../../components/AppHeader';
import {AppAccordion} from '../../components/AppAccordion';
import {useFacultyQuery, useTeachersQuery} from '../../redux/queries/teacher';

export const StepOne: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const {searchResult} = useTeachersQuery(undefined, {
    selectFromResult: ({data}) => {
      const uniqueFaculties = Array.from(
        new Set(data?.map(item => JSON.stringify(item.faculty))),
      ).map(item => JSON.parse(item));
      const newData = uniqueFaculties.map(item => ({
        ...item,
        teachers: data.filter(elem => elem.faculty.id === item.id),
      }));

      return {
        searchResult: newData,
      };
    },
  });

  console.log(searchResult);

  const handleStep1 = (): void => {};

  const navigation = useNavigation();

  const gotoFilter = () => {
    navigation.navigate('Filter');
  };

  const onChangeSearchText = text => {
    setSearchValue(text);
  };

  const renderItem = React.useCallback(({item, index}) => {
    return (
      <AppAccordion title={item.name}>
        {item.teachers.map(elem => (
          <Text key={elem.id}>{elem.firstName}</Text>
        ))}
      </AppAccordion>
    );
  }, []);

  const keyExtractor = React.useCallback(item => `${item.id}`, []);

  return (
    <SafeAreaView edges={['bottom']} style={styles.area}>
      <AppHeader
        title="Müəllim seçimi"
        rightAccessory={<Text style={styles.text2}>1/2</Text>}
      />
      <AppInput
        placeholder="Müəllim ad və ya soyadı"
        style={styles.input}
        accessory={
          <TouchableOpacity onPress={gotoFilter}>
            <SliderIcon width={24} height={24} fill={AppColors.grayDark} />
          </TouchableOpacity>
        }
        onChangeText={onChangeSearchText}
      />
      <FlatList
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        data={searchResult}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <AppButton label="Növbəti" style={styles.button} onPress={handleStep1} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 8,
  },
  header: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  text1: {
    color: '#234D70',
    fontSize: 24,
    fontFamily: Fonts.primary.Manrope.SemiBold,
  },
  text2: {
    color: AppColors.blueLight,
    fontFamily: Fonts.primary.Manrope.SemiBold,
  },
  input: {
    marginHorizontal: 20,
  },
  compText: {
    color: '#234D70',
    fontFamily: Fonts.primary.Manrope.SemiBold,
    fontSize: 16,
  },
  buttonCont: {
    justifyContent: 'flex-end',
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 16,
  },
  buttonText: {
    color: 'white',
    fontFamily: Fonts.primary.Manrope.SemiBold,
  },
  areaText: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
    marginHorizontal: 20,
  },
  bodyText: {
    fontSize: 14,
    fontFamily: Fonts.primary.Manrope.SemiBold,
    color: '#234D70',
    // marginTop:11,
  },
  bodyText1: {
    fontSize: 12,
    fontFamily: Fonts.primary.Manrope.SemiBold,
  },
  body: {
    marginLeft: 30,
  },
});
