import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { connect } from "react-redux"
import {getPersonaDetails} from "../actions/PersonaActions"
import {MonoText} from "../components/StyledText";
import { Divider, List } from 'react-native-paper';
import _ from 'lodash';

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
          <List.Item
            key={key}
            title={ key + " : " + persona[key]}
          />
        )
      } else if(typeof persona[key] === 'object' && persona[key] !== null) {
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
      <ScrollView style={styles.container}>
         {this.renderPersonaDetails(this.props.persona)}
      </ScrollView>
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
