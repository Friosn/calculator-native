import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from '../theme';

const CalculatorScreen = () => {
  const [result, setResult] = useState(1500);
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultHistory}>{result}</Text>
      <Text style={styles.results}>{result}</Text>

      <View style={styles.buttonLine}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>1</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>2</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>3</Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>4</Text>
        </View>
      </View>
    </View>
  );
};

export default CalculatorScreen;
