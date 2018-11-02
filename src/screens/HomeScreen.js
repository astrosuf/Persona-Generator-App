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
import { Divider, List,Card, Button, IconButton} from 'react-native-paper';
//========= Might not be needed ========= 
import PersonaField from "../components/PersonaField";
import moment from "moment";
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
      <View style={styles.container}>
          <Card style={{alignItems: "center", borderTopWidth: 2,borderBottomWidth: 2}}> 
            <Card.Cover
              source={{uri: persona.picture.large}}
              style={{height: 200, width: 200}}
              resizeMode="contain"
            />
          </Card>
        <ScrollView >        
          <PersonaField title="Title" content={persona.name.title}/>
          <PersonaField title="First Name" content={persona.name.first}/>
          <PersonaField title="Last Name" content={persona.name.last}/>
          <PersonaField title="Gender" content={persona.gender}/>
          <PersonaField title="Birthday" content={moment(persona.dob.date).format("Do MMMM YYYY")}/>
          <PersonaField title="Age" content={persona.dob.age}/>
          <PersonaField title="Email" content={persona.email}/>
          <PersonaField title="Phone Number" content={persona.cell}/>
        </ScrollView>
        <Button dark mode="contained" style={styles.generateButtonStyle}>
          Generate New Persona
        </Button>
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
  },
  generateButtonStyle:{
    flex:1,
    borderRadius: 0,
    justifyContent:"center",
  }
});
