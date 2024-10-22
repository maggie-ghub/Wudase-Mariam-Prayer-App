import React from 'react'
import { View , StyleSheet, TouchableOpacity, Text} from 'react-native'
import { useNavigation } from '@react-navigation/native';

export default function Main() {
    const navigation = useNavigation();

    const handleGeez = () => {
      navigation.navigate('መዝገበ ሃይማኖት');
  
    }
    const handleTigrigna = () => {
      navigation.navigate(' መዝገበ ሃይማኖት');
  
    }
  return (
    <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity   style={styles.button} onPress={handleGeez} >
            <Text style={{fontSize: 20,}} >ግእዝ</Text> 
          </TouchableOpacity  >
          <TouchableOpacity style={styles.button} onPress={handleTigrigna}>
            <Text style={{fontSize: 20,}} >ትግርኛ </Text>
          </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#454545',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      
    },
    buttonContainer : {
      width: 72,
      gap: 20,
      flex: .11,
    },
    button : {
      backgroundColor: '#eee',
      height: 35,
      alignItems: 'center',
      justifyContent: 'center',
      borderWidth: 0,
      borderRadius: 10,
      fontSize: 18,flex: .8,
    }
  });
