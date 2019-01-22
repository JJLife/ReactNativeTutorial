/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, 
        StyleSheet, 
        Text, 
        View, 
        Image, 
        TextInput, 
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class workshop11 extends Component {

    constructor(props) {
      super(props);
    }
    

  render() {


    return(
      <View style={{flex:1 , flexDirection:"column", justifyContent:"center"}}>
        <Image resizeMode='center' style={{width: undefined}} source={require('./img/logo-500x106.png')}/>
        <Image resizeMode='contain' style={{height: 300, width : undefined}} source={{uri : 'https://img.timesnownews.com/story/1547121362-avengers_4_art_0.jpg?d=600x450'}}/>
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