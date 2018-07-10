import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Card, ListItem, Button, Badge, Avatar, Rating } from 'react-native-elements';

import { createStackNavigator } from 'react-navigation';



export default class Item extends React.Component {
  
    static navigationOptions = ({navigation}) => {
    
        return {
            title: 'Detail',
            
            
        };
    };
    state= {
       numero:'0',
    };
    
    

   plus =()=> {
       this.setState({
           numero: parseInt(this.state.numero) + 1
       });
   }
   less =()=> {
       
    this.setState({
        numero: parseInt(this.state.numero) - 1
    });
}

  render() {
    
      const { params } = this.props.navigation.state;
      
     return (
      <View style={styles.container}>
        
      <Card
        title={params.pizza.name}
        image={{uri:params.pizza.image }}
       >
       <View style = {{flexDirection:'row'}}>
           {params.pizza.ingredients.map((obj) =>
                <Text 
                key={obj.toString()}>
                  {obj}, 
                </Text>
                )
           }
       </View>

       <Text>Prezzo:{params.pizza.price}€</Text>
       <Text>Info:{params.pizza.info}</Text>
 
       </Card>
       
       <View style = {styles.pulsanti}>
       
       <Badge containerStyle={{ backgroundColor: 'blue',marginRight:5}}
       onPress={this.less} 
       value="-"
       />
       <Text>{this.state.numero}</Text>
       
       <Badge containerStyle={{ backgroundColor: 'blue', marginLeft:5}}
       onPress={ this.plus} 
       value="+"
       />
        
       </View>
                
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

  pulsanti: {

   flexDirection:'row',
   flex:1,
   justifyContent:'center',
  },
});
