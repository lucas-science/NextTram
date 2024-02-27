import { StatusBar } from 'expo-status-bar';
import React, { useState, Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, FlatList } from "react-native"; 
import { ListItem, SearchBar } from "react-native-elements"; 

import list_stop from "../list_stop.json"



class getHorraires extends Component { 
  constructor(props) { 
    super(props); 
    this.state = { 
      isLoading: true,
      data:null,
      current_date: [new Date().getHours(), new Date().getMinutes()],
      horraires_selected:null,
    }; 
  }

  componentDidMount(){
    this.sendRequest().then(() => {
      const {current_date, data} = this.state
      const horraires_selected = data.filter((date) => date[0] >= current_date[0] && date[1] > current_date[1]).splice(0,3)
      this.setState({horraires_selected : horraires_selected})
      console.log(this.state.horraires_selected)
    })
  }

  sendRequest = async () => {
    this.setState({ isLoading: true });

    try {
      const response = await fetch('https://netxt-tram-server.vercel.app/station_horraires', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          station: `${this.props.station},${this.props.trip}`,
        }),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la requête');
      }
      const responseData = await response.json();
      console.log(new Date())
      // Traiter la réponse ici, si nécessaire
      this.setState({data:responseData.horraires})
    } catch (error) {
      console.error(error);
      Alert.alert('Erreur', 'Une erreur s\'est produite lors de la requête.');
    } finally {
      this.setState({ isLoading: false });
    }
  };
  renderItem = (heure) => { 
    const each_heure = heure.item
    if (this.state.current_date[0] == each_heure[0]){
      difference = each_heure[1]-this.state.current_date[1]
      return ( 
        <View style={styles.heure}> 
            <Text>{each_heure[0]}h{each_heure[1]}, dans {difference} minutes</Text>
        </View> 
      ); 
    } else {
      difference_min = each_heure[1]-this.state.current_date[1]
      difference_heure = each_heure[0]-this.state.current_date[0]
      return ( 
        <View style={styles.heure}> 
            <Text>{each_heure[0]}h{each_heure[1]}, dans {difference_heure}h et {difference_min} min</Text>
        </View> 
      ); 
    }
  }; 

  render() { 
    let content = null;
    if (this.state.horraires_selected !== null) {
      content = (
        <View style={styles.heures}>
          <FlatList 
            data={this.state.horraires_selected} 
            renderItem={this.renderItem} 
            keyExtractor={(item) => item} 
          /> 
        </View>
      );
    }
    return ( 
      <View style={styles.trip}> 
        <View style={styles.box_titre}>
          <Text style={styles.titre_trip}>{this.props.trip}</Text>
          <View style={styles.bar}/>
        </View>
        {content}
      </View> 
    ); 
  } 
} 

export default getHorraires; 

const styles = StyleSheet.create({ 
  trip: { 
    flex:6,
    width:'100%',
    justifyContent:'center',
  },
  box_titre:{
    marginLeft:10,
    marginBottom:15,
  },
  titre_trip:{
    fontSize:15,
  },

  bar:{
    flex:5,
    backgroundColor:'#F42106',
    height:5,
    width:'95%',
    borderRadius:10
  },
  heures:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    marginBottom:10,
  },
  heure:{
    backgroundColor:'#D9D9D9',
    paddingRight:30,
    paddingLeft:30,
    paddingBottom:5,
    paddingTop:5,
    marginBottom:10,
    borderRadius:4,
  },
});
