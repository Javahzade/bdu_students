import React from "react";
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import { Fonts } from "../../utils/fonts";
import ChevronIcon from "../../SvgIcon/ChevronIcon";
import { AppButton } from "../../components/AppButton";
import Squary from "../../SvgIcon/Squary";


function Filter(){
    const handleFilter = (): void => {};
    return(
        <SafeAreaView style={styles.area1}>
            <View style={styles.header}>
                <Text style={styles.text1}>Filter</Text>
                
            </View>
        <ScrollView style={styles.scroll} contentContainerStyle={styles.scrollContent}>

            <View style={styles.areaText}>
            <Text style={styles.compText}>
                Fakultələr
            </Text>

            <ChevronIcon />
        </View>
            <View style={styles.body}>
            <Text style={styles.bodyText}> Tətbiqi riyaziyyat</Text>
            <Squary/>
            <Text style={styles.bodyText}> Fizika-Kimya</Text>
            <Squary/>
            <Text  style={styles.bodyText}> Biologiya</Text>
            <Squary/>
            
        </View>
        <View style={styles.areaText}>
            <Text style={styles.compText}>
                İxtisaslar
            </Text>

            <ChevronIcon />
        </View>
        <View style={styles.body}>
            <View style={styles.bodyArea}>

            <Text style={styles.bodyText}> İnformatika</Text>
            <Squary/>
            </View>
            <Text style={styles.bodyText}> Komputer elmləri</Text>
            <Squary/>
            <Text  style={styles.bodyText}> Fizika</Text>
            <Squary/>
            
        </View>
        
        
        </ScrollView>


        <AppButton
        label='Filterlə'
        style={styles.button}
        onPress={handleFilter}
        
        />


        </SafeAreaView>

    )
}

export default Filter
const styles = StyleSheet.create({
    area1:{
        flex:1
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
    bodyText:{
        fontSize:14,
        fontFamily: Fonts.primary.Manrope.SemiBold,
        color:"#234D70",
        margin:11,
    },
    body:{
        marginLeft:30
    },
    compText:{
        color:"#234D70",
        fontFamily: Fonts.primary.Manrope.SemiBold,
        fontSize:16,
        
    },
    areaText:{
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        marginTop:16,
        marginBottom:24,
        marginHorizontal:20,
    },
    button:{
        marginHorizontal: 20,
        marginBottom: 16
    },
    bodyArea:{
        flexDirection:'row'
    }




    
})