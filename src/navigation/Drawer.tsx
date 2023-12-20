import { DrawerToggleButton, createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { PrivateAccount } from '../views/PrivateAccount';
import CustomDrawer from '../components/CustomDrawer';


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
                headerTintColor: '#234D70',
                
            }} 
        >
            <Drawer.Screen options={{
                title: 'Şəxsi Hesab',
                drawerLabel: 'Şəxsi Hesab',
            }}
                name='PrivateAccount' component={PrivateAccount} />
        </Drawer.Navigator>
    )
}