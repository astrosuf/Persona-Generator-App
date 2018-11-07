import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {MonoText} from "../components/StyledText";
import { Headline, Divider, Title } from 'react-native-paper';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'About Persona Generator',
  };

  render() {
    
    return (
      <View style={styles.container}>
        <Image 
          source={require('../../assets/images/icon.png')}
          style={styles.imageStyle}
        />
        <Headline style={{marginBottom:30}}>Random Persona Generator</Headline>
        <MonoText style={styles.textStyle}>
          {`Persona Generator is a tool that helps anyone across any industry generate a random person. This app utilises a commonly used API ("http://randomuser.me/api").`}
        </MonoText>
        <MonoText style={styles.textStyle}>
          {`The initial offering of this tool is to provide a random person generator. The roadmap looks to include extra functionality such as saving personas, sharing personas and potentially editing personas. These features will be implemented incrementally,`}
        </MonoText>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "white",
    alignItems:"center",
    justifyContent:"center"
  },
  textStyle:{
    textAlign: "justify",
    fontSize: 17  ,
    padding: 15
  },
  imageStyle:{
    height: 170, 
    width: 170,
    marginBottom: 5
  }
});
