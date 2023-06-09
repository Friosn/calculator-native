import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import CalculatorScreen from './src/screens/CalculatorScreen';
import {styles} from './src/theme';

const App = () => {
  return (
    <SafeAreaView style={styles.backgroundMain}>
      <StatusBar backgroundColor="midnightblue" barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  );
};

export default App;
