// import library to help create a component
import React from 'react'; 
import { Text, AppRegistry } from 'react-native'; // destructured import : import Text and AppRegistry from react native library
import Header from './src/components/header';

// create a component : javascript function that return some amount of JSX
const App = () => (
    <Header/> // looks like HTML but it's a javascript dialect called JSX that hide javascript called
  );

// render it to the device : Appregistry is only used to show the root component, then this root component will display all his childs
AppRegistry.registerComponent('Project', () => App); // app name & get JSX return by component App