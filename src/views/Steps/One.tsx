import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, TouchableOpacity, FlatList, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SliderIcon from '../../assets/icons/sliders.svg';
import {AppInput} from '../../components/AppInput';
import {AppButton} from '../../components/AppButton';
import {AppColors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';
import {useNavigation} from '@react-navigation/native';
import {AppHeader} from '../../components/AppHeader';
import {AppAccordion} from '../../components/AppAccordion';
import {useTeachersQuery} from '../../redux/queries/teacher';
import {CheckBox} from '../../components/CheckBox';

interface TeacherProps {
  fullName: string;
  subjects: string[];
}

const TeacherItem: React.FC<TeacherProps> = ({fullName, subjects}) => {
  return (
    <View style={{flex: 1}}>
      <Text>{fullName}</Text>
      <Text style={styles.footerText}>
        {subjects.map(x => x.name).join(', ')}
      </Text>
    </View>
  );
};

export const StepOne: React.FC = () => {
  const navigation = useNavigation();

  const [searchValue, setSearchValue] = useState('');
  const [selectedTeacherId, setSelectedTeacherId] = useState(null);
  const {searchResult} = useTeachersQuery(undefined, {
    selectFromResult: ({data}) => ({searchResult: data}),
  });

  const handleNextStep = (): void => {
    navigation.navigate('StepTwo', {id: selectedTeacherId});
  };

  const gotoFilter = () => {
    navigation.navigate('Filters');
  };

  const onChangeSearchText = text => {
    setSearchValue(text);
  };

  const renderItem = React.useCallback(
    ({item}) => {
      return (
        <AppAccordion title={item.name} expanded>
          {item.teachers.map(elem => (
            <View style={styles.teachers}>
              <TeacherItem
                fullName={elem.firstName + ' ' + elem.lastName}
                subjects={elem.subjects}
              />
              <CheckBox
                checked={elem.id === selectedTeacherId}
                onPress={() => setSelectedTeacherId(elem.id)}
              />
            </View>
          ))}
        </AppAccordion>
      );
    },
    [selectedTeacherId],
  );

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
      <AppButton
        label="Növbəti"
        disabled={!selectedTeacherId}
        style={styles.button}
        onPress={handleNextStep}
      />
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
  },
  bodyText1: {
    fontSize: 12,
    fontFamily: Fonts.primary.Manrope.SemiBold,
  },
  body: {
    marginLeft: 30,
  },
  teachers: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    paddingLeft: 10,
  },
  footerText: {
    fontSize: 12,
    color: AppColors.blueLight,
    fontFamily: Fonts.primary.Manrope.Medium,
    marginTop: 8,
  },
});
