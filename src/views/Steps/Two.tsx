import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Fonts} from '../../utils/fonts';
import {AppInput} from '../../components/AppInput';
import {AppButton} from '../../components/AppButton';
import {AppHeader} from '../../components/AppHeader';
import {useSendApplicationMutation} from '../../redux/queries/user';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {useRoute} from '@react-navigation/native';

export const StepTwo: React.FC = () => {
  const route = useRoute();
  const [theme, setTheme] = useState('');
  const [subject, setSubject] = useState('');
  const {id} = useSelector((state: RootState) => state.user);
  const [apiSendApplication] = useSendApplicationMutation();

  const handleSendApplication = (): void => {
    apiSendApplication({
      studentId: id,
      teacherId: route.params.id,
      workTheme: theme,
      coveringLetter: subject,
    }).then(res => console.log(res));
  };
  return (
    <SafeAreaView edges={['bottom']} style={styles.area}>
      <AppHeader
        title="Müəllim seçimi"
        canGoBack
        rightAccessory={<Text style={styles.text2}>2/2</Text>}
      />
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}>
        <AppInput
          label="*Mövzu"
          placeholder="Mövzunu yaz"
          onChangeText={text => setTheme(text)}
        />
        <AppInput
          label="Əlavə qeyd"
          placeholder="Müəllimə əlavə qeyd yaz"
          style={styles.input1}
          // multiline
          // numberOfLines={4}
          onChangeText={text => setSubject(text)}
        />
      </ScrollView>
      <AppButton
        label="Müraciət et"
        style={styles.button}
        // disabled={!theme}
        onPress={handleSendApplication}
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
    paddingHorizontal: 20,
    gap: 16,
  },
  iconText: {
    flexDirection: 'row',
    alignItems: 'center',
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
    color: '#909EB0',
    fontFamily: Fonts.primary.Manrope.SemiBold,
  },
  input1: {},
  button: {
    marginHorizontal: 20,
    marginVertical: 16,
  },
});
