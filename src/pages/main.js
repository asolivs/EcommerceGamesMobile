import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Main extends Component {
    static navigationOptions={
        title: "Mobile"
    };
    render(){
        return(
            <View>
            <Text> Pagina Main</Text>
            </View>
        );
    }
}