import React, { Component } from 'react'
import {SafeAreaView, Text, View, TouchableOpacity, StyleSheet, FlatList,Image,TextInput } from 'react-native'
// import {TextInput  } from 'react-native-gesture-handler';
import { round } from 'react-native-reanimated';
import{getData,mergeData,storeData} from './../../util/storage';
                    
import logo from "../../assets/super-mario-odyssey.png";
   
class Product extends Component {

   constructor(props) {
        super(props)
        this.state = {
          item: props.route.params.item,
          itemImage: props.route.params.itemImage,
          totaldeitem: 1
        }
        console.log(this.state);
          
    };
  
    async addToCart(value){
      value["amount"]=this.state.totaldeitem;

      const jsonValue = JSON.stringify(value)
      console.log('vai salva',jsonValue)
      
       storeData(' ',jsonValue);
      
      var value =  await   getData('itens');
        console.log(value);
      
      }

   onChangeText =(text)=>{
    this.setState({totaldeitem:text})
   }   

   render() {
        return(

            

            <View style={styles.productContainer} >


            <View  style={{ flexDirection: "row"}}>
            <Image
            style={styles.image}
            source={this.state.itemImage}
            /> 
            <View style={styles.productDescription}> 
                <Text style = {styles.title}>
                {this.state.item.name}
                </Text>
                <Text style = {styles.title}>
                Score:{this.state.item.score}
                </Text>
                <Text style = {styles.title}>
                Price:R$ {this.state.item.price}
                </Text>


                <View  style={{ flexDirection: "row", marginTop:20,marginLeft: 50, alignItems:"center"}}>
                <Text  style={styles.text}>
                     Amount:
                </Text>
                <TextInput 
                   style={styles.input} 
                   value={this.state.totaldeitem}
                   defaultValue={"1"}
                   onChangeText={text => this.onChangeText(text)}
                   keyboardType="number-pad" 
                   maxLength={2}
                />
                  
               
                <TouchableOpacity style={styles.productButton}   onPress = {() => this.addToCart(this.state.item)}>
                <Text  style={styles.text}>
                    +
                  </Text>
                </TouchableOpacity>

                </View>
            </View>

            </View>  

            </View>

  

      )
   }
}
export default Product

const styles = StyleSheet.create ({
  conteiner: {
      flex:1,
      backgroundColor: '#FFF',
      borderColor:"red"

  } ,
  list: {
     padding: 15,
     
  },
  title: {
   fontSize: 15,
   marginLeft:10,
   fontWeight:"bold",

  },

  item: {
   backgroundColor: '#FFFF',
   padding: 20,
   marginVertical: 8,
   marginHorizontal: 16,
   borderRadius:15
 },
  text: {
     color: 'black',
   
     fontWeight:"bold",
  },
  image: {
   width: 90,
   height: 140,
   marginLeft:5,
   borderRadius:30
 },
 logo: {
   width: 66,
   height: 58,
 },
 productButton:{
   height:30,
   width: 30,
   borderRadius:60,
   borderWidth:5,
   borderColor:"red",
   backgroundColor:"transparent",
   justifyContent:"center",
   alignItems:"center",
   margin:15
  },
  productDescription:{
      fontSize:16,
      color:"#999",
      marginTop:5,
      lineHeight:24

  },
  productContainer:{
      backgroundColor:"#FFF",
      borderWidth:1,
      borderColor:"red",
      borderRadius: 10,
      padding:20,
      margin:20
      
  },
   input:{
     height: 40,
     margin:10,
     backgroundColor:"#FFF",
     borderColor:"red",
     borderWidth: 1,
     borderRadius:5
    },
   containerRoW:{

   }
});