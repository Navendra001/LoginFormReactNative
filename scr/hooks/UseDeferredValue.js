/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, ScrollView, StyleSheet} from 'react-native';
import React, {useState, useMemo, useDeferredValue, useEffect} from 'react';

const UseDeferredValue = () => {
  const [input, setInput] = useState('');

  function handleChanges(e) {
    setInput(e);
  }
  return (
    <View style={{padding: 30, justifyContent: 'center'}}>
      <Text>UseDeferredValue</Text>
      <TextInput
        style={styles.input1}
        onChangeText={value => {
          setInput(value);
          handleChanges(value);
        }}
      />
      <ScrollView>
        <View>
          <ListBuilder input={input} />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  input1: {
    width: '80%',
    marginVertical: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 12,
    borderRadius: 15,
  },
});

export default UseDeferredValue;

const ListBuilder = ({input}) => {
  const TempSize = 1000;
  const deferredValue = useDeferredValue(input);

  const list = useMemo(() => {
    const l = [];
    for (let i = 0; i < TempSize; i++) {
      l.push(<Text key={i}>{deferredValue}</Text>);
    }
    return l;
  }, [deferredValue]);
  useEffect(() => {
    console.log('input : ', {input}, '\n deferred value :', {deferredValue});
  }, [input, deferredValue]);
  return list;
};
