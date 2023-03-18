import React, {useState} from 'react';
import {Text, View} from 'react-native';
import CalcButton from '../components/CalcButton';
import Separator from '../components/Separator';
import {styles} from '../theme';

const CalculatorScreen = () => {
  const [result, setResult] = useState('150000');
  const [lastResult, setLastResult] = useState('500');

  const clean = () => {
    result !== '0' ? setResult('0') : setLastResult('0');
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultHistory}>{lastResult}</Text>
      <Text style={styles.results}>{result}</Text>
      <Separator />
      <View style={styles.buttonLine}>
        <CalcButton
          text={result !== '0' ? 'C' : 'AC'}
          color="#9B9B9B"
          textColor="black"
          action={clean}
        />
        <CalcButton text="+/-" color="#9B9B9B" textColor="black" />
        <CalcButton text="%" color="#9B9B9B" textColor="black" />
        <CalcButton text="/" color="#FF9427" />
      </View>
      <View style={styles.buttonLine}>
        <CalcButton text="7" />
        <CalcButton text="8" />
        <CalcButton text="9" />
        <CalcButton text="x" color="#FF9427" />
      </View>
      <View style={styles.buttonLine}>
        <CalcButton text="4" />
        <CalcButton text="5" />
        <CalcButton text="6" />
        <CalcButton text="-" color="#FF9427" />
      </View>
      <View style={styles.buttonLine}>
        <CalcButton text="1" />
        <CalcButton text="2" />
        <CalcButton text="3" />
        <CalcButton text="+" color="#FF9427" />
      </View>
      <View style={styles.buttonLine}>
        <CalcButton text="0" btnWidth />
        <CalcButton text="." />
        <CalcButton text="=" color="#FF9427" />
      </View>
    </View>
  );
};

export default CalculatorScreen;
