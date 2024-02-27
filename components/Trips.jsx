import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList } from "react-native"; 
import { ListItem, SearchBar } from "react-native-elements"; 

import GetHorraires from './getHorraires'



class Trips extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 

    }; 
  } 

  renderItem = ({ item }) => { 
    return ( 
      <>
        <GetHorraires station={this.props.station} trip={item} />
      </>
    ); 
  }; 

  render() { 
    return ( 
      <View style={styles.container}> 
        <FlatList 
          data={this.props.data} 
          renderItem={this.renderItem} 
          keyExtractor={(item) => item} 
        /> 
      </View> 
    ); 
  } 
} 

export default Trips; 

const styles = StyleSheet.create({ 
  container: { 
    flex:6,
    width:'100%',
  }, 
});
