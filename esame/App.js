//Latina Giovanni W83000029

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Card, ListItem, Button, Badge, Avatar, Rating } from 'react-native-elements';

import { createStackNavigator } from 'react-navigation';
import Menu from './Menu.js'
import Item from './Item.js'

const RootStack = createStackNavigator({
 
 
  MenuScreen: {
    screen: Menu,
  },
  
  ItemScreen: {
    
    screen: Item, 
  }

},
  {

    //initialRouteName: "ItemScreen",
    
  
});



export default class App extends React.Component {
  
 


  
  render() {
    return (
      <View style={styles.container}>
        
       
      
        <RootStack/>          
        
                
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   // alignItems: 'center',
    //justifyContent: 'center',
  },
});
