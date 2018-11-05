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
        paddingTop: 15,
        paddingLeft: 10,
        color: "grey",
        flex: 0.3
    },
    content:{
        paddingLeft: 10,
        paddingTop: 15,
        paddingBottom: 15,
        flex: 0.7,
        alignItems: "flex-start",
        justifyContent:"flex-end"
    },
    
    
})    