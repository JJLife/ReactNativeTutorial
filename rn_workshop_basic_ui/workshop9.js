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


export default class workshop9 extends Component {

    constructor(props) {
      super(props);
      this.state = {text: ''};
    }
    

    clickMe() {
      Alert.alert("Thank You")
    }

    longClickMe(){
      Alert.alert("longClickMe")
    }

  render() {

    let pic = {
      uri: 'https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.0-9/50048297_2057614390981110_6652570523760852992_n.jpg?_nc_cat=105&_nc_ht=scontent.fbkk2-8.fna&oh=f753ce1cfa25de4c853df74d2d465f29&oe=5CB84AA1'
    };

    return(
      <View style={{flex:1 , flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
          <Text>TEST 1</Text>
          <TouchableHighlight onPress={this.clickMe} underlayColor="red">
              <Image resizeMode="center"
                  source={pic}
                  style={{ width: 300, height: 300}} />
          </TouchableHighlight>
          <Text>TEST 2</Text>
          <TouchableHighlight onPress={this.clickMe} underlayColor="green" onLongPress={this.longClickMe}>
              <Image resizeMode="center"
                  source={pic}
                  style={{ width: 300, height: 300}} />
          </TouchableHighlight>
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