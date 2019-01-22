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

export default class workshop3 extends Component {

  render() {

    return(
      
      <View style={style.container}>

          <Text style={style.Item}> TEST REACT NATIVE</Text>

      </View>
    );
  }
}

const style = StyleSheet.create({
  container : {
    flex: 1,
    flexDirection: 'column', 
    backgroundColor: '#33CCFF', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  Item : {
    color: "red",
    fontSize: 30,
    fontWeight: 'bold'
  }
})