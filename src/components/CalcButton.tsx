import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface Props {
  text: string;
  color: string;
}

const CalcButton = ({text, color = '#2D2D2D'}: Props) => {
  return (
    <View style={{...styles.button, backgroundColor: color}}>
      <Text style={styles.buttonText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 80,
    width: 80,
    borderRadius: 100,
    backgroundColor: '#2D2D2D',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    marginHorizontal: 8,
  },

  buttonText: {
    color: 'azure',
    fontSize: 30,
    fontWeight: '300',
  },
});

export default CalcButton;
