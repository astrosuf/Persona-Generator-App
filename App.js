import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';

//====== Redux Imports ======= //
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import {createLogger} from "redux-logger"
import reducers from "./src/reducers";
import thunk from 'redux-thunk'
//====== Redux Imports ======= //

import AppNavigator from './src/navigation/AppNavigator';
import { Provider as PaperProvider } from 'react-native-paper';

const logger = createLogger({
  predicate: true,
  collapsed: true,
  colors: true,
  diff: true
})

const store = createStore(reducers, applyMiddleware(logger, thunk))

export default class App extends React.Component {
  state = {
    isLoadingComplete: false,
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      return (
        <View style={styles.container}>
          <Provider store={store}>
            <PaperProvider>
              <AppNavigator />
            </PaperProvider>
          </Provider>
        </View>
      );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'calibri': require('./assets/fonts/Calibri.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
