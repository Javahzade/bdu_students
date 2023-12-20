import React, { useState } from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { Fonts } from "../../utils/fonts";
import { AppInput } from "../../components/AppInput";
import { AppButton } from "../../components/AppButton";
import ChevronRight from "../../SvgIcon/ChevronRight";


function Step2(){
    const [text, setText] = useState('');
    const handleStep2 = (): void => {};
    return(
        <SafeAreaView style={styles.area}>
            <View style={styles.header}>
                <View style={styles.iconText}>
                <ChevronRight/>
                <Text style={styles.text1}>Müəllim seçimi</Text>

                </View>
                <Text style={styles.text2}>2/2</Text>
            </View>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>
            <AppInput
            label='*Mövzu'
            placeholder="Mövzunu yaz"
            style={styles.input}
            onChangeText={ text => setText(text)}
        />
        <AppInput
            label='Əlavə qeyd'
            placeholder="Müəllimə əlavə qeyd yaz"
            style={styles.input1}
            onChangeText={ text => setText(text)}
        />
        </ScrollView>
        <AppButton
        label='Müraciət et'
        style={styles.button}
        onPress={handleStep2}
        
        />
        </SafeAreaView>

    )
}
export default Step2

const styles = StyleSheet.create({
    area:{
        flex:1

    },
    scroll: {
        flex: 1,
    },
    scrollContent: {
        flexGrow: 1,
    },
    iconText:{
        flexDirection:'row',
        alignItems:'center'

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
     input1:{
        marginTop:26,
     },
     button:{
        marginHorizontal: 20,
        marginBottom: 16
    },
    
})