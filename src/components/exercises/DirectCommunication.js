import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/* 
    The React.Children.map is a way to iterate through all children of a component. Since a children can be anything
    (a function, a string, a number, a real component, etc), we could not iterate through it using a simple JS map function,
    but react give us the Children.map, that abstract the type of the children and use it like it was a generic type.
    
    For more info, see: https://medium.com/@oieduardorabelo/react-avan%C3%A7ado-utilizando-props-children-como-fun%C3%A7%C3%A3o-de-primeira-classe-f6be8acdfaf1
*/
const addFatherSurnameToChildren = (children, fatherProps) => {
    return React.Children.map(children, child => React.cloneElement(child, {...fatherProps, ...child.props}));
}

/* 
    The React.Children.only throws an exception if the component's child has more than one item, 
    and the cloneElement clones the child and adds to it the fatherProps and then the child.props 
    (if one of these two has the same property with different values - as it happens for the 'name' property -, 
    the last one will be the one that will stick. In other words: the cloneElement gets the fatherProps's 'name', 
    but the override it with the child.props's name)
*/

const addFatherSurnameToSingleChild = (child, fatherProps) => {
    return React.cloneElement(React.Children.only(child), {...fatherProps, ...child.props});
}

const Son = props => 
    <View>
        <Text style={[fontStyle.style, marginStyle.childMargin]}>Son: { props.name } { props.surname }</Text>
    </View>

const Father = props => 
    <View>
        <Text style={[fontStyle.style, marginStyle.fatherMargin]}>Father: { props.name } { props.surname }</Text>
        {addFatherSurnameToChildren(props.children, props)}
    </View>

const FatherWithOneSon = props => 
    <View>
        <Text  style={[fontStyle.style, marginStyle.fatherMargin]}>Father: { props.name } { props.surname }</Text>
        {addFatherSurnameToSingleChild(props.children, props)}
    </View>

export const GrandFather = props => {
    return (
    <View>
        <Text {...fontStyle}>Grandfather: { props.name } { props.surname }</Text>
        <Father name='André' surname={props.surname}>
            <Son name='Marcos'/>
            <Son name='Matthew'/>
            <Son name='Lira'/>
        </Father>
        <FatherWithOneSon {...props} name='Marcos'>
            <Son name='"Single child"' />
        </FatherWithOneSon>
    </View>
    );
}

export default GrandFather;

const fontStyle = { style: { fontSize: 25 } };

const marginStyle = StyleSheet.create({
    fatherMargin: {
        marginLeft: 20,
        marginTop: 10
    },
    childMargin: { 
        marginLeft: 40
    }
});
