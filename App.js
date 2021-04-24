import React,{Component} from 'react';
import {Button,View,StyleSheet,Text,TouchableOpacity,TextInput} from 'react-native';
import {Header} from 'react-native-elements';

export default class App extends Component{
  constructor(){
    super()
    this.state={
      text:'',
      displayText:''
    }
  }
  render(){
    return(
<View style={styles.container}>
<Header 
backgroundColor={'red'}
centerComponent={{text:'Monkey Chunky',style:{color:'black',fontSize:25}}}/>
<TextInput
style={styles.inputBox}
onChangeText={(text)=>{
  this.setState({text:text})
}}
value={this.state.text}
/>
<TouchableOpacity 
style={styles.goButton}
onPress={()=>{
  this.setState({displayText:this.state.text})
}}>
<Text style={styles.buttonText}>GO</Text>
</TouchableOpacity>
<Text style={styles.displayText}>{this.state.displayText}</Text>
</View>
    )
  } 
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'blue'
  },
  inputBox:{
    marginTop:200,
    width:'80%',
    alignSelf:'center',
    borderWidth:4,
    outline:'none'
  },
  goButton:{
    width:'50%',
    height:60,
    alignSelf:'center',
    padding:10,
    margin:10
  },
  buttonText:{
    textAlign:'center',
    fontSize:40,
    fontWeight:'bold'
  }
})