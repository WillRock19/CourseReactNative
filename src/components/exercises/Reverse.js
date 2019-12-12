import React from 'react';
import { Text } from 'react-native';
import Default from './styles/Default';

export const Reverse = (props) => {
    const invertedText = props.text.split('').reverse().join('');
    return (
        <React.Fragment>
            <Text style={Default.exercise}>The original text was: {props.text}</Text>
            <Text style={Default.exercise}>The inverted text is: {invertedText}</Text>
        </React.Fragment>
    );
};

export default Reverse;