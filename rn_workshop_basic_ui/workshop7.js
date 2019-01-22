/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TextInput} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

// Flex-Box
/**
 * flex: dimesion
 * flexDirection: row | column
 *  
 */

export default class workshop7 extends Component {

    constructor(props) {
      super(props);
      this.state = {text: ''};
    }

  render() {

    return(
      <View style={{padding: 40}}>
      <TextInput
        style={{height: 40}}
        placeholder="Type here to translate!"
        onChangeText={(text) => this.setState({text})}
      />
      <Text style={{padding: 10, fontSize: 42}}>
        {this.state.text}
      </Text>
    </View>

    );
  }
}

const style = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection: 'column', 
    backgroundColor: '#FFFFFF', 
    alignItems: 'flex-start', 
    justifyContent: 'flex-start'
  },
  MyText : {
    width: 100,
    height: 100,
    backgroundColor : '#D0D0D0',
    textAlign : "center"
  },
  Item : {
    color: "red",
    fontSize: 30,
    fontWeight: 'bold'
  }
})