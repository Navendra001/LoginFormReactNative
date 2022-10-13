import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
  ScrollView,
} from 'react-native';

import {Formik} from 'formik';
import * as yup from 'yup';

const SignIn = () => {
  const signInValidation = yup.object().shape({
    email: yup
      .string()
      .email('Please Enter a valid Email')
      .required("Field can't be empty"),

    password: yup
      .string()
      .min(5, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .min(5, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    // empCode,
    // firstName,
    // lastName,
  });
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container1}>
          <Text style={styles.textStyle1}>Sign In</Text>
          <Formik
            initialValues={{
              email: '',
              firstName: '',
              lastName: '',
              empCode: null,
              password: '',
              confirmPassword: '',
            }}>
            {({
              handleChange,
              handleBlur,
              handleSubmit,
              values,
              errors,
              touched,
              isValid,
            }) => (
              <>
                <Text style={styles.textStyle2}>Employee Email</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Email"
                  keyboardType="email-address"
                  value={values.email}
                />
                <Text style={styles.textStyle2}>Employee FirstName</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Firstname"
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                />
                <Text style={styles.textStyle2}>Employee Lastname</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Lastname"
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                />
                <Text style={styles.textStyle2}>Employee Code</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Employee Code"
                  keyboardType="number-pad"
                  onChangeText={handleChange('empCode')}
                  onBlur={handleBlur('empCode')}
                  value={values.empCode}
                />
                <Text style={styles.textStyle2}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                <Text style={styles.textStyle2}>Confirm Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                />
                <View style={styles.buttonStyle}>
                  <Button
                    color="red"
                    onPress={handleSubmit}
                    title="Submit"
                    disabled={!isValid}
                  />
                </View>
              </>
            )}
          </Formik>
        </View>
      </ScrollView>
    </SafeAreaView>
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
