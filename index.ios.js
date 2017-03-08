// import library to help create a component
import React from 'react'; // component behaviour and make them work together
import { Text, AppRegistry } from 'react-native'; // convert output into native widget display on screen + default widget library
// import Text and AppRegistry from react native library


// create a component is a javascript function that return some amount of JSX
// => then react native is gonna render that JSX on the screen
const App = () => (
    <Text>Some Text</Text> // looks like HTML but it's a javascript dialect called JSX that hide javascript called
  );

// render it to the device
AppRegistry.registerComponent('Project', () => App); // app name & App JSX