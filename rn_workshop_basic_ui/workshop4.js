/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class workshop4 extends Component {

  render() {

    return(
      
      <View style={style.container}>
        <View style={{width: 20, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 100, backgroundColor: 'skyblue'}} />
        <View style={{width: 100, height: 150, backgroundColor: 'steelblue'}} />
        <Text style={style.MyText}>Hello World</Text>
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