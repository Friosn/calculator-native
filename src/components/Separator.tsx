import React from 'react';
import {View, ViewStyle} from 'react-native';

const Separator = () => {
  return <View style={separatorStyles} />;
};

const separatorStyles: ViewStyle = {
  height: 1,
  width: '100%',
  backgroundColor: 'white',
  marginVertical: 10,
  opacity: 0.3,
};

export default Separator;
