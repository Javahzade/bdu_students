import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Image, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';


export const Welcome = () => {
    const navigation = useNavigation();

    const handleNavigate = () => {
        navigation.navigate('SignIn')
    }

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Image source={require('../../assets/images/logo.png')} />
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: 16,
                    paddingHorizontal: 20,
                }}>
                    <View style={styles.devStyle}>
                        <Image style={{ marginRight: 5 }} source={require('../../assets/icons/devEducation.png')} />
                        <Text style={{ fontSize: 18, color: '#234D70', fontWeight: '500' }}>DevEducation</Text>
                    </View>
                    <Text style={{ fontSize: 18, color: '#234D70', fontWeight: '400' }} >#codeforfuture</Text>
                </View>
                <View style={{ flexDirection: 'row', marginTop: 24 }}>
                    <View style={styles.lineStyle} />
                    <Text style={{ alignSelf: 'center', paddingHorizontal: 16, fontSize: 16, color: '#909EB0' }}>dəstəyi ilə</Text>
                    <View style={styles.lineStyle} />
                </View>
                <View style={styles.textArea} >
                    <Text style={{ color: '#234D70', fontSize: 36, fontWeight: '500' }}>Məzun sistem</Text>
                    <Text style={{ textAlign: 'center', fontSize: 16, marginTop: 16, color: '#909EB0' }}>Bakı Dövlət Universitetinin yekun il diplom qiymətləndirilməsi sistemi</Text>
                </View>
            </View>

            <TouchableOpacity onPress={handleNavigate} style={styles.button}>
                <Text style={styles.buttonText}>Başlayın</Text>
            </TouchableOpacity>

        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
    },
    devStyle: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
    },
    textArea: {
        flexDirection: 'column',
        paddingHorizontal: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24
    },
    lineStyle: {
        backgroundColor: '#909EB0',
        height: 1,
        flex: 1,
        alignSelf: 'center'
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#1A5680',
        marginHorizontal: 16,
        paddingVertical: 9,
        paddingHorizontal: 130,
        borderRadius: 10,
        marginBottom: 20,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
    },
})
