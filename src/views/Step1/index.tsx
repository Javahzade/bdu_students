import React, { useState } from 'react'
import {View,Text, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'
import SvgComponent from '../../SvgIcon/ChevronIcon';
import ChevronIcon from '../../SvgIcon/ChevronIcon';



function Step1(){
    const [text, setText] = useState('');
    return(
        <SafeAreaView>

        <View style={styles.text}>
            <Text style={styles.text1}>Müəllim seçimi</Text>
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
        <View style={styles.areaText}>
            <Text style={styles.compText}>
                Tətbiqi riyaziyyat
            </Text>

            <ChevronIcon style={styles.icon}/>
        </View>

        <View style={styles.buttonCont}>
        <TouchableOpacity  style={styles.button}>
                <Text  style={styles.buttonText}>Növbəti</Text>
            </TouchableOpacity>

        </View>




        
        </SafeAreaView>
    )


    
}

export default Step1

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
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 13,
        borderRadius:8,
        borderColor:"#909EB0"
      },
      icon:{
        

      },
      compText:{
        color:"#234D70",
      },
      buttonCont: {
        justifyContent:"flex-end"
        
        
        
    },
    button:{
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 13,
        borderRadius:8,
        backgroundColor: '#1A5680',
        alignItems: 'center',

    },
    buttonText:{
        color:"white",
    },
    areaText:{

        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        marginTop:16,
        marginBottom:24,
        marginHorizontal:20,
    }
      


})