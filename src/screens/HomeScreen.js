import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text
} from 'react-native';

import axios from 'axios';
import _ from 'lodash';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    // header: null,
    title: 'Persona Generator',
  };

  render() {
    return (
      <View style={styles.container}>
         <Text>
           Adding Redux.
         </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  personaPicture: {
    flex: 0.3,
    backgroundColor: 'green'
  },
  personaDetails: {
    flex: 0.7,
    backgroundColor: 'purple'
  }
});
