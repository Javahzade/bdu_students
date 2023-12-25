import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import CustomDrawer from '../components/CustomDrawer';
import {Home} from '../views/Home';
import TaskScreen from '../views/TaskScreen';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={CustomDrawer}>
      <Drawer.Screen name="TaskScreen" component={TaskScreen} />
    </Drawer.Navigator>
  );
};
