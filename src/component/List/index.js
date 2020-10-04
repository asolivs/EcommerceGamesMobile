import React, { Component } from 'react'
import {SafeAreaView, Text, View, TouchableOpacity, StyleSheet, FlatList,Image } from 'react-native'
import { round } from 'react-native-reanimated';

                    
import logo from "../../assets/super-mario-odyssey.png";
   
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
       console.log(item)
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
       <View style={styles.productContainer} >

            <View  style={{ flexDirection: "row"}}>
            <Image
            style={styles.image}
            source={this.state.listimage[item.id]}
            /> 
            <View style={styles.productDescription}> 
                <Text style = {styles.title}>
                {item.name}
                </Text>
                <Text style = {styles.title}>
                Score:{item.score}
                </Text>
                <Text style = {styles.title}>
                Price:R$ {item.price}
                </Text>
                
                <TouchableOpacity style={styles.productButton} 
                  onPress={() => this.props.navigation.navigation.navigate('Product',
                  
                  {
                    item: item,
                    itemImage:this.state.listimage[item.id]

                  })}>
                    <Text>
                    Add Cart
                    </Text>
                    </TouchableOpacity>
            </View>

        </View>  

        </View>
    )
  }



   render() {

      console.log('vasdfas',this.props.list ) 

      
    // this.state.list= this.props.list; 
    // this.setState({list:this.props.list});  

    return(
            <View style= {styles.container}>

          {this.state.list.map((item,index)=>(
              this.renderItem(item)
          ))
           }
            {/* <FlatList
             contentContainerStyle={styles.list}
             data={this.state.list}
             renderItem={this.renderItem}
            //  keyExtractor={item => item.id}
             /> */}
        </View>  

      )
   }
}
export default List

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
    fontWeight:"bold"
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
    height:42,
    width: 159,
    borderRadius:5,
    borderWidth:2,
    borderColor:"red",
    backgroundColor:"transparent",
    justifyContent:"center",
    alignItems:"center",
    margin:30
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
       margin:10
       
   }
});