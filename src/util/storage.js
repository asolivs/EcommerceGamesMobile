import AsyncStorage from '@react-native-community/async-storage'
//import { AsyncStorage } from 'react-native'

export const storeData = async (key,value) => {
    try {
    //   
    console.log('vai passa', key,value)
      await AsyncStorage.setItem(key, value)
    } catch (e) {
        console.log(e);
      // saving error
    }
}

export const getData = async (key) => {
    try {
        console.log('vai buscar',key);
         const value=  await AsyncStorage.getItem(key)
         return value;
    
      
    } catch(e) { console.log(e)
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
  