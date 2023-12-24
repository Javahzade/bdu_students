import { DrawerToggleButton, createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import CustomDrawer from '../components/CustomDrawer';
import { Colors } from '../utils/colors';
import { PrivateAccount } from '../views/PrivateAccount';
import Person from '../assets/icons/person.svg';


const Drawer = createDrawerNavigator()

export const DrawerNavigator = () => {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerTitleStyle: {
                    fontSize: 24
                },
                drawerPosition: 'left',
                headerLeft: false,
                headerRight: () => <DrawerToggleButton />,
                headerTintColor: Colors.blueDark,

            }}
        >
            <Drawer.Screen options={{
                title: 'Mənim işlərim',
                drawerLabel: 'Şəxsi Hesab',
                drawerIcon: ()=>(
                    <Person width={24} height={24}/>
                )
            }}
                name='PrivateAccount' component={PrivateAccount} />
        </Drawer.Navigator>
    )
}