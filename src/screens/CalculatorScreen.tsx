import React, {useRef, useState} from 'react';
import {Text, View} from 'react-native';
import CalcButton from '../components/CalcButton';
import Separator from '../components/Separator';
import {styles} from '../theme';

enum Operators {
  sum,
  substract,
  multiply,
  divide,
}

const CalculatorScreen = () => {
  const [num, setNum] = useState('150000');
  const [previousNum, setPreviousNum] = useState('500');

  const lastOperation = useRef<Operators>();

  const clean = () => {
    num !== '0' ? setNum('0') : setPreviousNum('0');
  };

  const insertNumber = (numberString: string) => {
    //I will have to make all the possible validations here, afterwards I will pass it to a hook to clean the code
    //Check if we do have already a floatNumber point separator
    if (num.includes('.') && numberString === '.') return;
    //Check if there is already a 0
    if (num === '0' && numberString === '0') return;
    //Check if the number begins with a useless 0
    if (num.startsWith('0') || num.startsWith('-0')) {
      if (numberString === '.') {
        setNum(num + numberString);
      } else if (num.includes('.') && numberString === '0') {
        setNum(num + numberString);
      } else if (num.includes('.')) {
        setNum(num + numberString);
      } else if (numberString !== '0' && !num.includes('.')) {
        if (num.includes('-')) {
          return setNum('-' + numberString);
        } else {
          setNum(numberString);
        }
      } else if (numberString === '0' && !num.includes('.')) {
        setNum(num);
      }
    } else {
      setNum(num + numberString);
    }
  };

  const deleteLast = () => {
    setNum(num.slice(0, -1));
    if (num.length === 1 || (num.includes('-') && num.length === 2)) {
      setNum('0');
    }
  };
  const changePosivity = () => {
    if (num.includes('-')) {
      setNum(num.replace('-', ''));
    } else {
      setNum('-' + num);
    }
  };

  const operationParams = () => {
    if (num.endsWith('.')) {
      setPreviousNum(num.slice(0, -1));
    } else {
      setPreviousNum(num);
    }
    setNum('0');
  };

  const sumBtn = () => {
    operationParams();
    lastOperation.current = Operators.sum;
  };

  const subsBtn = () => {
    operationParams();
    lastOperation.current = Operators.substract;
  };

  const multiplyBtn = () => {
    operationParams();
    lastOperation.current = Operators.multiply;
  };

  const divideBtn = () => {
    operationParams();
    lastOperation.current = Operators.divide;
  };

  const calculate = () => {
    const num1 = Number(num);
    const num2 = Number(previousNum);
    console.log(num1, num2);

    switch (lastOperation.current) {
      case Operators.sum:
        setNum(`${num1 + num2}`);
        break;
      case Operators.substract:
        setNum(`${num2 - num1}`);
        break;
      case Operators.multiply:
        setNum(`${num1 * num2}`);
        break;
      case Operators.divide:
        setNum(`${num2 / num1}`);
        break;
      default:
        break;
    }
    setPreviousNum('0');
  };

  return (
    <View style={styles.calculatorContainer}>
      <Text style={styles.resultHistory}>{previousNum}</Text>
      <Text
        style={styles.results}
        adjustsFontSizeToFit={true}
        numberOfLines={1}>
        {num}
      </Text>
      <Separator />
      <View style={styles.buttonLine}>
        <CalcButton
          text={num !== '0' ? 'C' : 'AC'}
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
        <CalcButton text="/" color="#FF9427" action={divideBtn} />
      </View>
      <View style={styles.buttonLine}>
        <CalcButton text="7" action={insertNumber} />
        <CalcButton text="8" action={insertNumber} />
        <CalcButton text="9" action={insertNumber} />
        <CalcButton text="x" color="#FF9427" action={multiplyBtn} />
      </View>
      <View style={styles.buttonLine}>
        <CalcButton text="4" action={insertNumber} />
        <CalcButton text="5" action={insertNumber} />
        <CalcButton text="6" action={insertNumber} />
        <CalcButton text="-" color="#FF9427" action={subsBtn} />
      </View>
      <View style={styles.buttonLine}>
        <CalcButton text="1" action={insertNumber} />
        <CalcButton text="2" action={insertNumber} />
        <CalcButton text="3" action={insertNumber} />
        <CalcButton text="+" color="#FF9427" action={sumBtn} />
      </View>
      <View style={styles.buttonLine}>
        <CalcButton text="0" btnWidth action={insertNumber} />
        <CalcButton text="." action={insertNumber} />
        <CalcButton text="=" color="#FF9427" action={calculate} />
      </View>
    </View>
  );
};

export default CalculatorScreen;
