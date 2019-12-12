import React from 'react';
import {Text, View} from 'react-native';
import Default from './styles/Default';

function OddOrEven(number) {
  const result = number % 2 === 0 ? 'Odd number' : 'Even number';
  return <Text style={Default.exercise}>It`s an {result} number</Text>;
}

export default props => {
  return <View>{OddOrEven(props.number)}</View>;
};
