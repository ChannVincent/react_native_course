import React from 'react';
import { Text, Image, View } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = ({ album }) => {
  
  const { title, artist, thumbnail_image } = album;
  const { thumbnailStyle, containerStyle } = styles;
  
  return (
    <Card>
      <CardSection>
        <View>
          <Image 
            style={thumbnailStyle} 
            source={{ uri : thumbnail_image }} 
            />
        </View>
        <View style={containerStyle}>
          <Text>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
    </Card> 
  );
};

const styles = {
  containerStyle: {
    justifyContent: 'space-around',
    flexDirection: 'column'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
    
  }
}

export default AlbumDetail;