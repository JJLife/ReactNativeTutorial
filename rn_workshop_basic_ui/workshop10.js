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
        Button,
        Alert,
        TouchableHighlight} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


export default class workshop10 extends Component {

    constructor(props) {
      super(props);
      this.state = {active1: false,
                    active2: false,
                    active3: false };
      
      this.clickMe = this.clickMe.bind(this);
    }
    

    clickMe() {
      this.setState(oldState => {
        return {active1 : !oldState.active1}
      })
    }

    longClickMe(){
      Alert.alert("Long Click")
    }

    clickMeWithArrowFunction = () => {
      this.setState(oldState => {
        return {active2 : !oldState.active2}
      })
    }

    clickMeWithBinding () {
      this.setState(oldState => {
        return {active3 : !oldState.active3}
      })
    }

  render() {


    return(
      <View style={{flex:1 , flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <Button title={this.state.active1 ? 'Active' : 'InActive'} onPress={this.clickMe}/>
          <Button title={this.state.active2 ? 'Active' : 'InActive'} onPress={this.clickMeWithArrowFunction}/> 
          <Button title={this.state.active3 ? 'Active' : 'InActive'} onPress={this.clickMeWithBinding.bind(this)}/> 
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