import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text
} from 'react-native';

import axios from 'axios';
import _ from 'lodash';

import DetailField from '../components/DetailField';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    // header: null,
    title: 'Persona Generator',
  };

  constructor(props){
    super(props)
    this.state = {
      personaDetails:{},
    }
  }

  componentDidMount(){
    //axios get call to randomuser API
    axios.get("https://randomuser.me/api/")
    .then((response) => {
      this.setState({personaDetails: response.data.results[0]})
    })
  }

  renderDetailField(){
    const details = [];
    
    _.forOwn(this.state.personaDetails, (value, key) => {
      if(typeof value !== 'object'){
        details.push(<DetailField key={key} title={key} value={value} />)
      }
    })

    return details
  }

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.personaPicture}>
             
          </View>
          <View style={styles.personaDetails}>
            {this.renderDetailField()}
          </View>
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
