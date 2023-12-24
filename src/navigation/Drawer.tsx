import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import CustomDrawer from '../components/CustomDrawer';
import {Home} from '../views/Home';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={CustomDrawer}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
};
