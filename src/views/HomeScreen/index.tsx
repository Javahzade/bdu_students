import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors } from '../../utils/colors';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textheader}>Mənim işlərim</Text>
        <Image
          style={styles.menu}
          source={require('../../assets/icons/menu.png')}
        />
      </View>
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
});
export default HomeScreen();