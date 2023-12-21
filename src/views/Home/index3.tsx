import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, StyleSheet, Text, View} from 'react-native';
import {Colors} from '../../utils/colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Home3 = () => {
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
        <View style={styles.mainone}>
            <Text style={styles.text}>Müəllim: {'\n'}<Text style={styles.weight}>Aqil M.Quliyev</Text></Text>
            <Text style={styles.text}>Status: {'\n'}<Text style={styles.weight}>İmtina edildi</Text></Text>
            </View>
            <View style={styles.maintwo}>
            <Text style={styles.text}>Mövzu: {'\n'}<Text style={styles.weight}>Elektrik naqillərin işləmə prinsipi</Text></Text>
            </View>
        </View>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttontext}>Yeni müraciət</Text>
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
    height:110,
    marginTop:24,
    alignItems:"center",
    alignSelf:"center",
    backgroundColor:"pink",
    borderRadius:10,
  },
  mainone:{
    flexDirection:"row",
    width:"90%",
    justifyContent:"space-between",
    marginTop:16
  },
  maintwo:{
    flexDirection:"row",
    width:"90%",
    justifyContent:"space-between",
    marginTop:10,
  },
  text:{
    color: Colors.blueLight,
  },
  weight:{
    fontWeight:"600",
    color: Colors.blueDark
  },
  textmain:{
    fontSize:20,
    color: Colors.blueLight,
    lineHeight:27,
    textAlign:"center",
  },
  button:{
    backgroundColor: Colors.blueDark,
    width:"90%",
    padding:15,
    alignItems:"center",
    alignSelf:"center",
    borderRadius:10,
    marginTop:16,
    color: Colors.white,
  },
  buttontext:{
    color: Colors.white,
    fontSize:20,
    fontWeight:"400",
  }
});