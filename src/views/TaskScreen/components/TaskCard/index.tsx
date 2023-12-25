import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppColors} from '../../../../utils/colors';
import {TASK_STATUS} from '../../../../enums/application.enum';
import {AppButton} from '../../../../components/AppButton';
import {useNavigation} from '@react-navigation/native';
import {Fonts} from '../../../../utils/fonts';
import {useChangeWorkStateMutation} from '../../../../redux/queries/user';

interface ITaskCard {
  teachersFullName: string;
  workTheme: string;
  applicationState: number;
}

const TaskCard = ({
  teachersFullName,
  workTheme,
  applicationState,
}: ITaskCard) => {
  const navigation = useNavigation();
  const status = TASK_STATUS[applicationState];
  const isConsidered = applicationState === 1;
  const isAccepted = applicationState === 2;
  // const [apiChangeWorkState] = useChangeWorkStateMutation();

  const rejectApplication = () => {
    console.log('rejectApplication');
  };

  const handleApplication = () => {
    if (isConsidered) {
    } else {
      // navigation.navigate('StepOne');
      // apiChangeWorkState({workState: 1});
    }
  };

  return (
    <View style={{gap: 16}}>
      <View
        style={{
          height: 122,
          width: '100%',
          backgroundColor: isAccepted
            ? '#24FF001A'
            : isConsidered
              ? '#FFC0001A'
              : '#FF005D1A',
          borderRadius: 10,
        }}>
        <View
          style={{
            flex: 0.5,
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <View style={{}}>
            <Text style={styles.title}>{'Müəllim:'}</Text>
            <Text style={styles.description}>{teachersFullName}</Text>
          </View>
          <View style={{}}>
            <Text style={styles.title}>{'Status:'}</Text>
            <Text style={styles.description}>{status}</Text>
          </View>
        </View>
        <View style={{flex: 0.5, padding: 10}}>
          <Text style={styles.title}>{'Mövzu:'}</Text>
          <Text style={styles.description}>{workTheme}</Text>
        </View>
      </View>
      {!isAccepted && (
        <AppButton
          label={isConsidered ? 'Müraciəti ləvğ et' : 'Yeni Müraciət'}
          variant={isConsidered ? 'danger' : 'primary'}
          onPress={handleApplication}
        />
      )}
    </View>
  );
};

export default TaskCard;

const styles = StyleSheet.create({
  title: {
    color: AppColors.blueLight,
    fontSize: 14,
    fontFamily: Fonts.primary.Manrope.Medium,
  },
  description: {
    color: AppColors.blueDark,
    fontSize: 14,
    fontFamily: Fonts.primary.Manrope.Medium,
  },
});
