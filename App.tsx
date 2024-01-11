import React from 'react';
// import {CounterScreen} from './src/screens/CounterScreen';
import {BoxObjectModelScreen} from './src/screens/BoxObjectModelScreen';
import {SafeAreaView} from 'react-native';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      {/* <CounterScreen /> */}
      <BoxObjectModelScreen />
    </SafeAreaView>
  );
}

export default App;
