import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { Linking } from 'expo'
const About_Us = () => {
    const openSocialMediaURL = async (url) => {
        const supported = await Linking.canOpenURL(url);
      
        if (supported) {
          await Linking.openURL(url);
        } else {
          console.log(`Cannot open URL: ${url}`);
        }
      };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
           
        <Text style={styles.title}>About Me</Text>
      </View>
      <View style={styles.content}><Image source={require('../../Asset/image.png')} style={{borderRadius: 180}} /> 
        <Text style={styles.text}>Version: 1.0.0</Text>
        <Text style={styles.text}>App: Wdase Mariam</Text>
        <Text style={styles.text}>Developer: Mearg Gebremedhn</Text>
        <Text style={styles.text}>Contact Me: meagmage@gmail.com</Text>
        <Text style={styles.text}>Join Us: JoinOurCommunity.com</Text>
      </View>
      <View style={styles.footer}>
      
        <TouchableOpacity style={styles.button} onPress={() => openSocialMediaURL('instagram.com/mearg_g?igshid=ZDdkNTZiNTM=')}>
          <Text style={styles.buttonText}>Follow Me</Text>
          <Ionicons name="logo-instagram" size={18} color="white" />
        </TouchableOpacity>
      
      
        <TouchableOpacity style={styles.button} onPress={() => openSocialMediaURL('twitter.com/mage18281225?s=09')}>
          <Text style={styles.buttonText}>Follow Me</Text>
          <Ionicons name="logo-twitter" size={18} color="white" />
        </TouchableOpacity>
      
        <TouchableOpacity style={styles.button} onPress={() => openSocialMediaURL('https://github.com/maggie-ghub')}>
          <Text style={styles.buttonText}>Follow Me</Text>
          <Ionicons name="logo-github" size={18} color="white" />
        </TouchableOpacity>
      
      </View>
      <View style={styles.footer}>
      
        <TouchableOpacity style={styles.button} onPress={() => openSocialMediaURL('facebook.com/mearg.gebremedhn.50')}>
          <Text style={styles.buttonText}>Follow Me</Text>
          <Ionicons name="logo-facebook" size={18} color="white" />
        </TouchableOpacity>
     
        <TouchableOpacity style={styles.button} onPress={() => openSocialMediaURL('tiktok.com/@g.maggie')}>
          <Text style={styles.buttonText}>Follow Me</Text>
          <Ionicons name="logo-tiktok" size={18} color="white" />
        </TouchableOpacity>
     
        <TouchableOpacity style={styles.button} onPress={() => openSocialMediaURL('www.youtube.com/@meag1967')}>
          <Text style={styles.buttonText}>Follow Me</Text>
          <Ionicons name="logo-youtube" size={18} color="white" />
        </TouchableOpacity>
      
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      padding: 20,
    },
    header: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
    },
    content: {
      flex: 3,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 10,
    },
    footer: {
      flex: .31,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 5,
    },
    button: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#333',
      paddingVertical: 5,
      paddingHorizontal: 8,
      borderRadius: 5,
      width: 115,
      marginBottom: -10,
      fontSize: 12,
    },
    buttonText: {
      color: '#fff',
      fontSize: 12,
      fontWeight: 'bold',
      marginRight: 10,
    },
  
  });
export default About_Us