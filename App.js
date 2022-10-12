import React from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-virtualized-view'; // Used Because we can use ScrollView And FlatList nested
import CardImage from './scr/component/CardImage';
import SignIn from './scr/screen/SignIn';

export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container}>
          <CardImage />
          <SignIn />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
});
