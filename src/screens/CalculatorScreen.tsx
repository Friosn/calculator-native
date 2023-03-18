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

  const insertNumber = (numberString: string) => {
    setResult(result + numberString);
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
        <CalcButton
          text="+/-"
          color="#9B9B9B"
          textColor="black"
          action={insertNumber}
        />
        <CalcButton
          text="%"
          color="#9B9B9B"
          textColor="black"
          action={insertNumber}
        />
        <CalcButton text="/" color="#FF9427" action={insertNumber} />
      </View>
      <View style={styles.buttonLine}>
        <CalcButton text="7" action={insertNumber} />
        <CalcButton text="8" action={insertNumber} />
        <CalcButton text="9" action={insertNumber} />
        <CalcButton text="x" color="#FF9427" action={insertNumber} />
      </View>
      <View style={styles.buttonLine}>
        <CalcButton text="4" action={insertNumber} />
        <CalcButton text="5" action={insertNumber} />
        <CalcButton text="6" action={insertNumber} />
        <CalcButton text="-" color="#FF9427" action={insertNumber} />
      </View>
      <View style={styles.buttonLine}>
        <CalcButton text="1" action={insertNumber} />
        <CalcButton text="2" action={insertNumber} />
        <CalcButton text="3" action={insertNumber} />
        <CalcButton text="+" color="#FF9427" action={insertNumber} />
      </View>
      <View style={styles.buttonLine}>
        <CalcButton text="0" btnWidth action={insertNumber} />
        <CalcButton text="." action={insertNumber} />
        <CalcButton text="=" color="#FF9427" action={insertNumber} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
