import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import UserData from './UserData';
const Tab = createBottomTabNavigator();

const Home = () => (
  <Tab.Navigator
    initialRouteName="UserData"
    screenOptions={{headerShown: 'false'}}>
    {/* <Tab.Screen
      name="Users"
      component={Users}
      options={{
        headerShown: false,
        tabBarLabel: 'Home',
        tabBarIcon: () => <Icon name="home" size={30} color="red" />,
      }}
    /> */}
    <Tab.Screen
      name="UserData"
      component={UserData}
      options={{
        headerShown: false,
        tabBarIcon: () => <Icon name="apps" size={30} color="red" />,
      }}
    />
  </Tab.Navigator>
);

export default Home;
