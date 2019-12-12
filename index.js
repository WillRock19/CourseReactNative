/**
 * @format
 */

import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import Menu from './src/components/exercises/Menu';

AppRegistry.registerComponent(appName, () => Menu);
