import React from 'react';
import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';

export default Simple = () => {
    return (
      <View style={style.container}>
        <Text style={style.bigFont}>Hello World!</Text>
      </View>
    );
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bigFont:{
        fontSize: 40,
    }
});
  