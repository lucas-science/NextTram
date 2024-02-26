import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList } from "react-native"; 
import { ListItem, SearchBar } from "react-native-elements"; 

import Trips from '../components/Trips';

class NextTram extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 

    }; 
  } 

  render() { 
    const {station,data} = this.props
    return ( 
      <View style={styles.container}> 
        <View style={styles.station_container}>
          <View style={styles.station_box}>
            <Text>{this.props.station}</Text>
          </View>
        </View>
        <Trips station={station} data={data} />
      </View>
    ); 
  } 
} 

export default NextTram; 

const styles = StyleSheet.create({ 
  container: { 
    flex:1,
    flexDirection: 'column',
    justifyContent:'space-around',
    alignItems:'center',
    backgroundColor:'red'
  },

  station_container: {
    flex:1,
    backgroundColor:'blue',
    width:'100%',
    justifyContent:'center',
    alignItems: 'center'

  },
  station_box: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius:5,
    backgroundColor:'yellow',
  },
});
