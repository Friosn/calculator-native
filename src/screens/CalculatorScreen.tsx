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
    //I will have to make all the possible validations here, afterwards I will pass it to a hook to clean the code
    //Check if we do have already a floatNumber point separator
    if (result.includes('.') && numberString === '.') return;
    //Check if there is already a 0
    if (result === '0' && numberString === '0') return;
    //Check if the number begins with a useless 0
    if (result.startsWith('0') || result.startsWith('-0')) {
      if (numberString === '.') {
        setResult(result + numberString);
      } else if (result.includes('.') && numberString === '0') {
        setResult(result + numberString);
      } else if (result.includes('.')) {
        setResult(result + numberString);
      } else if (numberString !== '0' && !result.includes('.')) {
        if (result.includes('-')) {
          return setResult('-' + numberString);
        } else {
          setResult(numberString);
        }
      } else if (numberString === '0' && !result.includes('.')) {
        setResult(result);
      }
    } else {
      setResult(result + numberString);
    }
  };

  const deleteLast = () => {
    setResult(result.slice(0, -1));
    if (result.length === 1 || (result.includes('-') && result.length === 2)) {
      setResult('0');
    }
  };
  const changePosivity = () => {
    if (result.includes('-')) {
      setResult(result.replace('-', ''));
    } else {
      setResult('-' + result);
    }
  };

  /*   const sum = (a: string, b: string) => {
    return a + b;
  };
 */
  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultHistory}>{lastResult}</Text>
      <Text
        style={styles.results}
        adjustsFontSizeToFit={true}
        numberOfLines={1}>
        {result}
      </Text>
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
          action={changePosivity}
        />
        <CalcButton
          text="del"
          color="#9B9B9B"
          textColor="black"
          action={deleteLast}
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
