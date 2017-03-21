import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, LayoutAnimation, UIManager, Platform } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './common';
import * as actions from '../actions';

class ListItem extends Component {
  
  componentWillUpdate() {
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    LayoutAnimation.spring();
  }
  
  renderDescription() {
    const { library, expanded } = this.props;
    if (expanded) {
      return (
        <CardSection>
          <Text>{ library.description }</Text>
        </CardSection>
      )
    }
  }
  
  render() {
    const { titleStyle } = styles;
    const { id, title } = this.props.library;
    return (
      <TouchableWithoutFeedback onPress={() => { this.props.selectLibrary(id) }}>
        <View>
          <CardSection>
            <Text style={ titleStyle }>{ title }</Text>
          </CardSection>
          { this.renderDescription() }
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle:{
    fontSize: 18,
    paddingLeft: 15
  }
};

// get state from reducers attributes
// get ownProps equivalent of props from the component
const mapStateToProps = (state, ownProps) => {
    const expanded = ownProps.library.id === state.selectedLibraryId;
    return { expanded }
}

export default connect(mapStateToProps, actions)(ListItem);