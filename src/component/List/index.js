import React, { Component } from 'react'
import {SafeAreaView,ScrollView, Text, View, TouchableOpacity, StyleSheet, FlatList,Image } from 'react-native'

class List extends Component {
//componente para renderizar a lista complenta usando o flatlist
   constructor(props) {
        super(props)
        
        this.state = {
          list: props.list,
          listimage: props.images
        }
          
    };

   alertItemName = (item) => {
      
      alert(item.name)
   }

   Item = ({ item }) => (
    <View style={styles.item}>
      {/* <Text style={styles.title}>{item.name}</Text> */}
    </View>
  );
 static getDerivedStateFromProps(props, state) {

  //forca renderização da lista 
    state.list= props.list; 
    return {list:props.list};
    // setState({list:props.list});  
  } 



  renderItem =(item)=>{

    
    return(
      //key em cada renderização como boa patrica.
       <View style={styles.productContainer} key={item.id.toString()} >
            <Text style = {styles.title}>
                {item.name}
                </Text>
            <View  style={{ flexDirection: "row"}}>
            <Image
            style={styles.image}
            source={this.state.listimage[item.id]}
            /> 
            <View style={styles.productDescription}> 

                <Text style = {styles.list}>
                Score:{item.score}
                </Text>
                <Text style = {styles.list}>
                Price:R$ {item.price}
                </Text>
                
                <TouchableOpacity style={styles.productButton} 
                  onPress={() => this.props.navigation.navigate('Product',
                  
                  {
                    item: item,
                    itemImage:this.state.listimage[item.id]

                  })}>
                    <Text style={styles.text} >
                    Add Cart
                    </Text>
                    </TouchableOpacity>
            </View>
        </View>  
        </View>
    )
  }



   render() {

    return(
      
        <ScrollView style= {styles.container}>

          {this.state.list.map((item,index)=>(
              this.renderItem(item)
          ))
           }

        </ScrollView>  
    )  
 }
}
export default List

const styles = StyleSheet.create ({
   conteiner: {
       flex:1,
       backgroundColor: '#f4511e',
       borderColor:"#f4511e"
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
   text: {
      color: 'white',
      fontWeight:"bold"
      
   },
   image: {
    width: 80,
    height: 120,
    margin:5,
    borderRadius:10
  },
  logo: {
    width: 66,
    height: 58,
  },
  productButton:{
    height:42,
    width: 159,
    borderRadius:5,
    borderWidth:2,
    borderColor:"green",
    backgroundColor:"green",
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

       borderColor:"#FFF",

      //  padding:5,
       margin:10
       
   }
});