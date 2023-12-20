import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../utils/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Home = () => {
  const navigation = useNavigation();

  return (    
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textheader}>Mənim işlərim</Text>
        <Image
          style={styles.menu}
          source={require('../../assets/icons/menu.png')}
        />
      </View>
        <View style={styles.main}>
          <Text style={styles.textmain}>Hal-hazırda heç bir müraciətiniz yoxdur. {'\n'} Diplom işi üçün</Text>
        </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>Müraciət et</Text>
          </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  header:{
    width:"90%",
    marginTop:10,
    flexDirection:"row",
    justifyContent:"space-between",
    alignSelf:"center",
    alignItems:"center"
  },
  textheader:{
    fontSize:26,
    color: Colors.blueDark
  },
  menu:{
  },
  main:{
    width:"90%",
    marginTop:247,
    alignItems:"center",
    alignSelf:"center"
  },
  textmain:{
    fontSize:20,
    color: Colors.blueLight,
    lineHeight:27,
    textAlign:"center",
  },
  button:{
    backgroundColor: Colors.blue,
    width:"90%",
    padding:15,
    alignItems:"center",
    alignSelf:"center",
    borderRadius:10,
    marginTop:24,
    color: Colors.white,
  },
  buttontext:{
    color: Colors.white,
    fontSize:20,
    fontWeight:"400",
  }
});
