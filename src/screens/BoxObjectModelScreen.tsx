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
    marginHorizontal: 20,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    borderWidth: 10,
    padding: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
