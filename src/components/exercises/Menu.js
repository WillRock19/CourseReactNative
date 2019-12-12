import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Reverse from './Reverse';
import EvenOdd from './EvenOdd';
import SimpleText from './SimpleText';

const stackNavigator = createDrawerNavigator(
  {
    ReverseText: {
      screen: () => <Reverse text={'bored'} />,
      navigationOptions: {title: 'Reverse my text'},
    },
    OddOrEven: {
      screen: () => <EvenOdd number={19} />,
      navigationOptions: {title: 'Define number is odd or even'},
    },
    SimpleText: {
      screen: SimpleText,
    },
  },
  {
    drawerWidth: 300,
  },
);

const Menu = createAppContainer(stackNavigator);

export default Menu;

//     ReverseText:{
// screen: () => <Reverse text={'bored'}></Reverse>,
// navigationOptions: { title: 'Reverse my text' }
//     },
//     OddOrEven:{
//         screen: () => <EvenOdd number={19}></EvenOdd>,
//         navigationOptions: { title: 'Define number is odd or even' }
//     },
//     SimpleText: {
//         screen: SimpleText
//
