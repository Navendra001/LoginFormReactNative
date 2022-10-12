import {React, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from 'react-native';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [empCode, setEmpCode] = useState(0);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <ScrollView>
      <View style={styles.container1}>
        <Text style={styles.textStyle1}>Log In</Text>
        <Text style={styles.textStyle2}>Employee Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Email"
          keyboardType="email-address"
          onChangeText={value => setEmail(value)}
        />
        <Text style={styles.textStyle2}>Employee FirstName</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Firstname"
          onChangeText={value => setFirstName(value)}
        />
        <Text style={styles.textStyle2}>Employee Lastname</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Lastname"
          onChangeText={value => setLastName(value)}
        />
        <Text style={styles.textStyle2}>Employee Code</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Employee Code"
          keyboardType="number-pad"
          onChangeText={value => setEmpCode(value)}
        />
        <Text style={styles.textStyle2}>Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Password"
          onChangeText={value => setPassword(value)}
        />
        <Text style={styles.textStyle2}>Confirm Password</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={value => setConfirmPassword(value)}
        />
        <View style={styles.buttonStyle}>
          <Button
            color="red"
            onPress={() => {
              console.log(
                'email :',
                email,
                '\n firstName :',
                firstName,
                '\n lastName :',
                lastName,
                '\n empCode :',
                empCode,
                '\n password :',
                password,
                '\n confirmPassword :',
                confirmPassword,
              );
              Alert.alert('Form Submited Successfully 👍');
            }}
            title="Submit"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  textStyle1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  container1: {
    justifyContent: 'center',
    margin: 10,
  },
  textStyle2: {
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 5,
  },
  buttonStyle: {
    padding: 10,
    alignItems: 'stretch',
  },
});
