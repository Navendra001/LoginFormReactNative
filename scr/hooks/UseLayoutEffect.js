/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';

const UseLayoutEffect = () => {
  const [count, setCount] = useState(0);
  useLayoutEffect(() => {
    console.log('Use layout ', count);
  }, [count]);
  return (
    <View style={{padding: 20}}>
      <Text>UseLayoutEffect</Text>
      <Text> {count}</Text>
      <Button
        title="increment"
        onPress={() => setCount(count + 1)}
        color={'red'}
      />
    </View>
  );
};

export default UseLayoutEffect;
