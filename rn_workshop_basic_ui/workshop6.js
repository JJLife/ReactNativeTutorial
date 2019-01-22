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

// Flex-Box
/**
 * flex: dimesion
 * flexDirection: row | column
 *  
 */

export default class workshop6 extends Component {

  render() {

    return(
      
      <View style={{flex:1, flexDirection: 'column', justifyContent:'space-evenly',alignItems:'stretch'}}>
       <View style={{height: 50, backgroundColor: 'green'}} />
        <View style={{height: 50, backgroundColor: 'yellow'}} />
        <View style={{height: 50, backgroundColor: 'red'}} />
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