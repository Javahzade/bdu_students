import { DrawerToggleButton, createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { PrivateAccount } from '../views/Welcome';
import CustomDrawer from '../components/CustomDrawer';
import { Colors } from '../utils/colors';


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
                title: 'Şəxsi Hesab',
                drawerLabel: 'Şəxsi Hesab',
            }}
                name='PrivateAccount' component={PrivateAccount} />
        </Drawer.Navigator>
    )
}