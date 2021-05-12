import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Home = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HOME</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'orange',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
});
