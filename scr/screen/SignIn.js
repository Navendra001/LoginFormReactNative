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

const SignIn = ({navigation}) => {
  const signInValidation = yup.object().shape({
    email: yup
      .string()
      .email('Please Enter a valid Email')
      .required("Field can't be empty"),

    password: yup
      .string()
      .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
      .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
      .matches(/\d/, 'Password must have a number')
      .matches(
        /[!@#$%^&*()\-_"=+{}; :,<.>]/,
        'Password must have a special character',
      )
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password')], 'Passwords do not match')
      .required('Confirm password is required'),
    empCode: yup
      .number()
      .min(3, ({min}) => `Code must contain atleast ${min} number`)
      .required("Field can't be empty"),
    firstName: yup.string().required("Field can't be empty"),
    lastName: yup.string().required("Field can't be empty"),
  });
  const defaultData = {
    email: '',
    firstName: '',
    lastName: '',
    empCode: null,
    password: '',
    confirmPassword: '',
  };

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={styles.container1}>
          <Text style={styles.textStyle1}>Sign In</Text>
          <Formik
            validationSchema={signInValidation}
            onSubmit={(values, {resetForm}) => {
              console.log(values);

              navigation.navigate('Card', values);
              resetForm({values: ''});
              console.log('======', values);
            }}
            initialValues={defaultData}>
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
                  name="email"
                  style={styles.input}
                  placeholder="Enter Email"
                  keyboardType="email-address"
                  onChangeText={handleChange('email')}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <Text style={styles.errorStyle}>{errors.email}</Text>
                )}
                <Text style={styles.textStyle2}>Employee FirstName</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Firstname"
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                  value={values.firstName}
                />
                {errors.firstName && touched.firstName && (
                  <Text style={styles.errorStyle}>{errors.firstName}</Text>
                )}
                <Text style={styles.textStyle2}>Employee Lastname</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Lastname"
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                  value={values.lastName}
                />
                {errors.lastName && touched.lastName && (
                  <Text style={styles.errorStyle}>{errors.lastName}</Text>
                )}
                <Text style={styles.textStyle2}>Employee Code</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Employee Code"
                  keyboardType="number-pad"
                  onChangeText={handleChange('empCode')}
                  onBlur={handleBlur('empCode')}
                  value={values.empCode}
                />
                {errors.empCode && touched.empCode && (
                  <Text style={styles.errorStyle}>{errors.empCode}</Text>
                )}
                <Text style={styles.textStyle2}>Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Enter Password"
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <Text style={styles.errorStyle}>{errors.password}</Text>
                )}
                <Text style={styles.textStyle2}>Confirm Password</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Confirm Password"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                  value={values.confirmPassword}
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <Text style={styles.errorStyle}>
                    {errors.confirmPassword}
                  </Text>
                )}
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
  errorStyle: {fontSize: 10, color: 'red'},
});
