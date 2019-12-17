import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Reverse from './Reverse';
import EvenOdd from './EvenOdd';
import SimpleText from './SimpleText';
import GrandFather from './DirectCommunication';

const stackNavigator = createDrawerNavigator(
  {
    HierarchicalCommunication: {
      screen: () => <GrandFather name='Hernesto' surname='Murdock' />,
      navigationOptions: { title: 'Hierarchical comm. via props' }
    },
    ReverseText: {
      screen: () => <Reverse text={'bored'} />,
      navigationOptions: {title: 'Reverse my text'},
    },
    OddOrEven: {
      screen: () => <EvenOdd number={19} />,
      navigationOptions: {title: 'Define if number is odd or even'},
    },
    SimpleText: {
      screen: SimpleText,
      navigationOptions: {title: 'Simple "Hello World" component'},
    },
  },
  {
    drawerWidth: 300,
  },
);

const Menu = createAppContainer(stackNavigator);

export default Menu;