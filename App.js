import React from 'react';
import RouterNavigation from './src/Navigation/RouterNavigation';
import {configureStore} from "./src/state";
import {Provider} from "react-redux";

const store = configureStore();

const App = () => {
  return <Provider store={store}><RouterNavigation /></Provider>;
};

export default App;
