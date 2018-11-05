import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {MonoText} from "../components/StyledText";
import { Headline, Divider } from 'react-native-paper';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'About Us',
  };

  render() {
    
    return (
      <ScrollView style={styles.container}>
        <Headline><MonoText>Purpose:</MonoText></Headline>
        <MonoText>
          {`Persona Generator is a tool that helps anyone across any industry generate a random person. This app utilises a commonly used API ("http://randomuser.me/api").
          `}
        </MonoText>
        <MonoText>
          {`Understanding customers and processes is a very common practice across different industries such as marketting and business analysis. Designing persona's of a person who might use a process can be a very tedious task. This tool will help generate details of a person to help make the process of persona creation easier
          `}
        </MonoText>
        <Divider style={{borderColor:"black", borderWidth: 0.5}}/>

        <Headline><MonoText>Future State:</MonoText></Headline>
        <MonoText>
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
