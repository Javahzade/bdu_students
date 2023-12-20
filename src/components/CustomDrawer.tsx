import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '../utils/colors';
import { Fonts } from '../utils/fonts';

const CustomDrawer = props => {
    return (
        <SafeAreaView>
            <View style={styles.container}>
                <DrawerContentScrollView>
                    <View style={styles.bduLogo}>
                        <Image style={styles.bduLogoImage} source={require('../assets/images/bdu-logo.png')} />
                    </View>
                    <DrawerItemList {...props} />
                    <TouchableOpacity>
                        <Text>Çıxış</Text>
                    </TouchableOpacity>
                </DrawerContentScrollView>
                <View style={styles.devEducationLogo}>
                    <View>
                        <Image source={require('../assets/icons/dev-education-logo.png')} />
                    </View>
                    <Text style={styles.codeForFuture}>#codeforfuture</Text>
                </View>
            </View>
        </SafeAreaView>
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
    devEducationLogo: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16,
    },
    codeForFuture: {
        fontSize: 16,
        fontFamily: Fonts.primary.Manrope.SemiBold,
        color: Colors.blueDark,
        textAlign: 'right',
    }
})