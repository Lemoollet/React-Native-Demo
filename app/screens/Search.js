import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Searchbar = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Search</Text>
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'purple',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
});
