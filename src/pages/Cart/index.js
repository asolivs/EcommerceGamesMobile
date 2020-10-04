import React, { Component } from 'react'
import {SafeAreaView, Text, View, TouchableOpacity, StyleSheet, FlatList,Image } from 'react-native'
import{getData,mergeData,storeData,deleteData} from './../../util/storage';
import Icon from 'react-native-vector-icons/AntDesign';
   
class Cart extends Component {

    
//componente para renderizar a lista complenta usando o flatlist
   constructor(props) {

    
        super(props)
        
        this.state = {
          list: props.route.params.list,
          listimage: props.route.params.listimage,
          listCarrinho:[],
          valorTotal:0,
          valorTotalFrete:0
        }



        
        this.carregarCarrinho();

    //    this.renderItem = this.renderItem.bind(this);   
    };
    carregarCarrinho =() =>{
        this.state.list.map((item)=>{   
             this.getItem(item.id.toString()).then(item2 =>{
             
                
                if (item2 !== null && item2.id != null ) {
                    this.state.valorTotal = this.state.valorTotal+item2.totalValor;
                    if (this.state.valorTotal < 250 )
                    this.state.valorTotalFrete= this.state.valorTotalFrete+10;
                    else    
                        this.state.valorTotalFrete= 0;    
            
                    this.state.listCarrinho.push(item2 );

                    this.setState({listCarrinho:this.state.listCarrinho}); 
                }
            })
        
        })
    
    
    }

   Item = ({ item }) => (
    <View style={styles.item}>
      {/* <Text style={styles.title}>{item.name}</Text> */}
    </View>
  );
s 
async getItem(key){
    var item2 = await getData(key)
    item2 = JSON.parse(item2); 
    return item2;
}
 deleteItem = (key)=>{
    deleteData(key.toString());
    this.state.listCarrinho=[];
    this.setState({listCarrinho:[],valorTotal:0, valorTotalFrete:0}); 
    this.carregarCarrinho();
    // console.log('passei aqui')
     

}
editItem  = (item) =>{
    var item3 = {};
    this.state.list.map((item2)=>{
       if(item == item2.id) {
             item3 = item2;
        }
    });
         this.props.navigation.navigate('Product',
           
           {
             item: item3,
             itemImage:this.state.listimage[item3.id]

           }
         );
    
}

alertItemName = (item) => {

alert("Your Finally Buy")
}

renderItem = (item2)=> {



     return(
       
        <View style={styles.productContainer} key={item2.id.toString()} >
            <Text style = {styles.title}>
            {item2.name}
            </Text>
        <View  style={{ flexDirection: "row"}}>
        <Image
        style={styles.image}
        source={this.state.listimage[item2.id]}
        /> 
        <View style={styles.productDescription}> 

            {/* <Text style = {styles.list}>
            Score:{item2.score}
            </Text> */}
            <Text style = {styles.list}>
            Price:R$ {item2.price}
            </Text>
            <Text style = {styles.list}>
            Total:R$ {item2.totalValor} 
            </Text>
            <Text style = {styles.list}>
            Shipping:R$ {this.state.valorTotal < 250 ? item2.totalFrete:'0'} 
            </Text>
            <View  style={{ flexDirection: "row", marginTop:20,marginLeft: 50, alignItems:"center"}}>
            <Text  style={styles.text}>
                 Amount:{item2.totaldeitem}
            </Text>
       
              
           
            <TouchableOpacity style={styles.productButton}   onPress = {()=>this.deleteItem(item2.id)}>
            <View>
            <Icon name="delete" size={18} color="#FFF" />
           </View>
            </TouchableOpacity>
                    
            <TouchableOpacity style={styles.productButtonEdit}   onPress = {()=>this.editItem(item2.id)}>
            <View>
            <Icon name="edit" size={18} color="#FFF" />
           </View>
            </TouchableOpacity>

            </View>
        </View>

        </View>  

        </View>

     )
    //  else return null;
  }



 render() {
    const {listCarrinho,valorTotal,valorTotalFrete}= this.state;
    return(
    <View style= {styles.container}>


          {listCarrinho.map((item)=>(
              
                
               this.renderItem(item)
              
               ))
          
           }

           <View style={styles.productsConfirma}>
               <Text>
                Total Amount Payable: {valorTotal + valorTotalFrete}
               </Text>

               <TouchableOpacity style={styles.productButtonAdd}   onPress = {()=>this.alertItemName(null)}>
            <Text  style={styles.text}>
                Buy
              </Text>
            </TouchableOpacity>
               </View> 

        </View>  

      )
   }
}
export default Cart

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
    width: 60,
    borderRadius:5,
    borderWidth:2,
    borderColor:"red",
    backgroundColor:"red",
    justifyContent:"center",
    alignItems:"center",
    margin:10
   },
   productButtonAdd:{
    height:42,
    width: 60,
    borderRadius:5,
    borderWidth:2,
    borderColor:"green",
    backgroundColor:"green",
    justifyContent:"center",
    alignItems:"center",
    margin:10
   },
   productButtonEdit:{
    height:42,
    width: 60,
    borderRadius:5,
    borderWidth:2,
    borderColor:"blue",
    backgroundColor:"blue",
    justifyContent:"center",
    alignItems:"center",
    margin:10
   },
   productDescription:{
       fontSize:16,
       color:"#999",
       marginTop:5,
       lineHeight:24

   },
   productsConfirma:{
    backgroundColor:"#FFF",
    borderWidth:1,
    borderColor:"red",
    borderRadius: 10,
    padding:5,
    margin:10,
    alignItems: "center",
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