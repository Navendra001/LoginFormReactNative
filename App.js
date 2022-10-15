import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import MyDrawer from './scr/screen/Drawer';

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <MyDrawer />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    overflow: 'hidden',
  },
});
