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

export default class workshop2 extends Component {

  render() {
      let pic = {
        uri: 'https://scontent.fbkk2-8.fna.fbcdn.net/v/t1.0-9/50048297_2057614390981110_6652570523760852992_n.jpg?_nc_cat=105&_nc_ht=scontent.fbkk2-8.fna&oh=f753ce1cfa25de4c853df74d2d465f29&oe=5CB84AA1'
      };
    return(
      
      <View style={{flex: 1,flexDirection: 'column', backgroundColor: '#33CCFF', alignItems: 'center', justifyContent: 'center'}}>
          <BlinkText message="Kittituch Tunprakongsuk" interval={100}/>
          <Text></Text>
          <Image source={pic} style={{width: 400, height: 400}}/>

      </View>
    );
  }

}

class BlinkText extends Component {

  constructor(props) {
    super(props)

    this.state = {isVisible : true}

    setInterval( () => {
        this.setState(oldState => {
          return {isVisible : !oldState.isVisible}
        })
    }, this.props.interval)



  }

  render() {
    let display = this.state.isVisible ? this.props.message : '';

    return(
      
          <Text style={{  color: '#ffffff',fontWeight: '800',textAlign: 'center',textTransform: 'uppercase'}}> 
             {display}          
          </Text>
      
    )
  }
}