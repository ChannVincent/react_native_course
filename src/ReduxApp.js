import React from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import LibraryList from './components/LibraryList';

const App = () => {
  return (
    <Provider store={ createStore(reducers) }>
      <View>
        <Header headerText='Redux' />
        <LibraryList />
      </View>
    </Provider>
  )
}

export default App;