import React, { Component } from 'react';
import { View, StyleSheet} from 'react-native';
import { Divider, List } from 'react-native-paper';
import { MonoText } from './StyledText';

export default class PersonaField extends Component {
  render() {
    return (
        <View>
            <View style={{flexDirection: "row"}}>
                <MonoText style={styles.title}>{this.props.title}:</MonoText>
                <MonoText style={styles.content}> {this.props.content}</MonoText>
            </View>
            <Divider style={styles.divider}/>
        </View>
    )
  }
}

const styles = StyleSheet.create({
    divider:{
        borderColor: "black",
        borderWidth: 1
    },
    title:{
        padding: 15,
        color: "grey"
    },
    content:{
        padding: 15,
    }
})    