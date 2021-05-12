import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Chat = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Chat</Text>
    </View>
  );
};

export default Chat;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'blue',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
});
