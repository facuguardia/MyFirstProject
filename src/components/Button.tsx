import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  counter: number;
  setCounter: React.Dispatch<React.SetStateAction<number>>;
}

export const Button = ({ counter, setCounter}: Props) => {
  const counterIncrement = (): void => {
    setCounter(counter + 1);
  };

  const counterDecrement = (): void => {
    setCounter(counter - 1);
  };

  if (counter < 0) {
    setCounter(0);
  }

  return (
    <React.Fragment>
      <TouchableOpacity onPress={counterDecrement} style={styles.btnLocationL}>
        <View style={styles.btn}>
          <Text style={styles.textBtn}>-1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={counterIncrement} style={styles.btnLocationR}>
        <View style={styles.btn}>
          <Text style={styles.textBtn}>+1</Text>
        </View>
      </TouchableOpacity>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  btnLocationR: {
    position: 'absolute',
    bottom: 25,
    right: 25,
  },
  btnLocationL: {
    position: 'absolute',
    bottom: 25,
    left: 25,
  },
  btn: {
    width: 60,
    height: 60,
    backgroundColor: 'purple',
    borderRadius: 100,
    justifyContent: 'center',
  },
  textBtn: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
