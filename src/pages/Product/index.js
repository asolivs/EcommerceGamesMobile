import React, { Component } from 'react'
import {SafeAreaView, Text, View, TouchableOpacity, StyleSheet, FlatList,Image,TextInput } from 'react-native'
import{getData,mergeData,storeData} from './../../util/storage';
import {Picker} from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/AntDesign'; 

   
class Product extends Component {
//Item a ser adicionado no carrinho.
   constructor(props) {
        super(props)
        this.state = {
          item: props.route.params.item,
          itemImage: props.route.params.itemImage,
          totaldeitem: 1,
          totalValor:props.route.params.item.price,
          totalFrete:10
        }
          
    };
  
    async addToCart(value){
      
      
      //adicionando a quantidade desse item para realizar a contagem e total do valor.
      value["totaldeitem"]=this.state.totaldeitem;
      value["totalFrete"]= this.state.totalFrete;
      value["totalValor"]=this.state.totalValor;
      //convertendo o objeto em json.
      const jsonValue = JSON.stringify(value)
      // usando o storage para salva o carrinho.
       storeData(value.id.toString(),jsonValue);
      var value =  await   getData(value.id.toString());

          this.props.navigation.navigate('ProductList');
      
      }

   onChangeText =(text)=>{
    
    this.state.totalFrete=10*text;
    this.state.totalValor=this.state.item.price*text;
    
    this.setState({totaldeitem:text})
   }   

   render() {
        return(
          <View style={styles.productContainer} >
            <Text style = {styles.title}>
                {this.state.item.name}
            </Text>
            <View  style={{ flexDirection: "row"}}>
            <Image
            style={styles.image}
            source={this.state.itemImage}
            /> 
            <View style={styles.productDescription}> 
        
                <Text style = {styles.list}>
                Score:{this.state.item.score}
                </Text>
                <Text style = {styles.list}>
                Price:R$ {this.state.item.price}
                </Text>
                <Text style = {styles.list}>
                Total:R$ {this.state.totalValor} 
                </Text>
                <Text style = {styles.list}>
                Shipping:R$ {this.state.totalFrete} 
                </Text>

                <View  style={{ flexDirection: "row", marginTop:20, alignItems:"center"}}>
                <Text  style={styles.text}>
                     Amount:
                </Text>
                {/* <TextInput 
                   style={styles.input} 
                   value={this.state.totaldeitem}
                   defaultValue={"1"}
                   onChangeText={text => this.onChangeText(text)}
                   keyboardType="number-pad" 
                   maxLength={2}
                /> */}
                <Picker
                selectedValue={this.state.totaldeitem}
                mode= "dropdown"
              style={styles.input}
                onValueChange={(itemValue, itemIndex) => this.onChangeText(itemValue)}
              >
                  
                <Picker.Item label="1" value={1} />
                <Picker.Item label="2" value={2} />
                <Picker.Item label="3" value={3} />
                <Picker.Item label="4" value={4} />
                <Picker.Item label="5" value={5} />
                <Picker.Item label="6" value={6} />
                <Picker.Item label="7" value={7} />

              </Picker>
                  
                  
                <TouchableOpacity style={styles.productButton}   onPress = {() => this.addToCart(this.state.item)}>
                {/* <Text  style={styles.text}> */}
                <View  style={{ flexDirection: "row"}}>
                <Text style= {{color:"#FFF"}}>
                     +
                </Text>
                <Icon name="shoppingcart" size={18} color="#FFF" />
                    </View>
                  {/* </Text> */}
                </TouchableOpacity>

                </View>
            </View>

            </View>  

            </View>

  

      )
   }
}
export default Product;



const styles = StyleSheet.create ({
  conteiner: {
      flex:1,
      backgroundColor: '#FFF',
      borderColor:"red"

  } ,
  list: {
    
    fontSize: 15,
    marginLeft:10,
    fontWeight:"bold"
  
    
 },
  title: {
    borderRadius: 10,
    fontSize: 20,
    // marginLeft:10,
    fontWeight:"bold",
    color:"white",
    padding:10,
    backgroundColor: '#f4511e',
  },

   item: {
    backgroundColor: '#FFFF',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:15
  },
  valores: {
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
   height: 120,
   margin:10,
   borderRadius:30
 },
 logo: {
   width: 66,
   height: 58,
 },
 productButton:{
   height:40,
   width: 60,
   borderRadius:60,
   borderWidth:5,
   borderColor:"green",
   backgroundColor:"green",
   justifyContent:"center",
   alignItems:"center",
   marginRight:15,
   padding:10
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
      padding:5,
      margin:20
      
  },
   input:{
     
     margin:10,
     
     borderColor:"red",
     height: 20, 
     width: 80
    },
   containerRoW:{

   }
});