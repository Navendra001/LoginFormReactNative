import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const LoginScreen = () => {
  return (
    <View>
      <ScrollView horizontal>
        <Text style={styles.textStyle}> Welcome To React Native World </Text>
      </ScrollView>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  textStyle: {
    color: 'blue',
    fontSize: 40,
  },
});
