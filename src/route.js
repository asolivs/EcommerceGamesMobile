import React from 'react';

import {Button} from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductList from './Pages/ProductList';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Icon from 'react-native-vector-icons/Entypo';
 
const Stack = createStackNavigator();
//Usando Navigation para criar as routas do aplicativo.

const Routes = () => (
  
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
                    name="ProductList" 
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
        <Stack.Screen name="Product" component={Product}
          options={{
            title: 'ADD Gamer',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign:'center'
            }
          }}/>
        <Stack.Screen name="Cart" component={Cart}
          options={{
            title: 'List Gamers Cart',
            headerStyle: {
              backgroundColor: '#f4511e',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              textAlign:'center'
            },
            headerRight: () => (
                      <Icon
                        onPress={() => alert('This is a button!')}
                        name="add-to-list"
                        color="#AAAA"
                      />
                    )
            }} 
             />
      </Stack.Navigator>
    </NavigationContainer>
)
export default Routes

