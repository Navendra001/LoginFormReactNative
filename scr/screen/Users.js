import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';

const Users = () => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const getMovies = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );
      const json = await response.json();
      const result = json.map(item => {
        return {name: item.name, email: item.email};
      });
      setData(result);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <SafeAreaView>
      <View style={styles.viewStyle}>
        <Text style={styles.headingStyle}>Fetch Data From API</Text>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <View style={styles.viewStyle1}>
                <Text style={styles.textStyle}>{item.name}</Text>
                <Text style={styles.textStyle}>{item.email}</Text>
              </View>
            )}
          />
        )}
      </View>
    </SafeAreaView>
  );
};

export default Users;

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
});
