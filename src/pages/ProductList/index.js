
import React, { useState } from "react";

import {  StyleSheet,View,Text,TouchableOpacity} from 'react-native';

import {Picker} from '@react-native-community/picker';

import Icon from 'react-native-vector-icons/AntDesign';
import {images} from '../../bd/images';
const customData = require('../../bd/products.json');


import List from '../../component/List'


const ProductList = ({navigation}) => {
 //renderização da lista de games
var product = customData;  

React.useLayoutEffect(() => {
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity style={styles.buttonHearde}
     onPress={() => navigation.navigate('Cart',
      
      {
        list: product,
        listimage:  images      

      }
      
      
      )}>
    <Icon name="shoppingcart" size={18} color="#BBBB" />

                        </TouchableOpacity>

        ),
      });
    }, [navigation]);

const [selectedValue, setSelectedValue] = useState("price");
//ordenação da lista de acordo com o que e selecionado no picker (select)
product.sort(function(a,b){

  if (selectedValue == 'name'){
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a must be equal to b
  return 0;
  }
  else if (selectedValue == 'price'){
    return a.price - b.price;
    }
    else if (selectedValue == 'score'){
      return a.score - b.score;
    }
})

return(
<>
        <View style={styles.container}>
            <View  style={styles.view}>
              <Text style={styles.item}>Order:</Text>
    
              <Picker
                selectedValue={selectedValue}
                mode= "dropdown"
              style={styles.select}
                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
              >
                <Picker.Item style={{   fontWeight:'800'}} label="Price" value="price" />
                <Picker.Item label="Score" value="score" />
                <Picker.Item label="Name" value="name" />

              </Picker>
           </View>

        <List  list= {product} images= {images} navigation= {navigation}   />
        </View>   
  </>    
)
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    margin: 10,
    alignItems:"stretch",
    borderRadius:15,
    borderColor:"black", 
  },
  buttonHearde:{
    height:42,
    width: 50,
    borderRadius:5,
    borderWidth:2,
    borderColor:"#FFFA",
    backgroundColor: '#FFFF',
    justifyContent:"center",
    alignItems:"center",
    margin:15
  },
  view: {
    
    backgroundColor: '#FFFF',
    flexDirection: "row",
    margin: 10,
    borderRadius:10,
    alignItems:"center",
      },
  
  item: {
    
    borderRadius:15,
    backgroundColor: '#FFFF',
    margin: 10,
    alignItems:"center",
    flexDirection: "row",
    width: 100 
  },
  
  select: {
    justifyContent:"center",

    borderRadius:15,
    borderColor:"black",

    marginLeft: 15,
    alignItems:"center",
    height: 30, 
    width: 200 
  },
});
export default ProductList;
