import React from 'react';
import {Text, View} from 'react-native';
import CalcButton from '../components/CalcButton';
import Separator from '../components/Separator';
import {styles} from '../theme';
import {useCalculator} from '../hooks/useCalculator';

const CalculatorScreen = () => {
  const {
    clean,
    insertNumber,
    changePosivity,
    deleteLast,
    subsBtn,
    multiplyBtn,
    sumBtn,
    divideBtn,
    calculate,
    num,
    previousNum,
  } = useCalculator();

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
