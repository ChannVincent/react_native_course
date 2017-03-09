import React, { Component } from 'react';
import { View, Text } from 'react-native';

// we used class based component != functional component
// because we have dynamic states & different states to render on the screen 
class AlbumList extends Component {
  
  // life cycle method : callback onCreate
  componentWillMount() {
    console.log('componentWillMount in AlbumList'); // launch debugger with Cmd+D > debug JS > right click > inspect > Console
    // debugger; // set a break point in the code to stop javascript a see what is going on
  }
  
  // only mandatory method of component class
  render() {
    return (
      <View>
        <Text>Album List !!!</Text>
      </View>
    );
  }
  
};

export default AlbumList;