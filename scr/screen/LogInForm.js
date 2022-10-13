import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  SafeAreaView,
} from 'react-native';
import {Formik} from 'formik';
import * as yup from 'yup';

const LogInForm = ({navigation}) => {
  const loginValidation = yup.object().shape({
    email: yup
      .string()
      .email('Please Enter a valid email')
      .required('Email Address is required'),
    password: yup
      .string()
      .min(5, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });

  return (
    <SafeAreaView>
      <View style={styles.container1}>
        <Text style={styles.textStyle1}>Log In</Text>
        <Formik
          validationSchema={loginValidation}
          initialValues={{email: '', password: ''}}
          onSubmit={values => {
            console.log(values);
            navigation.navigate('Card', values);
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
              <Text style={styles.textStyle2}>Email</Text>
              <TextInput
                name="email"
                style={styles.input}
                placeholder="Enter Your Email"
                keyboardType="email-address"
                onChangeText={handleChange('email')}
                onBlur={handleBlur('email')}
                value={values.email}
              />
              {errors.email && touched.email && (
                <Text style={styles.errorStyle}>{errors.email}</Text>
              )}
              <Text style={styles.textStyle2}>Password</Text>
              <TextInput
                name="password"
                style={styles.input}
                placeholder="Enter Your Password"
                onChangeText={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
                secureTextEntry
              />
              {errors.password && touched.password && (
                <Text style={styles.errorStyle}>{errors.password}</Text>
              )}
              <Button
                color="red"
                onPress={handleSubmit}
                title="Log In"
                disabled={!isValid}
              />
            </>
          )}
        </Formik>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container1: {
    justifyContent: 'center',
    margin: 10,
  },
  textStyle1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 10,
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  textStyle2: {
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 5,
  },
  errorStyle: {fontSize: 10, color: 'red'},
});

export default LogInForm;
