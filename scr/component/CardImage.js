import * as React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const CardImage = () => {
  return (
    <View>
      <View style={styles.container2}>
        <Image
          style={styles.imageStyle}
          source={require('../../assets/netflixIcon.png')}
        />
        <Text style={styles.textStyle1}>Netflix</Text>
      </View>

      <View style={styles.container1}>
        <Image
          style={{width: '100%'}}
          source={require('../../assets/NetflixSampleImage.jpg')}
        />
        <Text style={styles.textStyle2}> STANGES THINGS </Text>
      </View>
    </View>
  );
};

export default CardImage;

const styles = StyleSheet.create({
  container1: {
    borderWidth: 2,
    borderColor: 'black',
    alignItems: 'center',
    margin: 10,
  },
  container2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 0,
  },
  textStyle1: {
    color: 'red',
    fontSize: 40,
    marginLeft: 20,
  },
  textStyle2: {
    fontSize: 30,
    padding: 20,
    fontFamily: 'courier',
    // fontWeight: 'bold',
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
});
