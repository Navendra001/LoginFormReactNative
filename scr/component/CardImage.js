import * as React from 'react';
import {StyleSheet, Text, View, Image, Button, Linking} from 'react-native';

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
          // width="100%"
          style={{width: '100%'}}
          source={require('../../assets/NetflixSampleImage.jpg')}
        />
        <Text style={styles.textStyle2}> STANGES THINGS </Text>
        <Text style={styles.textStyle3}>
          Stranger Things is an American science fiction horror drama television
          series created by the Duffer Brothers, who also serve as showrunners
          and are executive producers along with Shawn Levy and Dan Cohen.
          Produced by Monkey Massacre Productions and Levy's 21 Laps
          Entertainment, the first season was released on Netflix on July 15,
          2016. Its second, third, and fourth seasons followed in October 2017,
          July 2019, and May and July 2022, respectively. In February 2022, the
          series was renewed for a fifth and final season.
        </Text>
        <Button
          color="red"
          onPress={() => {
            Linking.openURL('https://www.netflix.com/in/').catch(err =>
              console.error('Error', err),
            );
          }}
          title="Watch Now"
        />
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
    padding: 15,
    fontFamily: 'courier',
    fontWeight: 'bold',
  },
  imageStyle: {
    height: 50,
    width: 50,
  },
  textStyle3: {
    padding: 25,
  },
});
