import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList } from "react-native"; 
import { ListItem, SearchBar } from "react-native-elements"; 

import StopsSearch from '../components/search_stop';

import list_stop from "../list_stop.json"


class SelectPage extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      loading: false,
      finalStop: null,
    }; 
  } 
  handleChildStateChange = (finalStopFromChild) => {
    stop_name = Object.keys(finalStopFromChild)
    directions = finalStopFromChild[stop_name]
    this.setState({ finalStop: [stop_name, directions]  }, () => {
      console.log("Parent state updated:", this.state.finalStop);
    });
  }
  render() { 
    return ( 
      <View style={styles.container}> 
        
        <Text>
          {this.state.finalStop}
        </Text>
      </View> 
    ); 
  } 
} 

export default SelectPage; 

const styles = StyleSheet.create({ 
  container: { 
    marginTop: 30, 
    padding: 2, 
  }, 
});
