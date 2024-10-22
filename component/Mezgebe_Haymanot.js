import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

const Mezgebe_Haymanot = () => {
    const navigation = useNavigation();

    const haymanot1 = ()=>{
        navigation.navigate('የዘወትር ጸሎት')
    }
    const haymanot2 = ()=>{
        navigation.navigate('ውዳሰ ማርያም')
    }
    const haymanot3 = ()=>{
      navigation.navigate('አንቀጸ ብርሃን')
    }
    const haymanot4 = ()=>{
      navigation.navigate('ይወድስዋ መላዕክት')
    }
    const haymanot5 = ()=>{
      navigation.navigate('መልክአ ማርያም')
    }
    const haymanot6 = ()=>{
      navigation.navigate('መልክአ ኢየሱስ')
    }
  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity   style={styles.button} onPress={haymanot1} >
            <Text style={{fontSize: 20,}} >የዘወትር ጸሎት</Text> 
          </TouchableOpacity  >
          <TouchableOpacity style={styles.button} onPress={haymanot2}>
            <Text style={{fontSize: 20,}} >ውዳሴ ማርያም </Text>
          </TouchableOpacity>
          <TouchableOpacity   style={styles.button} onPress={haymanot3}>
            <Text style={{fontSize: 20,}} >አንቀጸ ብርሃን</Text> 
          </TouchableOpacity  >
          <TouchableOpacity style={styles.button} onPress={haymanot4}>
            <Text style={{fontSize: 20,}} >ይወድስዋ መላዕክት </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={haymanot5}>
            <Text style={{fontSize: 20,}} >መልክአ ማርያም</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={haymanot6}>
            <Text style={{fontSize: 20,}} >መልክአ ኢየሱስ</Text>
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
      width: 163,
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
export default Mezgebe_Haymanot;   