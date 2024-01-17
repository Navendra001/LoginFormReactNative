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
import axios from 'axios';

const LogInForm = ({navigation}) => {
  const validUser = async ({email, password} = {}) => {
    try {
      const payload = {
        id: 'myLoginUser',
        paramValue: {
          email: email,
          password: password,
        },
      };
      const response = await axios.post('http://192.168.3.230:5000/invoke', {
        ...payload,
      });
      if (response.data.response.result.token) {
        navigation.navigate('MyDrawer');
      }
      console.log('====================================');
      console.log(response.data);
      console.log('====================================');
    } catch (err) {
      console.log('>>>>>err', err.response.data.response.error.message);
    }
  };
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
  // useEffect(() => {
  //   validUser({email: 'kk@gmail.com', password: 'qwert12345'});
  // }, []);

  return (
    <SafeAreaView>
      <View style={styles.container1}>
        <Text style={styles.textStyle1}>Log In</Text>
        <Formik
          validationSchema={loginValidation}
          initialValues={{email: '', password: ''}}
          onSubmit={(values, {resetForm}) => {
            console.log(values);
            resetForm({values: ''});
            navigation.navigate('MyDrawer', values);
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
                onPress={() => {
                  validUser({email: values.email, password: values.password});
                }}
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
