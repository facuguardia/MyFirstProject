import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {
  title: string;
  position?: 'br' | 'bl';
  onPress: () => void;
}

export const Button = ({title, onPress, position = 'br'}: Props) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPress}
        style={position === 'br' ? styles.btnLocationR : styles.btnLocationL}>
        <View style={styles.btn}>
          <Text style={styles.textBtn}>{title}</Text>
        </View>
      </TouchableOpacity>
    </>
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
