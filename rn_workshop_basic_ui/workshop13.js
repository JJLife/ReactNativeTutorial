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
        FlatList,
        ImageBackground
} from 'react-native';




class Workshop13 extends Component {


  renderListHeader(){
    return(
      <View>
        <Image style={{width: '100%', height: 90, resizeMode: 'center', marginTop: 40, marginBottom: 40}} source={require('./img/logo-500x106.png')}/>
      </View>
    )
  }

  renderItem(item){
    return(
      <View style={{flex: 1, flexDirection: 'column', backgroundColor:'white', marginBottom: 20, borderRadius: 10}}>
        <View style={{flexDirection:'row', margin:10}}>
          <Image source={require('./img/avengers-endgame-first-trailer-takeaways.jpg')} style={{width:45,height:45,borderRadius:(45/2)}}/>    
          <View style={{flexDirection:'column', marginLeft:10}}>
            <Text style={{color:'#000000EE',fontSize: 13}}>AVENGERS 4 ENDGAME Trailer (2019)</Text>
            <Text style={{color:'#000000AA',fontSize: 11}}>First Trailer for AVENGERS 4 ENDGAME</Text>
          </View>
        </View>
        <Image source={require('./img/8ddc9f688f0c67450b81c25a9b5aeb65.jpg')} style={{width:'100%',height:200}}/>    
      </View>
    ) 
  }

  render() {
    return (
      <View>
        <ImageBackground style={{width: '100%', height : '100%'}} source={require('./img/images.jpeg')}>
          <FlatList
            style={{paddingLeft:32,paddingRight:32}} 
            data={[1,2,3,4,5,6,7,8,9]} 
            ListHeaderComponent={this.renderListHeader}
            renderItem={({ item }) => this.renderItem(item)} />
        </ImageBackground>
      </View>
    )
  }
}

export default Workshop13;













// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });


// export default class workshop13 extends Component {

//     constructor(props) {
//       super(props);
//     }
    

//   render() {


//     return(
//       <View style={{padding: 20,flex:1 , flexDirection:"column", justifyContent:"center"}}>
//           <FlatList style={{marginTop:50}} data={[1,2,3,4,5,6,7]}
//               renderItem={({item}) => <Text>{item}</Text>} />
//       </View>

//     );
//   }
// }

// const style = StyleSheet.create({
//   container : {
//     flex: 1,
//     flexDirection: 'column', 
//     backgroundColor: '#FFFFFF', 
//     alignItems: 'flex-start', 
//     justifyContent: 'flex-start'
//   },
//   MyText : {
//     width: 100,
//     height: 100,
//     backgroundColor : '#D0D0D0',
//     textAlign : "center"
//   },
//   Item : {
//     color: "red",
//     fontSize: 30,
//     fontWeight: 'bold'
//   }
// })