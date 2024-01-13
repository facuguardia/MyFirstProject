import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
// import {CounterScreen} from './src/screens/CounterScreen';
// import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {TareaScreen} from './src/screens/TareaScreen';

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.container}>
      {/* <CounterScreen /> */}
      {/* <BoxObjectModelScreen /> */}
      <TareaScreen />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
