
import React, { useState } from "react";

import {
Button,
  StyleSheet,
View,
Text
} from 'react-native';

import {Picker} from '@react-native-community/picker';

import {  Colors} from 'react-native/Libraries/NewAppScreen';

import {images} from '../../bd/images';
const customData = require('../../bd/products.json');


import List from '../../component/List'


const ProductList = (navigation) => {
 //renderização da lista de games
var product = customData;  




const [selectedValue, setSelectedValue] = useState("price");
//ordenação da lista de acordo com o que e selecionado no picker (select)
product.sort(function(a,b){
  console.log(selectedValue)
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


// console.log(product);

return(
<>

{console.log(product)}
        <View style={styles.container}>
            <View  style={styles.item}>
              <Text style={styles.item}>Order:</Text>
    
              <Picker
                selectedValue={selectedValue}
                mode= "dropdown"
              style={{ height: 50, width: 250 }}
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
    borderRadius:5,
  },
  item: {
    backgroundColor: '#FFFF',
    
    margin: 10,
    
    alignItems:"center",
    rflexDirection: "row"
  },
});
export default ProductList;
