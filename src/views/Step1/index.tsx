import React, { useState } from 'react'
import {View,Text, StyleSheet, TextInput, TouchableOpacity, ScrollView} from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import SliderIcon from '../../assets/icons/sliders.svg';
import ChevronIcon from '../../SvgIcon/ChevronIcon';
import { AppInput } from '../../components/AppInput';
import { AppButton } from '../../components/AppButton';
import { Colors } from '../../utils/colors';
import { Fonts } from '../../utils/fonts';
import { useNavigation } from '@react-navigation/native';
import Squary from '../../SvgIcon/Squary';



function Step1(){
    const [text, setText] = useState('');
    const handleStep1 = (): void => {};
    const navigation=useNavigation()
    const gotoFilter =()=>{
        navigation.navigate('Filter')
    }
    return(
        <SafeAreaView style={styles.area}>
            <View style={styles.header}>
                <Text style={styles.text1}>Müəllim seçimi</Text>
                <Text style={styles.text2}>1/2</Text>
            </View>
        <AppInput
            label=''
            placeholder="Müəllim ad və ya soyadı"
            style={styles.input}
            accessory={<TouchableOpacity onPress={gotoFilter}>
                <SliderIcon width={24} height={24} fill={Colors.grayDark} />
            </TouchableOpacity>}
            onChangeText={ text => setText(text)}
        />
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

        <View style={styles.areaText}>
            <Text style={styles.compText}>
                Tətbiqi riyaziyyat
            </Text>

            <ChevronIcon/>
        </View>
        <View style={styles.body}>
            <Text style={styles.bodyText}> Aygün Kazımova</Text>
            <Squary/>
            <Text style={styles.bodyText1}>İnformatika</Text>
            <Squary/>
            <Text style={styles.bodyText}> Niyaməddin Musayev</Text>
            <Squary/>
            <Text style={styles.bodyText1}>Kompüter mühəndisliyi</Text>
            <Text  style={styles.bodyText}> Faiq Ağayev</Text>
            <Squary/>
            <Text style={styles.bodyText1}>Kompüter elmləri</Text>
        </View>
        <View style={styles.areaText}>
            <Text style={styles.compText}>
                Fizika-Kimya
            </Text>

            <ChevronIcon />
        </View>
        <View style={styles.body}>
            <Text style={styles.bodyText}> Aygün Kazımova</Text>
            <Squary/>
            <Text style={styles.bodyText1}>İnformatika</Text>
            <Text style={styles.bodyText}> Niyaməddin Musayev</Text>
            <Squary/>
            <Text style={styles.bodyText1}>Kompüter mühəndisliyi</Text>
            <Text  style={styles.bodyText}> Faiq Ağayev</Text>
            <Squary/>
            <Text style={styles.bodyText1}>Kompüter elmləri</Text>
        </View>
        <View style={styles.areaText}>
            <Text style={styles.compText}>
                Biologiya
            </Text>

            <ChevronIcon />
        </View>
      
        
        </ScrollView>

        
        <AppButton
        label='Növbəti'
        style={styles.button}
        onPress={handleStep1}
        
        />




        
        </SafeAreaView>
    )


    
}

export default Step1

const styles = StyleSheet.create({
    area:{
        flex:1,
    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    },
    header:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        marginTop:16,
        marginBottom:24,
        paddingHorizontal:20,
    },
    text1:{
        color:"#234D70",
        fontSize:24,
        fontFamily: Fonts.primary.Manrope.SemiBold,
        
    },
    text2:{
        color:"#909EB0",
        fontFamily: Fonts.primary.Manrope.SemiBold,
    },
    input: {
       marginHorizontal: 16
    },
    compText:{
        color:"#234D70",
        fontFamily: Fonts.primary.Manrope.SemiBold,
        fontSize:16,
        
    },
    buttonCont: {
        justifyContent:"flex-end"
    },
    button:{
        marginHorizontal: 20,
        marginBottom: 16
    },
    buttonText:{
        color:"white",
        fontFamily: Fonts.primary.Manrope.SemiBold,
    },
    areaText:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        marginTop:16,
        marginBottom:24,
        marginHorizontal:20,
    },
    bodyText:{
        fontSize:14,
        fontFamily: Fonts.primary.Manrope.SemiBold,
        color:"#234D70",
        // marginTop:11,
    },
    bodyText1:{
        fontSize:12,
        fontFamily: Fonts.primary.Manrope.SemiBold,
    },
    body:{
        marginLeft:30
    },

})