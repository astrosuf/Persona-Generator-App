import React from 'react';
import {StyleSheet, ScrollView, Image} from 'react-native';
import {MonoText} from "../components/StyledText";
import { Headline, Divider, Title } from 'react-native-paper';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'About Persona Generator',
  };

  render() {
    
    return (
      <ScrollView style={styles.container}>
        <Image 
          source={require('../../assets/images/icon.png')}
          style={{margin: 20, alignSelf:"center", height: 150, width: 150}}
        />
        <Headline><MonoText>Purpose:</MonoText></Headline>
        <MonoText>
          {`Persona Generator is a tool that helps anyone across any industry generate a random person. This app utilises a commonly used API ("http://randomuser.me/api").
          `}
        </MonoText>

        <Headline><MonoText>Future State:</MonoText></Headline>
        <MonoText>
          {`We plan to add to this app and make it multi purpose we will look to implement functionality such as Saving a Persona, Sending/Sharing, filtering data. This is increment one to a more robust tool for anyone that needs to generate people
          `}
        </MonoText>

        <Headline><MonoText>Revenue Ads:</MonoText></Headline>
        <MonoText>
          {`This project is completely self funded, in an effort to make a small operations revenue we display google MobAds as a banner above each generated persona
          `}
        </MonoText>


        <Title><MonoText>Any feedback is appriciated, thank you for using Persona Generator</MonoText></Title>
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
