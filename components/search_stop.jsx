import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList } from "react-native"; 
import { ListItem, SearchBar } from "react-native-elements"; 

import list_stop from "../list_stop.json"



class Search extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      loading: false, 
      data:Object.keys(list_stop), 
      error: null, 
      searchValue: "", 
      showview : false,
      final_stop:null,
    }; 
    this.arrayholder = Object.keys(list_stop); 
  } 

  renderItem = ({ item }) => { 
    return ( 
      <View style={styles.item}> 
        <TouchableOpacity onPress={() => this.pressItem(item)}>
          <Text style={{color:'#F9F8F8'}}>{item}</Text>
        </TouchableOpacity>
      </View> 
    ); 
  }; 


  pressItem = (item) => {
    const finalStop = { [item]: list_stop[item] };

    this.setState({ final_stop: finalStop }, () => {
      this.setState({searchValue : ""})
    });

    this.props.onStateChange(item, list_stop[item]);
  }

  searchFunction = (text) => { 
    this.setState({searchValue : text})

    const updatedData = this.arrayholder.filter((item) => { 
      const item_data = `${item.toUpperCase()})`; 
      const text_data = text.toUpperCase(); 
      return item_data.indexOf(text_data) > -1; 
    }); 

    this.setState({ data: updatedData });

  }; 
  

  render() { 
    let content = null;
    if (this.state.searchValue !== "") {
      content = (
        <FlatList 
          data={this.state.data} 
          renderItem={this.renderItem} 
          keyExtractor={(item) => item} 
        /> 
      );
    }

    return ( 
      <View style={styles.container}> 
        <SearchBar 
          placeholder="Search Here..."
          lightTheme 
          round 
          value={this.state.searchValue} 
          onChangeText={(text) => this.searchFunction(text)} 
          autoCorrect={false}
          containerStyle={{ backgroundColor: '#F9F8F8', borderTopColor: 'transparent', borderBottomColor: 'transparent' }}
        /> 
        {content}
      </View> 
    ); 
  } 
} 

export default Search; 

const styles = StyleSheet.create({ 
  container: { 
    marginTop: 30, 
    padding: 2, 
  }, 
  item: { 
    backgroundColor: '#65756D',
    borderRadius:10,
    padding: 20, 
    marginVertical: 8, 
    marginHorizontal: 16, 
  },
});
