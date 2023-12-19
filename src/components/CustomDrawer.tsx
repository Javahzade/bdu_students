import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React from 'react';
import { Image, SafeAreaView, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const CustomDrawer = props => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <DrawerContentScrollView>
                <View style={{
                    backgroundColor: 'white',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 20,
                    marginTop: 24,
                }}>
                    <Image style={{
                        width: 150,
                        height: 150,
                    }} source={require('../assets/images/BduLogo.png')} />
                </View>
                <DrawerItemList {...props} />
                <TouchableOpacity>
                    <Text>Çıxış</Text>
                </TouchableOpacity>
            </DrawerContentScrollView>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 16,
            }}>
                <View style={{
                    flexDirection: 'row',
                }}>
                    <Image source={require('../assets/icons/devEducation.png')} />
                    <Text style={{
                        marginLeft: 8,
                        color: '#234D70',
                        fontSize: 17,
                        fontWeight: '500',
                        marginBottom: 4
                    }}>DevEducation</Text>
                </View>
                <Text style={{
                    color: '#234D70',
                    fontSize: 17,
                    fontWeight: '400',
                }}>#codeforfuture</Text>
            </View>
        </View>
    )
}
export default CustomDrawer;