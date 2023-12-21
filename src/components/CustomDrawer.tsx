import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../utils/colors';
import { Fonts } from '../utils/fonts';
import Person from '../assets/icons/person.svg';
import SignOut from '../assets/icons/sign-out.svg';

const CustomDrawer = props => {
    return (
        <View style={styles.container}>
            <DrawerContentScrollView>
                <View style={styles.bduLogo}>
                    <Image style={styles.bduLogoImage} source={require('../assets/images/bdu-logo.png')} />
                </View>
                <DrawerItemList {...props} />
                <TouchableOpacity>
                    <View style={styles.signOut}>
                        <SignOut width={24} height={24} />
                        <Text style={styles.signOutText}>Çıxış</Text>
                    </View>
                </TouchableOpacity>
            </DrawerContentScrollView>
            <View style={styles.footer}>
                <Image style={styles.devEducationLogo} source={require('../assets/images/dev-education-logo.png')} />
                <Text style={styles.codeForFuture}>#codeforfuture</Text>
            </View>
        </View>
    )
}
export default CustomDrawer;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    bduLogo: {
        backgroundColor: Colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        marginTop: 24,
    },
    bduLogoImage: {
        width: 150,
        height: 150,
    },
    footer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,

    },
    codeForFuture: {
        fontSize: 16,
        fontFamily: Fonts.primary.Manrope.SemiBold,
        color: Colors.blueDark,
        textAlign: 'right',
    },
    devEducationLogo: {
        width: 150,
        height: 21
    },
    signOut: {
        flexDirection: 'row',
        marginHorizontal:20,
    },
    signOutText:{
        color: Colors.blueDark,
        fontFamily: Fonts.primary.Manrope.Medium,
        fontSize:16,
    }
})