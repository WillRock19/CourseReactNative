import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component{
  render(){
    return(
      <View style={style.container}>
        <Text style={style.f20}>Primeiro App 2</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  f20:{
    fontSize: 40
  }
});
