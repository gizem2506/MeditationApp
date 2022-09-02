import React, {useState, useEffect} from 'react';
import RouterNavigation from './src/Navigation/RouterNavigation';
import {configureStore} from './src/state';
import {Provider} from 'react-redux';
import {View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <RouterNavigation />
    </Provider>
  );
};

export default App;
