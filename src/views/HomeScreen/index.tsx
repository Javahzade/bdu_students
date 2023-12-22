import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Colors } from '../../utils/colors';
import { Fonts } from '../../utils/fonts';
import { ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

export const HomeScreen = () => {
  const navigation = useNavigation()
  const gotoWorkName =()=>{
    navigation.navigate('WorkName')
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.textheader}>Mənim işlərim</Text>
        <Image
          source={require('../../assets/icons/menu.png')}
        />
      </View>
      <View style={styles.body}>
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
        <TouchableOpacity onPress={gotoWorkName}>
        <View style={styles.body2}>
          <Text style={styles.text}>1. Tapşırığın adı</Text>
          <Text style={styles.review}>Baxışdadır{'\n'}<Text style={styles.textdate}>23.12.2023</Text></Text>
        </View>
        </TouchableOpacity>
       
        <View style={styles.body2}>
          <Text style={styles.text}>2. Tapşırığın adı</Text>
          <Text style={styles.accept}>Qəbul edildi{'\n'}<Text style={styles.textdate}>23.12.2023</Text></Text>
        </View>
        <View style={styles.body2}>
          <Text style={styles.text}>3. Tapşırığın adı</Text>
          <Text style={styles.refuse}>İmtina edildi{'\n'}<Text style={styles.textdate}>23.12.2023</Text></Text>
        </View>
        <View style={styles.body2}>
          <Text style={styles.text}>4. Tapşırığın adı</Text>
          <Text style={styles.accept}>Qəbul edildi{'\n'}<Text style={styles.textdate}>23.12.2023</Text></Text>
        </View>
        <View style={styles.body2}>
          <Text style={styles.text}>5. Tapşırığın adı</Text>
          <Text style={styles.refuse}>İmtina edildi{'\n'}<Text style={styles.textdate}>23.12.2023</Text></Text>
        </View>
        <View style={styles.body2}>
          <Text style={styles.text}>6. Tapşırığın adı</Text>
          <Text style={styles.review}>Baxışdadır{'\n'}<Text style={styles.textdate}>23.12.2023</Text></Text>
        </View>
        <View style={styles.body2}>
          <Text style={styles.text}>7. Tapşırığın adı</Text>
          <Text style={styles.accept}>Qəbul edildi{'\n'}<Text style={styles.textdate}>23.12.2023</Text></Text>
        </View>
        <View style={styles.body2}>
          <Text style={styles.text}>8. Tapşırığın adı</Text>
          <Text style={styles.refuse}>İmtina edildi{'\n'}<Text style={styles.textdate}>23.12.2023</Text></Text>
        </View>
        <View style={styles.body2}>
          <Text style={styles.text}>9. Tapşırığın adı</Text>
          <Text style={styles.review}>Baxışdadır{'\n'}<Text style={styles.textdate}>23.12.2023</Text></Text>
        </View>
        <View style={styles.body2}>
          <Text style={styles.text}>10. Tapşırığın adı</Text>
          <Text style={styles.accept}>Qəbul edildi{'\n'}<Text style={styles.textdate}>23.12.2023</Text></Text>
        </View>
        <View style={styles.body2}>
          <Text style={styles.text}>11. Tapşırığın adı</Text>
          <Text style={styles.refuse}>İmtina edildi{'\n'}<Text style={styles.textdate}>23.12.2023</Text></Text>
        </View>
       
       </ScrollView>
       

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Colors.white,
      paddingHorizontal:16,
    },
    header:{
      height:60,
      width:'100%',
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
    body:{
      marginTop:12,
    },
    body2:{
      height:60,
      width:'100%',
      marginTop:10,
      flexDirection:"row",
      justifyContent:"space-between",
      alignSelf:"center",
      alignItems:"center",
    },
    bodyText:{
      fontSize:14,
      fontWeight:'300',
      fontFamily: Fonts.primary.Manrope.SemiBold,
      color:Colors.grayLight,
    },
    bodyText1:{
      fontSize:14,
      fontWeight:'600',
      fontFamily: Fonts.primary.Manrope.SemiBold,
      color: Colors.blueDark,
    },
    text:{
      marginTop:15,
      color:Colors.blueDark,
      fontSize:17,
    },
    review:{
      color:Colors.yellow,
      fontSize:17,
    },
    accept:{
      color:"green",
      fontSize:17,
    },
    refuse:{
      color:Colors.danger,
      fontSize:17,
    },
    textdate:{
      color:Colors.grayLight,
    },
});
export default HomeScreen();