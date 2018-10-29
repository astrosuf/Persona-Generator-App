import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ActivityIndicator
} from 'react-native';
import { connect } from "react-redux"
import {getPersonaDetails} from "../actions/PersonaActions"
import _ from 'lodash';

const IndividualAttribute = ( key, value) => {
  console.log(`key: ${key}, value: ${value}`);
  return (
    <Text>
      This Works
    </Text>
  )
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    // header: null,
    title: 'Persona Generator',
  };

  componentDidMount() {
    this.props.getPersonaDetails()
  }


  renderPersonaDetails(persona){
    console.log(persona)
    return Object.keys(persona).map((key)=> {
      if(typeof persona[key] !== 'object'){
        return(
          <Text key={key}>{key} : {persona[key]}</Text>
        )
      } else if(typeof persona[key] === 'object' && persona[key] !== null) {
        console.log(persona[key])
        return this.renderPersonaDetails(persona[key])
      }
    })
  }

  render() {
    const {isLoading, persona} = this.props
    return (
      isLoading ?
      <ActivityIndicator large/>
      :
      <View style={styles.container}>
         {this.renderPersonaDetails(this.props.persona)}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPersonaDetails: () => dispatch(getPersonaDetails())
  }
}

const mapStateToProps = ({personaDetails}) => {
  const {isLoading, persona} = personaDetails

  return {
    isLoading,
    persona
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)

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
    color: 'black'
  }
});
