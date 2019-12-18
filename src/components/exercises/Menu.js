import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import Reverse from './Reverse';
import EvenOdd from './EvenOdd';
import SimpleText from './SimpleText';
import GrandFather from './DirectCommunication';
import SyncText from './IndirectCommunication';
import SimpleStackMenu from './SimpleStackMenu';
import ListFlex from './ListFlex';
import Circles from './Circles';

const drawerNavigator = createDrawerNavigator(
  {
    LayoutWithFlexBox: {
      screen: Circles,
      navigationOptions: {title: 'Circles created with Flex-box'},
    },
    ListOfMovies: {
      screen: ListFlex,
      navigationOptions: {title: 'List of movies displaying with flex-box'}
    },
    SimpleStackMenu: {
      screen: SimpleStackMenu,
      navigationOptions: {title: 'Example of a stack menu navigation'}
    },
    FatherToSonCommunication: {
      screen: () => <GrandFather name='Hernesto' surname='Murdock' />,
      navigationOptions: { title: 'Father-to-son communication via props' }
    },
    SonToFatherCommunication:{
      screen: SyncText,
      navigationOptions: { title: 'Son-to-Father communication via callback' }
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

const Menu = createAppContainer(drawerNavigator);
export default Menu;