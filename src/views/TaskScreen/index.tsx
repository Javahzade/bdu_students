import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {AppColors} from '../../utils/colors';
import {Fonts} from '../../utils/fonts';
import {ScrollView} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import MenuIcon from "../../assets/icons/MenuIcon.svg";
import TaskItem from './components/TaskItem';
import TaskCard from './components/TaskCard';




export const TaskScreen = ({}) => {
  const navigation = useNavigation();
  const gotoWorkName = () => {
    navigation.navigate('TaskDetailScreen');
  };


  const onPressTask = (taskId: number) => {

  };

  const mockData = [
    {taskTitle: 'Tapşırıq 1', taskStatus: 'Yoxdur', statusDate: '10.11.2022', id: 1},
    {taskTitle: 'Tapşırıq 2', taskStatus: 'Yoxdur', statusDate: '10.11.2022', id: 2},
    {taskTitle: 'Tapşırıq 3', taskStatus: 'Yoxdur', statusDate: '10.11.2022', id: 3},
    {taskTitle: 'Tapşırıq 4', taskStatus: 'Yoxdur', statusDate: '10.11.2022', id: 4},
    {taskTitle: 'Tapşırıq 5', taskStatus: 'Yoxdur', statusDate: '10.11.2022', id: 5},
    {taskTitle: 'Tapşırıq 6', taskStatus: 'Yoxdur', statusDate: '10.11.2022', id: 6},
  ];


  const rejectApplication = () => {
    console.log("rejectApplication");
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.textheader}>Mənim işlərim</Text>
        <TouchableOpacity>
          <MenuIcon />
        </TouchableOpacity>
      </View>
      <View style={{flexShrink: 1}}>
        <TaskCard />
        <TouchableOpacity
          onPress={rejectApplication}
          style={{marginTop: 10, justifyContent: 'center', width: '100%', height: 50, backgroundColor: AppColors.danger, borderRadius: 10}}>
          <Text style={{fontWeight: '700', textAlign: 'center', color: AppColors.white}}>
            {'Müraciəti ləğv et'}
          </Text>
        </TouchableOpacity>
      </View>


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
    paddingHorizontal: 16,
  },
  header: {
    height: 60,
    width: '100%',
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center"
  },
  textheader: {
    fontSize: 26,
    color: AppColors.blueDark
  },
  body: {
    marginTop: 12,
  },
  body2: {
    height: 60,
    width: '100%',
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    alignItems: "center",
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
    color: "green",
    fontSize: 17,
  },
  refuse: {
    color: AppColors.danger,
    fontSize: 17,
  },
  textdate: {
    color: AppColors.grayLight,
  },
});
export default TaskScreen;