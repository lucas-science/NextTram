import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, Image, FlatList } from "react-native"; 
import { ListItem, SearchBar } from "react-native-elements"; 



class HomePage extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 

    }; 
  } 

  render() { 
    return ( 
      <View style={styles.container}> 
        <Text style={{textAlign:'center'}}>Commence par sélectionner un l’arrêt de tram qui t’intéresse le plus !</Text>
        <Image
          source={require('../assets/decision.png')}
          style={{marginTop:15}}
        />
      </View> 
    ); 
  } 
} 

export default HomePage; 

const styles = StyleSheet.create({ 
  container: { 
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:10,
  }, 
});
