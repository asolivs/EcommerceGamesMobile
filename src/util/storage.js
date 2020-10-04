import AsyncStorage from '@react-native-community/async-storage'
//import { AsyncStorage } from 'react-native'

export const storeData = async (key,value) => {
    try {
    //   
    
      await AsyncStorage.setItem(key, value)
    } catch (e) {
    
      // saving error
    }
}

export const getData = async (key) => {
  return new Promise((resolve, reject) => {  
  try {
         AsyncStorage.getItem(key,(ee,value) =>{
             return resolve (value);
           })
      
    } catch(e) { 
      return  reject(e)
      // error reading value
    }
  })
}

export const deleteData = async (key) => {
  try {
      await AsyncStorage.removeItem(key)
  } catch(e) {
      return 'erro';
    // error reading value
  }
}


export const mergeData = async (key,jsonValue) => {
    try {
       await AsyncStorage.mergeItem(key,jsonValue)
      
    } catch(e) {
        return 'erro';
      // error reading value
    }
}

// export default (getData,mergeData,storeData);
  