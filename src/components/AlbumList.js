import React, { Component } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

// we used class based component != functional component
// because we have dynamic states & different states to render on the screen 
class AlbumList extends Component {
  
  // life cycle method : callback onCreate
  componentWillMount() {
    console.log('componentWillMount in AlbumList'); // launch debugger with Cmd+D > debug JS > right click > inspect > Console
    // debugger; // set a break point in the code to stop javascript a see what is going on
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    .then(response => console.log(response));
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