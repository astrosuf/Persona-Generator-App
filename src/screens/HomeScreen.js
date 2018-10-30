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
//========= Might not be needed ========= 
import {MonoText} from "../components/StyledText";
import { Divider, List } from 'react-native-paper';
//========= Might not be needed ========= 
import PersonaField from "../components/PersonaField";
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
    {console.log(isLoading)}    
    {console.log(persona)}  
    return (
      isLoading || _.isEmpty(persona) ?
      <ActivityIndicator large/>
      :
      <ScrollView style={styles.container}>        
        <PersonaField title="Title" content={persona.name.title}/>
        <PersonaField title="First Name" content={persona.name.first}/>
        <PersonaField title="Last Name" content={persona.name.last}/>
        <PersonaField title="Gender" content={persona.gender}/>
        <PersonaField title="Birthday" content={persona.dob.date}/>
        <PersonaField title="Age" content={persona.dob.age}/>
        <PersonaField title="Email" content={persona.email}/>
        <PersonaField title="Phone Number" content={persona.cell}/>
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
