import React from 'react';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import ProductList from './Pages/ProductList';



import Product from './Pages/Product';


 const Stack = createStackNavigator();



const Routes = () => (
  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
                    name="Games mobile" 
                    component={ProductList} 
                    options={{
                    title: 'Games Mobile',
                    headerStyle: {
                      backgroundColor: '#f4511e',
                    },
                    headerTintColor: '#fff',
                    headerTitleStyle: {
                      fontWeight: 'bold',
                      textAlign:'center'
                    },
                  }}
        />
        <Stack.Screen name="Product" component={Product}  />
      </Stack.Navigator>
    </NavigationContainer>
)
export default Routes


// const Routes =  createStackNavigator({
//     Product:Product
// },{
//     navigationOptions:{
//         headerStyle:{
//             backgroundColor: "#DA552F"
//         },
//         headerTintColor:"#FFF"
//     },
// });
// export default Routes