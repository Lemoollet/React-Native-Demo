import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Details = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DETAILS</Text>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'rgb(59,108,212)',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
});
