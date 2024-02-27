import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList } from "react-native"; 
import { ListItem, SearchBar } from "react-native-elements"; 

import StopsSearch from './components/search_stop';
import NextTram from './pages/NexTram';
import HomePage from './pages/HomePage'

import list_stop from "./list_stop.json";


class App extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      afficheNexTram:false,
      finalStop: null,
      finalStop_Data:null,
    }; 
  } 
  handleChildStateChange = (finalStopFromChild, stop_data) => {
    console.log(finalStopFromChild, stop_data)
    this.setState({finalStop: finalStopFromChild, finalStop_Data:stop_data})
  }
  render() { 
    if (this.state.finalStop !== null) {
      return ( 
        <View style={styles.body}>
          <StopsSearch onStateChange={this.handleChildStateChange} />
          <NextTram station={this.state.finalStop} data={this.state.finalStop_Data}/>
        </View>
      ); 
    } else {
      return (
        <>
        <View style={styles.body}>
          <StopsSearch onStateChange={this.handleChildStateChange} />
          <HomePage/>
        </View>
        </>
      )
    }
  } 
} 

export default App; 

const styles = StyleSheet.create({ 
  container: { 
    marginTop: 30, 
    padding: 2, 
  },
  body:{
    flex:1,
    backgroundColor:'#F9F8F8'
  },
});


