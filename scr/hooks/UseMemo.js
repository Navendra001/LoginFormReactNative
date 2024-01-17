/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React, {useMemo, useState, useEffect} from 'react';

const UseMemo = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);

  useEffect(() => {
    console.log('Theme change');
  }, [themeStyles]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);

  return (
    <View>
      <View>
        <Text>UseMemo</Text>
      </View>
      <View>
        <Text>You Clicked Button {number}</Text>
        <Button title="Press me" onPress={() => setNumber(number + 1)} />
        {/* eslint-disable-next-line react/self-closing-comp */}
        <View style={{marginBottom: 10}}></View>
        <Button
          title="Decrement Value"
          onPress={() => {
            number > 0 ? setNumber(number - 1) : setNumber(0);
          }}
          color={'red'}
        />
      </View>
      <View style={{marginBottom: 10}} />

      <Text style={themeStyles}>Number is {doubleNumber}</Text>
      <View style={{marginBottom: 10}} />

      <Button
        title="Change Theme "
        onPress={() => setDark(prevDark => !prevDark)}
        color={'red'}
        style={{padding: 30}}
      />
    </View>
  );
};

export default UseMemo;

function slowFunction(num) {
  console.log('slowFunction', num);
  // for (let i = 0; i < 10000000; i++) {}  // this is here to create a delay
  return num * 2;
}
