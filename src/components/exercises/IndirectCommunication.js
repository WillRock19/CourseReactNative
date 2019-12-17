/*
    This file represents the indirect communication, where a component's son can change the state of it's father 
    by using the a callback function (in this case, the onCHangeInputText function that is passed to the son)
*/

import React, { Component } from 'react';
import { View, Text, TextInput } from 'react-native';
import DefaultStyle from './styles/Default'

const MyInput = props =>
    <View>
        <TextInput 
            value={props.text} 
            style={DefaultStyle.input} 
            onChangeText={props.onChangeFunction} />
    </View>

export default class SyncText extends Component{

    constructor(){
        super();
        this.state = {
            text: ''
        };
    }

    onChangeInputText = text => {
        this.setState({ text }); //dont't need to write as "text: text" because both the ptoperty and the variable have the same name
    }

    render(){
        return (
            <View>
                <Text style={DefaultStyle.font40}>{this.state.text}</Text>
                <MyInput text={this.state.text} onChangeFunction={this.onChangeInputText}></MyInput>
            </View>
        );
    }
}
