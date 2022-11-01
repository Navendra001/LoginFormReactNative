import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import MyDrawer from './scr/screen/Drawer';
import LogInForm from './scr/screen/LogInForm';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="LogInForm"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="MyDrawer" component={MyDrawer} />
          <Stack.Screen name="LogInForm" component={LogInForm} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
});
