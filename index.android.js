// import library to help create a component
import React from 'react'; 
import { View, AppRegistry } from 'react-native'; // destructured import : import Text and AppRegistry from react native library
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

// create a component : javascript function that return some amount of JSX
const App = () => {
  return (
  <View style={{ flex: 1 }}>
    <Header headerText={'Albums'} />
    <AlbumList/>
  </View>    
  );
}

// render it to the device : Appregistry is only used to show the root component, then this root component will display all his childs
AppRegistry.registerComponent('Project', () => App); // app name & get JSX return by component App