/* eslint-disable react-native/no-inline-styles */
import {View, Text, Button} from 'react-native';
import React, {useCallback, useEffect, useState, useMemo} from 'react';

const UseCallBack = () => {
  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const getItems = useCallback(() => {
    return [number + 1, number + 2, number + 3];
  }, [number]);

  useEffect(() => {
    console.log('useCallBack Theme change');
  }, [themeStyles]);

  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? 'black' : 'white',
      color: dark ? 'white' : 'black',
    };
  }, [dark]);

  return (
    <View>
      <Text style={{padding: 20}}>UseCallBack</Text>
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
      <ListDisplay getItems={getItems} themeStyles={themeStyles} />
      <Button
        title="Change Theme "
        onPress={() => setDark(prevDark => !prevDark)}
        color={'red'}
        style={{padding: 30}}
      />
    </View>
  );
};

export default UseCallBack;

const ListDisplay = ({getItems, themeStyles}) => {
  const [items, setItem] = useState([]);
  const [styles, setStyles] = useState(themeStyles);
  useEffect(() => {
    setItem(getItems());
    setStyles(themeStyles);
    console.log('useCallBack Udating Items');
  }, [getItems, themeStyles]);

  return items.map(e => (
    <Text key={e} style={styles}>
      {e}
    </Text>
  ));
};
