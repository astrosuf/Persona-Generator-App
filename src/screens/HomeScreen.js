import React from 'react';
import {
  Image,
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
  Platform
} from 'react-native';
import { connect } from "react-redux"
import {getPersonaDetails} from "../actions/PersonaActions"
//========= Might not be needed ========= 
import {MonoText} from "../components/StyledText";
import { Divider, List,Card, Button, IconButton} from 'react-native-paper';
//========= Might not be needed ========= 
import {
  AdMobBanner
} from 'expo'
import PersonaField from "../components/PersonaField";
import moment from "moment";
import _ from 'lodash';
import CountryCodes from 'country-code-info'

class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  componentDidMount() {
    this.props.getPersonaDetails()
  }

  renderAd(){
   return(
    Platform.OS === 'ios' ?
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-7389832824046763/5182850868" // Test ID, Replace with your-admob-unit-id
        testDeviceID="EMULATOR"
        onDidFailToReceiveAdWithError={this.bannerError} 
      />
      :
      <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-7389832824046763/9908973050" // Test ID, Replace with your-admob-unit-id
        testDeviceID="EMULATOR"
        onDidFailToReceiveAdWithError={this.bannerError} 
      />)
  }

  render() {
    const {isLoading, persona} = this.props
    return (
      isLoading || _.isEmpty(persona) ?
      <ActivityIndicator 
        style={styles.activityIndicator}
        color = '#6200ee'
        size = "large"
      />
      :
      <View style={styles.container}>
          {this.renderAd()}
          <ScrollView style={styles.personaDetails}> 
            
            <Card style={styles.personaPicture}> 
                <Card.Cover
                  source={{uri: persona.picture.large}}
                  style={{flex:1, height: 150, width: 150, margin: 10}}
                  resizeMode="contain"
                />
            </Card>       
            <PersonaField title="Title" content={persona.name.title}/>
            <PersonaField title="First Name" content={persona.name.first}/>
            <PersonaField title="Last Name" content={persona.name.last}/>
            <PersonaField title="Gender" content={persona.gender}/>
            <PersonaField title="Birthday" content={moment(persona.dob.date).format("Do MMMM YYYY")}/>
            <PersonaField title="Age" content={persona.dob.age}/>
            <PersonaField title="Email" content={persona.email}/>
            <PersonaField title="Phone #" content={persona.cell}/>
            <PersonaField title="City" content={persona.location.city}/>
            <PersonaField title="Country" content={CountryCodes.findCountry({'a2':(persona.nat)}).name}/>
          </ScrollView>
          <Button dark mode="contained" style={styles.generateButtonStyle} onPress={this.props.getPersonaDetails}>
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
    paddingTop: 40
  },
  personaPicture: {
    height: 155,
    alignItems: "center", 
    borderRadius: 2,
    elevation: 3,
    shadowOffset: {  width: 1,  height: 1  },
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  generateButtonStyle:{
    height: 40,
    borderRadius: 0,
    justifyContent:"center",
    backgroundColor:"#6200ee"
  },
  personaDetails:{
    flex: 0.5,
    paddingTop: 5
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80
  }
});
