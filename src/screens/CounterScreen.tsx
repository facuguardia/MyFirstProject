import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

export const CounterScreen = () => {
  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.titleCounter}>Contador: { contador }</Text>
      <Button onPress={() => setContador(contador + 1)} title="+1" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleCounter: {
    fontSize: 40,
    fontWeight: '400',
    top: -10,
  },
});
