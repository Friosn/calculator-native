import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

interface Props {
  text: string;
  color?: string;
  textColor?: string;
  btnWidth?: boolean;
  action?: () => void;
}

const CalcButton = ({
  text,
  color = '#2D2D2D',
  textColor = 'white',
  btnWidth = false,
  action,
}: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.4} onPress={action}>
      <View
        style={{
          ...styles.button,
          backgroundColor: color,
          width: btnWidth ? 180 : 80,
        }}>
        <Text style={{...styles.buttonText, color: textColor}}>{text}</Text>
      </View>
    </TouchableOpacity>
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
