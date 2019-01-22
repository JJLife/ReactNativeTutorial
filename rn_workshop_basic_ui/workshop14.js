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




class Workshop14 extends Component {


  renderListHeader(){
    return(
      <View>
        <Image style={{width: '100%', height: 120, resizeMode: 'center', marginTop: 40, marginBottom: 40}} source={require('./img/280px-Avengers_Endgame_Logo.png')}/>
      </View>
    )
  }

  renderItem(item){

    const {cardStyle, avatar, title, titleSubtitleStyle} = styles;

    return(
      <View style={cardStyle}>
        <Image source={require('./img/8ddc9f688f0c67450b81c25a9b5aeb65.jpg')} style={{width:'100%',height:200}}/>  
        <View style={title}>
          <Image source={require('./img/avengers-endgame-first-trailer-takeaways.jpg')} style={avatar}/>    
          <View style={titleSubtitleStyle}>
            <Text style={{color:'#FFFFFF',fontSize: 13}}>AVENGERS 4 ENDGAME Trailer (2019)</Text>
            <Text style={{color:'#CCFFCC',fontSize: 11}}>First Trailer for AVENGERS 4 ENDGAME</Text>
            <Text style={{color:'#CCFFCC',fontSize: 11}}>JJamesFlims • View 19M • 2 years ago </Text>
          </View>
        </View>
      </View>
    ) 
  }

  render() {
    return (
      <View>
        <ImageBackground style={{width: '100%', height : '100%'}} source={require('./img/Aurora-Borealis-Background-Widescreen-for-Mobile.jpg')}>
          <FlatList
            style={{}} 
            data={[1,2,3,4,5,6,7,8,9]} 
            ListHeaderComponent={this.renderListHeader}
            renderItem={({ item }) => this.renderItem(item)} />
        </ImageBackground>
      </View>
    )
  }
}


const styles = StyleSheet.create(
  {
    cardStyle: { flex: 1, 
            flexDirection: 'column', 
            backgroundColor:'#333333', 
            marginBottom: 20 },
    avatar : {width:45,
            height:45,
            borderRadius:(45/2)},
    title : { flexDirection:'row', 
            margin:10},
    titleSubtitleStyle : {flexDirection:'column', 
            marginLeft:10}
  }
)

export default Workshop14;













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