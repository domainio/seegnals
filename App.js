import React from 'react';


import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './src/reducers/index.reducers';
import ReduxThunk from 'redux-thunk';
import AppNavigator from './src/AppNavigator';
import firebase from 'firebase';
import config from './config';

console.disableYellowBox = true;
export default class App extends React.Component {

  componentWillMount() {
    firebase.initializeApp(config.firebase);
  }

  render() {
    // ref={(ref) => {
    //   this._drawer = ref;
    // }}
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}