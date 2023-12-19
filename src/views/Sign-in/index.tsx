import React, { useState } from "react";
import { SafeAreaView, StyleSheet, View, Text, TextInput, TouchableOpacity } from "react-native";
import EyeIcon from "../../svgIcons/eyeIcon";
import EyeOffIcon from "../../svgIcons/eyeoffIcon";
import { useNavigation } from "@react-navigation/native";

export const SignIn = () => {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };
    const navigation=useNavigation();
    const handleNavigate=()=>{
        navigation.navigate('SignUp');
    };
    return (
        <SafeAreaView style={styles.area}>
            <View style={styles.view}>
                <Text style={styles.text1}>Giriş</Text>
                <View style={styles.view2}>
                    <Text style={styles.text2}>Xoş gəlmisiniz!</Text>
                </View>
            </View>
            <View style={styles.view3}>
                <Text style={styles.text3}>E-poçt</Text>
                <View style={styles.inputContainer1}>
                    <TextInput
                        placeholder="example@mail.com"
                        placeholderTextColor={'#AFAFAF'}
                        style={styles.input1}
                    />
                </View>
                <Text style={styles.text4}>Şifrə</Text>
                <View style={styles.inputContainer2}>
                    <TextInput
                        placeholder="*********"
                        placeholderTextColor={'#AFAFAF'}
                        style={styles.input2}
                        secureTextEntry={!passwordVisible}
                    />
                    <TouchableOpacity onPress={togglePasswordVisibility} style={styles.eyeIcon} activeOpacity={0.75}>
                        {passwordVisible ? <EyeOffIcon /> : <EyeIcon />}
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.commonview}>
                <View style={styles.view4}>
                    <TouchableOpacity style={styles.button1} activeOpacity={0.75}>
                        <Text style={styles.text5}>Daxil olun</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.view5}>
                    <TouchableOpacity  onPress={handleNavigate} style={styles.button2} activeOpacity={0.75}>
                        <Text style={styles.text6}>Qeydiyyatdan keç</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    area: {
        flex: 1,
        backgroundColor: "#FFFFFF",
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    view: {
        marginTop: 48,
        alignItems: 'center',
    },
    text1: {
        fontSize: 32,
        color: '#234D70',
        fontFamily: 'Manrope-SemiBold',
    },
    view2: {
        marginTop: 16,
    },
    text2: {
        fontSize: 16,
        color: '#909EB0',
        fontFamily: 'Manrope-SemiBold',
    },
    view3: {
        justifyContent: 'center',
        alignSelf: 'flex-start',
        marginLeft: 20,
        flex: 1
    },
    text3: {
        fontSize: 16,
        color: '#5C5C5C',
        fontFamily: 'Manrope-Medium',
        marginBottom: 8,
    },
    input1: {
        flex: 1,
        fontSize: 18,
    },
    inputContainer1: {
        height: 50,
        width: '95%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 13,
        marginBottom: 8,
        flexDirection: "row-reverse",
    },
    text4: {
        fontSize: 16,
        color: '#5C5C5C',
        fontFamily: 'Manrope-Medium',
        marginBottom: 8,
        marginTop: 10
    },
    input2: {
        flex: 1,
        fontSize: 18,
    },
    inputContainer2: {
        position: 'relative',
        height: 50,
        width: '95%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        paddingHorizontal: 20,
        paddingVertical: 13,
        flexDirection: "row",
        justifyContent: "space-between", 
        alignItems: "center", 
    },
    eyeIcon: {

    },
    view4: {
        backgroundColor:"#FFFFFF",
        marginBottom: 10,
    },
    button1: {
        backgroundColor: '#1A5680',
        width: '100%',
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    text5: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily: 'Manrope-SemiBold',
    },
    view5: {
        backgroundColor: "#FFFFFF",
        marginTop: 10,
    },
    button2: {
        backgroundColor: '#FFFFFF',
        width: 360,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
    },
    text6: {
        color: '#234D70',
        fontSize: 16,
        fontFamily: 'Manrope-SemiBold',
    },
    commonview: {
        flex: 0.3
    },
});



