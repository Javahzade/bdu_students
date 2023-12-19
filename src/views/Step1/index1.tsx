import React, { useState } from "react";
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";


function Step2(){
    const [text, setText] = useState('');
    return(
        <SafeAreaView>
             <View style={styles.text}>
            <Text style={styles.text1}>Mövzu seçimi</Text>
            <Text style={styles.text2}>1/2</Text>
            
        </View>
         <View>

            <TextInput
        style={styles.input}
        onChangeText={ text => setText(text)}
        value={text}
        placeholder="Müəllim ad və ya soyadı"
        />
        </View>



        </SafeAreaView>



    )
}
export default Step2

const styles = StyleSheet.create({
    area:{
        flex:1,

    },
    text:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        marginTop:16,
        marginBottom:24,
        marginHorizontal:20,
    },

    text1:{
        color:"#234D70",
        fontSize:24,
    },
    text2:{
        color:"#909EB0"
    },




    
})