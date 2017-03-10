import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

// we used class based component != functional component
// because we have dynamic states & different states to render on the screen 
class AlbumList extends Component {
  
  // when you change state with this.setState() it will call again the render callback
  state = { albums: [] }
  
  // life cycle method : callback onCreate
  componentWillMount() {
    axios.get('http://rallycoding.herokuapp.com/api/music_albums')
    .then(response => this.setState({ albums: response.data }));
  }
  
  // map function : for each album will return a text tag which contains album.title
  renderAlbums() {
    return this.state.albums.map(
      album => <AlbumDetail key={album.title} album={album}/>); // to reference a javascript variable into JSX you must place it into curly braces
  }
  
  // only mandatory method of component class
  render() {
    console.log(this.state);
    return (
      <View>
        {this.renderAlbums()}
      </View>
    );
  }
  
};

export default AlbumList;