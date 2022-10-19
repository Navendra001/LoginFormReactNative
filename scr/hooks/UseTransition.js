/* eslint-disable react-native/no-inline-styles */
import {View, Text, TextInput, StyleSheet} from 'react-native';
import React, {useState, useTransition} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

const UseTransition = () => {
  const [isPending, startTransition] = useTransition();
  const [, setInput] = useState('');
  const [list, setList] = useState([]);
  const TempSize = 1000;
  function handleChanges(e) {
    setInput(e);
    startTransition(() => {
      const l = [];
      for (let i = 0; i < TempSize; i++) {
        l.push(e);
      }
      setList(l);
    });
  }
  return (
    <View style={{padding: 30, justifyContent: 'center'}}>
      <Text>UseTransition</Text>
      <TextInput
        style={styles.input1}
        onChangeText={value => {
          setInput(value);
          handleChanges(value);
        }}
      />
      <ScrollView>
        <View>
          {isPending
            ? 'Loading .. '
            : list.map((e, v) => {
                return <Text key={v}>{e}</Text>;
              })}
        </View>
      </ScrollView>
    </View>
  );
};

export default UseTransition;

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
