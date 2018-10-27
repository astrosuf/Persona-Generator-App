import React, {Component} from 'react';
import {View} from 'react-native';
import {MonoText} from './StyledText';

export default class DetailField extends Component{ 

    render() {
        return (
            <View>
                <MonoText>
                    {this.props.title}
                    :
                    {this.props.value}
                </MonoText>
            </View>
        )
    }
}