import React from 'react';
import Users from './Users';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import LogInForm from './LogInForm';
const Tab = createBottomTabNavigator();

const Home = () => (
  <Tab.Navigator
    initialRouteName="Users"
    screenOptions={{headerShown: 'false'}}>
    <Tab.Screen
      name="Users"
      component={Users}
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: () => <Icon name="home" size={30} color="red" />,
      }}
    />
    <Tab.Screen
      name="LogInForm"
      component={LogInForm}
      options={{
        headerShown: false,
        tabBarIcon: () => (
          <Icon name="arrow-forward-circle-outline" size={30} color="red" />
        ),
      }}
    />
  </Tab.Navigator>
);

export default Home;
