import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Bookmarks = ({route, navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bookmarks</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Chat')}
      />
    </View>
  );
};

export default Bookmarks;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'red',
    fontSize: 42,
    fontWeight: '100',
    textAlign: 'center',
  },
});
