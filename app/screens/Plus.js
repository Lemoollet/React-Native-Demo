import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Plus = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Plus</Text>
    </View>
  );
};

export default Plus;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'tomato',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
});
