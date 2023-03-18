import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CalcButton from '../components/CalcButton';
import {styles} from '../theme';

const CalculatorScreen = () => {
  const [result, setResult] = useState(1500);
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultHistory}>{result}</Text>
      <Text style={styles.results}>{result}</Text>

      <View style={styles.buttonLine}>
        <CalcButton text="C" color="#9B9B9B" />
        <CalcButton text="+/" color="#9B9B9B" />
        <CalcButton text="%" color="#9B9B9B" />
        <CalcButton text="/" color="#FF9427" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
