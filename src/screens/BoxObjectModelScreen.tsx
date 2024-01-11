import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hola Mundo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {

  },
  title: {
    fontSize: 20,
    borderWidth: 10,
    // backgroundColor: 'red',
    padding: 10,
  },
});
