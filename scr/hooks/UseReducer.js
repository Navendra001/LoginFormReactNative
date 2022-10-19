/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React, {useReducer} from 'react';

const ACTION = {
  INC: 'inc',
  DEC: 'dec',
};

function reducer(state, action) {
  if (action.type === ACTION.INC) {
    return {count: state.count + 1};
  } else if (action.type === ACTION.DEC) {
    return {count: state.count - 1};
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, {count: 0});

  return (
    <View>
      <Text>UseReducer</Text>
      <Text style={{padding: 30, letterSpacing: 2}}>
        useReducer is usually preferable to useState when you have complex state
        logic that involves multiple sub-values or when the next state depends
        on the previous one. useReducer also lets you optimize performance for
        components that trigger deep updates because you can pass dispatch down
        instead of callbacks.
      </Text>
      <View>
        <Text>You Clicked Button {state.count}</Text>
        <Button
          title="Increment value"
          onPress={() => dispatch({type: ACTION.INC})}
        />
        <View style={{marginBottom: 10}} />
        <Button
          title="Decrement Value"
          onPress={() => dispatch({type: ACTION.DEC})}
          color={'red'}
        />
      </View>
    </View>
  );
};

export default UseReducer;
