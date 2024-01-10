import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from '../components/Button';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(0);

  if (counter < 0) {
    setCounter(0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titleCounter}>Contador: {counter}</Text>
      <Button
        title="+1"
        onPress={() => setCounter(counter + 1)}
        position="br"
      />
      <Button
        title="-1"
        onPress={() => setCounter(counter - 1)}
        position="bl"
      />
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
