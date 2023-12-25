import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppColors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import MenuIcon from '../../assets/icons/MenuIcon.svg';
import TaskCard from './components/TaskCard';
import {useGetApplicationQuery, useGetWorkQuery} from '../../redux/queries/user';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {AppButton} from '../../components/AppButton';
import {AppHeader} from '../../components/AppHeader';
import TaskDetailScreen from '../TaskDetailScreen';

export const TaskScreen = ({}) => {
  const navigation = useNavigation();
  const {id, token} = useSelector((state: RootState) => state.user);
  const {data} = useGetApplicationQuery(id, {pollingInterval: 3000});
  const {work} = useGetWorkQuery(id, {
    pollingInterval: 3000,
    selectFromResult: ({data}) => {
      return {
        work: data || []
      };
    }
  });
  // console.log("id==>>", id, "token=>", token);
  console.log("myWork", work);

  // console.log(data);
  const gotoWorkName = () => {
    navigation.navigate('TaskDetailScreen');
  };

  const onPressTask = (taskId: number) => {};

  const rejectApplication = () => {
    console.log('rejectApplication');
  };

  const handleNewApplication = React.useCallback(() => {
    navigation.navigate('StepOne');
  }, [navigation]);

  const renderContent = React.useMemo(() => {
    if (!data) {
      return (
        <View style={styles.info}>
          <Text style={styles.infoText}>
            Hal-hazırda, heç bir müraciətiniz yoxdur.{'\n'}Diplom seçimi üçün
          </Text>
          <AppButton label="Müraciət et" onPress={handleNewApplication} />
        </View>
      );
    }
    if (work.length) {
      return work.map((item: any) => <TaskDetailScreen key={item.id} {...item} />);
    }
    return <TaskCard {...data} />;
  }, [data, handleNewApplication, work]);

  return (
    <SafeAreaView style={styles.container}>
      <AppHeader
        title="Mənim işlərim"
        rightAccessory={
          <TouchableOpacity
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <MenuIcon />
          </TouchableOpacity>
        }
      />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}>
        {renderContent}
      </ScrollView>
      {/* <View style={{flexShrink: 1, gap: 5}}>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TouchableOpacity
          onPress={rejectApplication}
          style={{
            justifyContent: 'center',
            width: '100%',
            height: 50,
            backgroundColor: AppColors.danger,
            borderRadius: 10,
          }}>
          <Text
            style={{
              fontWeight: '700',
              textAlign: 'center',
              color: AppColors.white,
            }}>
            {'Müraciəti ləğv et'}
          </Text>
        </TouchableOpacity>
      </View> */}

      {/* <View style={styles.body}>
        <Text style={styles.bodyText}>Müəllim:</Text>
        <Text style={styles.bodyText1}>Aqil M.Quliyev</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Mövzu:</Text>
        <Text style={styles.bodyText1}>Elektrik naqillərinin işləmə prinsipi</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.bodyText}>Tapşırıqlar</Text>
      </View>

      <ScrollView>
        <FlatList
          data={mockData}
          keyExtractor={item => item.id}
          renderItem={({item}) => {
            return <TaskItem onPressTask={() => onPressTask(item.id)} taskTitle={item.taskTitle} taskStatus={item.taskStatus} statusDate={item.statusDate} />;
          }}
        />
      </ScrollView> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.white,
  },
  header: {
    height: 60,
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  textheader: {
    fontSize: 26,
    color: AppColors.blueDark,
  },
  body: {
    marginTop: 12,
  },
  body2: {
    height: 60,
    width: '100%',
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: 14,
    fontWeight: '300',
    fontFamily: Fonts.primary.Manrope.SemiBold,
    color: AppColors.grayLight,
  },
  bodyText1: {
    fontSize: 14,
    fontWeight: '600',
    fontFamily: Fonts.primary.Manrope.SemiBold,
    color: AppColors.blueDark,
  },
  text: {
    marginTop: 15,
    color: AppColors.blueDark,
    fontSize: 17,
  },
  review: {
    color: AppColors.yellow,
    fontSize: 17,
  },
  accept: {
    color: 'green',
    fontSize: 17,
  },
  refuse: {
    color: AppColors.danger,
    fontSize: 17,
  },
  textdate: {
    color: AppColors.grayLight,
  },
  infoText: {
    textAlign: 'center',
    fontSize: 16,
    fontFamily: Fonts.primary.Manrope.Medium,
    color: AppColors.blueLight,
  },
  info: {
    gap: 24,
    flex: 1,
    justifyContent: 'center',
  },
});
export default TaskScreen;
