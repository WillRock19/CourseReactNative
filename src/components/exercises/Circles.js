import React from 'react';
import {View, StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    height: '100%',
  },
  norte: {
    flex: 1,
    backgroundColor: '#bdf9ed',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centro: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sul: {
    flex: 1,
    backgroundColor: '#bdf9c4',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  circulo: {
    width: 100,
    height: 100,
    backgroundColor: '#f47f61',
    borderRadius: 50,
  },
});

const Circulo = props => <View style={style.circulo} />;

export default props => {
  return (
    <View style={style.container}>
      <View style={style.norte}>
        <Circulo />
      </View>
      <View style={style.centro}>
        <Circulo />
        <Circulo />
        <Circulo />
      </View>
      <View style={style.sul}>
        <Circulo />
      </View>
    </View>
  );
};
