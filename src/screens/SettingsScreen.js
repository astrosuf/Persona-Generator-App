import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {MonoText} from "../components/StyledText";
import { Headline } from 'react-native-paper';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'About Me',
  };

  render() {
    
    return (
      <ScrollView style={styles.container}>
        <Headline><MonoText>Use:</MonoText></Headline>
        <MonoText>
          Persona Generator is a tool that helps anyone across any industry generate a random person.
          This app utilises a commonly used API ("http://randomuser.me/api").
        </MonoText>

        <Headline><MonoText>Purpose:</MonoText></Headline>
        <MonoText>
          Being a business analyst, understanding customers and processes is a very common practice. 
          Designing persona's and detailing a person who might use a process is a very big task. 
          I decided to help make this process a little easier, generating the right details to define a person 
          would be the first step. 
          I plan to add to this app and make it multi purpose I will look to implement functionality such as 
          Saving a Persona, Sending/Sharing, filtering data. This is increment one to a more robust tool for 
          anyone that needs to generate people
        </MonoText>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white"
  },
  title:{

  },
  textStyle:{

  }
});
