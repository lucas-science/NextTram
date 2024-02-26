import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList } from "react-native"; 
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
        <Text>Hey</Text>
      </View> 
    ); 
  } 
} 

export default HomePage; 

const styles = StyleSheet.create({ 
  container: { 
    marginTop: 30, 
    padding: 2, 
  }, 
});
