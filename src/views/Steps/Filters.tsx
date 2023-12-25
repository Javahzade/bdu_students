import React, {useState} from 'react';
import {FlatList, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Fonts} from '../../utils/fonts';
import ChevronIcon from '../../SvgIcon/ChevronIcon';
import {AppButton} from '../../components/AppButton';
import Squary from '../../SvgIcon/Squary';
import {AppHeader} from '../../components/AppHeader';
import {useFacultyQuery, useSubjectQuery} from '../../redux/queries/teacher';
import {AppAccordion} from '../../components/AppAccordion';
import {CheckBox} from '../../components/CheckBox';
import {useDispatch} from 'react-redux';
import {userSlice} from '../../redux/slices/userSlice';

export const Filters: React.FC = () => {
  const dispatch = useDispatch();
  const [filters, setFilters] = useState([]);
  const {faculty} = useFacultyQuery(undefined, {
    selectFromResult: ({data}) => ({faculty: data || []}),
  });
  const {subject} = useSubjectQuery(undefined, {
    selectFromResult: ({data}) => ({subject: data || []}),
  });
  const data = [
    {title: 'Fakültələr', data: faculty},
    {title: 'Ixtisaslar', data: subject},
  ];
  const handleFilter = (): void => {
    dispatch(userSlice.actions.setFilters(filters));
  };

  const renderItem = React.useCallback(({item}) => {
    return (
      <AppAccordion title={item.title} expanded>
        {item.data.map(elem => (
          <View key={elem.id} style={styles.content}>
            <Text>{elem.name}</Text>
            <CheckBox
              checked={elem.id === filters.includes(elem.id)}
              onPress={() =>
                setFilters(prev => {
                  if (prev.includes(elem.id)) {
                    return prev.filter(x => x.id !== elem.id);
                  } else {
                    [...prev, elem.id];
                  }
                })
              }
            />
          </View>
        ))}
      </AppAccordion>
    );
  }, []);

  const keyExtractor = React.useCallback(item => `${item.title}`, []);

  return (
    <SafeAreaView edges={['bottom']} style={styles.area1}>
      <AppHeader title="Filter" />
      <FlatList
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <AppButton
        label="Filterlə"
        style={styles.button}
        onPress={handleFilter}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  area1: {
    flex: 1,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
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
  bodyText: {
    fontSize: 14,
    fontFamily: Fonts.primary.Manrope.SemiBold,
    color: '#234D70',
    margin: 11,
  },
  body: {
    marginLeft: 30,
  },
  compText: {
    color: '#234D70',
    fontFamily: Fonts.primary.Manrope.SemiBold,
    fontSize: 16,
  },
  areaText: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 24,
    marginHorizontal: 20,
  },
  button: {
    marginHorizontal: 20,
    marginVertical: 16,
  },
  bodyArea: {
    flexDirection: 'row',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    paddingLeft: 10,
  },
});
