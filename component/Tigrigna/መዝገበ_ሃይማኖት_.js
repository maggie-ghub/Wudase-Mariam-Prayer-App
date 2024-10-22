import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'

const መዝገበ_ሃይማኖት_ = () => {
    const navigation = useNavigation();

    const mezgebeHaymanot1 = ()=>{
        navigation.navigate('ናይ ኩሉግዜ ፀሎት')
    }
    const mezgebeHaymanot2 = ()=>{
        navigation.navigate('ዕለታዊ ውዳሴ ማርያም')
    }
    const mezgebeHaymanot3 = ()=>{
      navigation.navigate('ኣንቀፀ ብርሃን')
    }
    const mezgebeHaymanot4 = ()=>{
      navigation.navigate(' ይወድስዋ መላዕክት')
    }
    const mezgebeHaymanot5 = ()=>{
      navigation.navigate('መልክኣ ማርያም')
    }
    const mezgebeHaymanot6 = ()=>{
      navigation.navigate('መልክኣ ኢየሱስ')
    }
  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity   style={styles.button} onPress={mezgebeHaymanot1} >
            <Text style={{fontSize: 20,}} >ናይ ኩሉግዜ ፀሎት</Text> 
          </TouchableOpacity  >
          <TouchableOpacity style={styles.button} onPress={mezgebeHaymanot2}>
            <Text style={{fontSize: 20,}} >ውዳሴ ማርያም </Text>
          </TouchableOpacity>
          <TouchableOpacity   style={styles.button} onPress={mezgebeHaymanot3}>
            <Text style={{fontSize: 20,}} >ኣንቀፀ ብርሃን</Text> 
          </TouchableOpacity  >
          <TouchableOpacity style={styles.button} onPress={mezgebeHaymanot4}>
            <Text style={{fontSize: 20,}} >ይወድስዋ መላዕክት </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={mezgebeHaymanot5}>
            <Text style={{fontSize: 20,}} >መልክኣ ማርያም</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={mezgebeHaymanot6}>
            <Text style={{fontSize: 20,}} >መልክኣ ኢየሱስ</Text>
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
   
export default መዝገበ_ሃይማኖት_