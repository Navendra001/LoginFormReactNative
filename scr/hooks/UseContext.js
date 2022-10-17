import {View, Text} from 'react-native';
import React, {useContext} from 'react';

const FirstName = React.createContext();
const LastName = React.createContext();

const UseContext = () => {
  return (
    <View>
      <Text>UseContext</Text>
      <FirstName.Provider value={'Kajal'}>
        <LastName.Provider value={'Bansal'}>
          <FirstScreen />
        </LastName.Provider>
      </FirstName.Provider>
    </View>
  );
};

const FirstScreen = () => {
  return (
    <View>
      <Text> First Screen </Text>
      <LastScreen />
    </View>
  );
};

const LastScreen = () => {
  const userFirstName = useContext(FirstName);
  const userLastName = useContext(LastName);
  return (
    <View>
      <Text>Last Screen</Text>
      <Text>
        User name :{userFirstName} {userLastName}
      </Text>
    </View>
  );
};

export default UseContext;
