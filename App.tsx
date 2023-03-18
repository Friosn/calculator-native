import React from 'react';
import {View} from 'react-native';

import CalculatorScreen from './src/screens/CalculatorScreen';
import {styles} from './src/theme';

const App = () => {
  return (
    <View style={styles.backgroundMain}>
      <CalculatorScreen />
    </View>
  );
};

export default App;
