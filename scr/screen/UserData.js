import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  Modal,
  TouchableOpacity,
  Alert,
  Button,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {Formik} from 'formik';
import * as yup from 'yup';

const UserData = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [editingData, setEditingData] = useState({});

  const updateUserProfileData = async ({name, password, role, _id}) => {
    const payload = {
      id: 'myUpdateUser',
      paramValue: {
        _id: _id,
        name: name,
        password: password,
        role: role,
      },
      token: '44156b3582440f17907b9f88ce5b31ec142dd637',
    };
    await axios.post('http://192.168.3.230:5000/invoke', {
      ...payload,
    });

    getAllUsersData();
  };

  const getAllUsersData = async () => {
    try {
      setLoading(true);
      const payload = {
        token: '44156b3582440f17907b9f88ce5b31ec142dd637',
        paramValue: {
          model: 'UserTest',
          query: {
            id: 'getAllUsers',
            addOnFilter: {
              status: 'd',
            },
          },
        },
        id: '_find',
      };
      const userResponse = await axios.post(
        'http://192.168.3.230:5000/invoke',
        {
          ...payload,
        },
      );

      setData(userResponse.data.response.result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const loginValidation = yup.object().shape({
    name: yup.string().required('field can not be empty'),
    role: yup.string().required('field can not be empty'),
    password: yup
      .string()
      .min(5, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required'),
  });
  useEffect(() => {
    getAllUsersData();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.viewStyle}>
        <Text style={styles.headingStyle}>Fetch Data From API</Text>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Udpate Profile</Text>
              <Formik
                validationSchema={loginValidation}
                initialValues={{...editingData}}
                onSubmit={(values, {resetForm}) => {
                  console.log(values);
                  resetForm({values: ''});
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
                    <Text style={styles.textStyle2}>Name</Text>
                    <TextInput
                      name="name"
                      style={styles.input}
                      placeholder="Enter Your Name"
                      onChangeText={handleChange('name')}
                      onBlur={handleBlur('name')}
                      value={values.name}
                    />
                    {errors.name && touched.name && (
                      <Text style={styles.errorStyle}>{errors.name}</Text>
                    )}
                    <Text style={styles.textStyle2}>Password</Text>
                    <TextInput
                      name="password"
                      style={styles.input}
                      placeholder="Enter Your Password"
                      onChangeText={handleChange('password')}
                      onBlur={handleBlur('password')}
                      value={values.password}
                    />
                    {errors.password && touched.password && (
                      <Text style={styles.errorStyle}>{errors.password}</Text>
                    )}
                    <TextInput
                      name="role"
                      style={styles.input}
                      placeholder="Enter Your Role"
                      onChangeText={handleChange('role')}
                      onBlur={handleBlur('role')}
                      value={values.role}
                    />
                    {errors.role && touched.role && (
                      <Text style={styles.errorStyle}>{errors.role}</Text>
                    )}
                    <Button
                      color="red"
                      onPress={() => {
                        setModalVisible(!modalVisible);
                        updateUserProfileData({
                          name: values.name,
                          role: values.role,
                          password: values.password,
                          _id: values._id,
                        });
                      }}
                      title="Update Data"
                      disabled={!isValid}
                    />
                  </>
                )}
              </Formik>
            </View>
          </View>
        </Modal>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={styles.viewStyle1}>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Text style={styles.textStyle}>{item.email}</Text>
                <TouchableOpacity
                  onPress={() => {
                    setModalVisible(true);
                    setEditingData(item);
                  }}>
                  <Icon name="create" size={20} color="red" />
                </TouchableOpacity>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  viewStyle: {padding: 24},
  viewStyle1: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  headingStyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 30,
    paddingBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle2: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  input: {
    borderWidth: 2,
    borderRadius: 10,
    margin: 5,
    paddingHorizontal: 15,
    paddingVertical: 5,
  },
  textStyle3: {
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 5,
  },
  errorStyle: {fontSize: 10, color: 'red'},
});

export default UserData;
