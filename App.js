import React from 'react';
// eslint-disable-next-line no-unused-vars
import {ScrollView} from 'react-native-virtualized-view'; // Used Because we can use ScrollView And FlatList nested
import LogInForm from './scr/screen/LogInForm';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CardImage from './scr/component/CardImage';
import SignIn from './scr/screen/SignIn';
import HomeScreen from './scr/screen/HomeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="HomeScreen">
          <Stack.Screen name="Card" component={CardImage} />
          <Stack.Screen name="HomeScreen" component={HomeScreen} />
          <Stack.Screen
            name="LogIn"
            component={LogInForm}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
