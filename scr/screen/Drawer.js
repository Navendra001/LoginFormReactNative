import {} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './HomeScreen';
import UseState from '../hooks/UseState';
import UseEffect from '../hooks/UseEffect';
import UseContext from '../hooks/UseContext';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="UseContext">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="UseState" component={UseState} />
        <Drawer.Screen name="UseEffect" component={UseEffect} />
        <Drawer.Screen name="UseContext" component={UseContext} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default DrawerNavigator;
