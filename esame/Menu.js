import React from 'react';
import { StyleSheet, Text, View,FlatList, StatusBar, Image, TouchableOpacity } from 'react-native';
import {Button,Rating, SearchBar, FormLabel, FormInput } from 'react-native-elements';
//import { createStackNavigator } from 'react-navigation';
//import * as firebase from "firebase";

StatusBar.setHidden(true);


const LogoTitle = (props) => (
     
     <View style= {styles.view_header}>
        
        <View style = {styles.header_left}>

        </View>

            <View style = {styles.header_center}>

                <Text style = {{
                    fontWeight:'bold',
                    fontSize:20,
                }}>
                {props.title}
                
                </Text>
            
            </View>
            
            <View style = {styles.header_right}>

               
                
            </View>

        </View>
)

export default class Menu extends React.Component {
 
    
static navigationOptions = ({navigation}) => {
    
    return {
        
        header: null,
        
    };
};


    state= {

          array:[],
        search:'',
    };
      
componentDidMount() {


fetch("http://www.dmi.unict.it/~calanducci/LAP2/food.json")
.then(response => response.json())
.then(responseJson => {
   
    this.setState ({
        array:responseJson.data
  
      });
    
});

}

  
  
  renderRow=({ item }) => (

        
         <TouchableOpacity onPress={()=> 
          this.props.navigation.navigate('ItemScreen',{
            pizza:{name:item.name, 
            image:item.image,
            ingredients:item.ingredients,
            price:item.price,
            info:item.info,
            }
          })
          
          }
           >     
          <View style = {styles.container_item}>

            <View style = {styles.left_info}>
          
              <Image
              resizeMode='contain'
              style={{width: 120, height: 100, }}
              source={{uri: item.image}}
              />
          
              <Text>Prezzo: {item.price}€</Text>
            </View>
            
            <View style = {styles.container_text}>

              <View style = {styles.right_info}>

                <Text style= {styles.text_style}>{item.name}</Text>
              
              
              
               
               <View style = {styles.container_ingredienti}>
               <Text style= {styles.text_style}>Ingredienti:</Text>
              {
                
                item.ingredients.map((obj) =>
                <Text 
                key={obj.toString()}>
                  {obj} 
                </Text>
                )
               } 
               </View>
              
              </View>
              
            
            </View>

          </View>  
          </TouchableOpacity>  
);

_keyExtractor = (item,index)=>String(index)


render() {
   
 
    return (
      <View style={styles.container}>

          <LogoTitle  
              title='Menu'/>
        
        
        
        {/*
             <View style={styles.searchStyle}>
               
                <FormInput onChangeText={(val) => this.setState({search:val})}
                  placeholder='Search'/>

                  <Button
                   small
                   backgroundColor= 'blue'
                   borderRadius={5}
                   title='cerca' 
                   onPress= {()=>console.log("ciao")}
            />
             </View>
           */
           }

           <SearchBar
            lightTheme
            onChangeText={(val) => this.setState({search:val})}
            placeholder='Type Here...' 

            />
            
          
          <FlatList
            data={this.state.array}
            renderItem = {this.renderRow}
            keyExtractor= {this._keyExtractor}
          />
         
      </View>
              
    );
  }
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },

  container_item: {
    //flex:1,
    flexDirection:'row',
    borderWidth: 1,
   
  },

  
  
  container_text: {
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
   },


  left_info: {
    
    flexDirection:'column',
    backgroundColor: "#fff",
    padding:10,
    justifyContent:'center',
    alignItems:'center',

  },
  right_info: {
    
    //marginLeft:10,
   flex:1,
   //flexDirection:"row"
  },
  container_ingredienti: {
  //flexDirection:"row",
  //flex:1/2,
  //borderWidth: 1,
  //borderColor:"red",
  

  },
 
  text_style:{
    fontWeight: 'bold',
    fontSize: 14,
    paddingBottom:8,
  },
  
  view_header: {
    
    flex: 1/7,
    flexDirection:'row',
    backgroundColor: '#fff',
    borderWidth:2,
    },

  header_left: {
    flex: 1/3,
    
  },
  
  header_center: {
    
    flex: 1/3,
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  
  header_right: {
    flex: 1/3,
    justifyContent:'center',
    alignItems:'center',
  },

  searchStyle: {
    borderWidth:1,
    borderColor:'red',
    flexDirection:'row',
  },


  
});
