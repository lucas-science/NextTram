import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList } from "react-native"; 
import { ListItem, SearchBar } from "react-native-elements"; 

import list_stop from "../list_stop.json"



class getHorraires extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 

    }; 
  } 
  componentDidMount(){

  }

  

  render() { 
    return ( 
      <View style={styles.trip}> 
        <Text>{this.props.trip}</Text>
      </View> 
    ); 
  } 
} 

export default getHorraires; 

const styles = StyleSheet.create({ 
  trip: { 
    flex:6,
    width:'100%',
    backgroundColor:'red',
  }, 
});
