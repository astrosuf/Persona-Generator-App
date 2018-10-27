import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text
} from 'react-native';
import { connect } from "react-redux"
import {getPersonaDetails} from "../actions/PersonaActions"
import axios from 'axios';
import _ from 'lodash';

class HomeScreen extends React.Component {
  static navigationOptions = {
    // header: null,
    title: 'Persona Generator',
  };

  componentDidMount() {
    this.props.getPersonaDetails()
  }

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

const mapDispatchToProps = (dispatch) => {
  return {
    getPersonaDetails: () => dispatch(getPersonaDetails())
  }
}

export default connect(null,mapDispatchToProps)(HomeScreen)

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
