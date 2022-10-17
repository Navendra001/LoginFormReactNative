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
      <Button
        title="Reset Value"
        onPress={() => setCount(0)}
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
    margin: 20,
    padding: 20,
  },
  viewStyle: {
    flex: 1,
    justifyContent: 'space-between',
    marginHorizontal: 16,
  },
});
export default UseState;
