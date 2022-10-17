/* eslint-disable react-native/no-inline-styles */
import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useEffect, useState} from 'react';

const UseEffect = () => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log('useEffect ', count);
  });

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.testStyle1}>UseEffect</Text>
      <Text style={styles.testStyle2}>
        You've likely performed data fetching, subscriptions, or manually
        changing the DOM from React components before. We call these operations
        “side effects” (or “effects” for short) because they can affect other
        components and can’t be done during rendering.
      </Text>
      <Text style={styles.testStyle1}>You Clicked Button {count}</Text>
      <Button
        title="Press me"
        onPress={() => setCount(count + 1)}
        style={styles.buttonStyle}
      />
      {/* eslint-disable-next-line react/self-closing-comp */}
      <View style={{marginBottom: 10}}></View>
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
  testStyle1: {
    padding: 20,
    fontWeight: 'bold',
    color: 'red',
  },
  testStyle2: {
    padding: 20,
    letterSpacing: 2,
  },
  buttonStyle: {
    marginBottom: 20,
  },
  viewStyle: {
    flex: 1,
    marginHorizontal: 16,
  },
});

export default UseEffect;
