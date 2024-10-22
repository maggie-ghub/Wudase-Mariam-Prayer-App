import {React, useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

import { useNavigation } from '@react-navigation/native'

export default function Tigrigna (){
 const [checkDay, setCheckDay] = useState('')
 const navigation = useNavigation() 
 const  handleDay = (day)=>{
    setCheckDay(day)
    navigation.navigate('  ውዳሴ ማርያም', { day: day })
  }

  return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity   style={styles.button} onPress={()=>handleDay('Monday')} >
            <Text style={{fontSize: 20,}} >ናይ ሰኑይ</Text> 
          </TouchableOpacity  >
          <TouchableOpacity style={styles.button} onPress={()=>handleDay('Tuesday')}>
            <Text style={{fontSize: 20,}} >ናይ ሰሉስ </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>handleDay('Wednesday')}>
            <Text style={{fontSize: 20,}} >ናይ ሮቡዕ </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>handleDay('Thursday')}>
            <Text style={{fontSize: 20,}} >ናይ ሓሙስ </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>handleDay('Friday')}>
            <Text style={{fontSize: 20,}} >ናይ ዓርቢ</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>handleDay('Saturday')}>
            <Text style={{fontSize: 20,}} >ናይ ቐዳም </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={()=>handleDay('Sunday')}>
            <Text style={{fontSize: 20,}} >ናይ ሰንበት </Text>
          </TouchableOpacity>
          
        </View>
          
      </View>
  )
}
const styles = StyleSheet.create({
  container : {
    flex: 1,
    backgroundColor: '#454545',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',

  },
  buttonContainer :{
    width: 93,
    gap: 15,
    flex: 1,
    marginTop: 65,
  },
  button :{
    backgroundColor: '#fff',
    
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderRadius: 10,
    
  },
});
