import {} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Users from './Users';
import {NavigationContainer} from '@react-navigation/native';
import Home from './HomeScreen';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Users" component={Users} />
        <Drawer.Screen name="Users1" component={Users} />
        <Drawer.Screen name="Users2" component={Users} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
