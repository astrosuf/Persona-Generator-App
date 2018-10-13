import React, {Component} from 'react';
import {View} from 'react-native';
import {MonoText} from './StyledText';

export default class DetailField extends Component{ 

    render() {
        console.log(this.props)
        return (
            <View>
                <MonoText>
                    {this.props.title}
                </MonoText>
                <MonoText>
                    {this.props.value}
                </MonoText>
            </View>
        )
    }
}