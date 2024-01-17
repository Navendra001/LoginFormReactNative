import {} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Home from './HomeScreen';
import UseState from '../hooks/UseState';
import UseEffect from '../hooks/UseEffect';
import UseContext from '../hooks/UseContext';
import UseMemo from '../hooks/UseMemo';
import UseReducer from '../hooks/UseReducer';
import UseLayoutEffect from '../hooks/UseLayoutEffect';
import UseCallBack from '../hooks/UseCallBack';
import UseTransition from '../hooks/UseTransition';
import UseDeferredValue from '../hooks/UseDeferredValue';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home">
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="UseState" component={UseState} />
      <Drawer.Screen name="UseEffect" component={UseEffect} />
      <Drawer.Screen name="UseContext" component={UseContext} />
      <Drawer.Screen name="UseMemo" component={UseMemo} />
      <Drawer.Screen name="UseReducer" component={UseReducer} />
      <Drawer.Screen name="UseLayoutEffect" component={UseLayoutEffect} />
      <Drawer.Screen name="UseCallBack" component={UseCallBack} />
      <Drawer.Screen name="UseTransition" component={UseTransition} />
      <Drawer.Screen name="UseDeferredValue" component={UseDeferredValue} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
