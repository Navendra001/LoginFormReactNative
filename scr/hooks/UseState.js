import React, {useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const UseState = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.testStyle}>You Clicked Button {count}</Text>
      <Button
        title="Press me"
        onPress={() => setCount(count + 1)}
        style={styles.buttonStyle}
      />
      {/* eslint-disable-next-line react-native/no-inline-styles */}
      <View style={{marginBottom: 10}} />
      <Button
        title="Reset Value"
        onPress={() => setCount(0)}
        color={'red'}
        style={styles.buttonStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  testStyle: {
    padding: 20,
  },
  buttonStyle: {
    marginBottom: 20,
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
    // paddingVertical: 16,
  },
});
export default UseState;
