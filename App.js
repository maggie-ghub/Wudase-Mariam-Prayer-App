
import React,{useState, useEffect} from 'react';
import Geez from './Geez'
import Mezgebe_Haymanot from './component/Mezgebe_Haymanot';
import የዘወትር_ጸሎት from './component/የዘወትር_ጸሎት'
import አንቀጸ_ብርሃን from './component/አንቀጸ_ብርሃን'
import ይወድስዋ_መላዕክት from './component/ይወድስዋ_መላዕክት' 
import መልክአ_ማርያም from './component/መልክአ_ማርያም'
import መልክአ_ኢየሱስ from './component/መልክአ_ኢየሱስ'
import ኩሉግዜ_ፀሎት from './component/Tigrigna/ኩሉግዜ_ፀሎት'
import መልክኣ_ማርያም from './component/Tigrigna/መልክኣ_ማርያም'
import መልክኣ_ኢየሱስ from './component/Tigrigna/መልክኣ_ኢየሱስ'
import መዝገበ_ሃይማኖት_ from './component/Tigrigna/መዝገበ_ሃይማኖት_'
import ኣንቀፀ_ብርሃን from './component/Tigrigna/ኣንቀፀ_ብርሃን'
import ይወድስዋ_መላዕክት_ from './component/Tigrigna/ይወድስዋ_መላዕክት_'
import Main from './Main';
import Tigrigna from './Tigrigna';
import EletGeez from './EletGeez';
import { DarkTheme, NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from '@react-navigation/stack';
import  About_Us from './component/Menu/About_Us'
import Setting from './component/Menu/Setting';
import { Ionicons } from '@expo/vector-icons';
import Share from './component/Menu/Share'
import { Image, StyleSheet } from 'react-native';
import { EventRegister } from 'react-native-event-listeners';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
function  MyStack (){
  return(
      <Stack.Navigator > 
        <Stack.Screen name='ስርዓተ ቅዳሴ' component={Main}  options={{ headerShown: false, }}/>
        <Stack.Screen name='መዝገበ ሃይማኖት' component={Mezgebe_Haymanot} options={{ headerShown: false, }}/>
        <Stack.Screen name=' መዝገበ ሃይማኖት' component={መዝገበ_ሃይማኖት_}  options={{ headerShown: false, }}/>
        <Stack.Screen name='ውዳሰ ማርያም' component={Geez} options={{ headerShown: false, }} />
        <Stack.Screen name='ዕለታዊ ውዳሴ ማርያም' component={Tigrigna} options={{ headerShown: false, }} />
        <Stack.Screen name="ውዳሴ ማርያም" options={{ headerShown: false, }}>
          {(props) => <EletGeez day={props.route.params.day} options={{ headerShown: false, }}/>}
        </Stack.Screen>
        <Stack.Screen name='የዘወትር ጸሎት' component={የዘወትር_ጸሎት} options={{ headerShown: false, }}/>
        <Stack.Screen name='አንቀጸ ብርሃን' component={አንቀጸ_ብርሃን} options={{ headerShown: false, }}/>
        <Stack.Screen name='ይወድስዋ መላዕክት' component={ይወድስዋ_መላዕክት} options={{ headerShown: false, }}/>
        <Stack.Screen name='መልክአ ማርያም' component={መልክአ_ማርያም} options={{ headerShown: false, }}/>
        <Stack.Screen name='መልክአ ኢየሱስ' component={መልክአ_ኢየሱስ} options={{ headerShown: false, }}/>
        <Stack.Screen name='ናይ ኩሉግዜ ፀሎት' component={ኩሉግዜ_ፀሎት} options={{ headerShown: false, }}/>
        <Stack.Screen name='ኣንቀፀ ብርሃን' component={ኣንቀፀ_ብርሃን} options={{ headerShown: false, }}/>
        <Stack.Screen name=' ይወድስዋ መላዕክት' component={ይወድስዋ_መላዕክት_} options={{ headerShown: false, }}/>  
        <Stack.Screen name='መልክኣ ማርያም' component={መልክኣ_ማርያም} options={{ headerShown: false, }}/>
        <Stack.Screen name='መልክኣ ኢየሱስ' component={መልክኣ_ኢየሱስ} options={{ headerShown: false, }}/>
      </Stack.Navigator>
);
}// fix this : ናቪጌቭን ናይ ስታክ ናቪጌቶር double navigation ኮይነን እናመፃ  
export default function App() {

  function getHeaderTitle(route){
    const routeName = getFocusedRouteNameFromRoute(route) ?? 'ስርዓተ ቅዳሴ';
    switch (routeName) {
      case 'ስርዓተ ቅዳሴ':
        return 'ስርዓተ ቅዳሴ';
      case 'መዝገበ ሃይማኖት':
        return 'መዝገበ ሃይማኖት';
      case ' መዝገበ ሃይማኖት':
        return 'መዝገበ ሃይማኖት'
      case 'ውዳሰ ማርያም':
        return 'ዕለታዊ ውዳሴ ማርያም';
      case 'ዕለታዊ ውዳሴ ማርያም':
        return 'ዕለታዊ ውዳሴ ማርያም';
      case 'ዕለታዊ ውዳሴ ማርያም':
        return 'ዕለታዊ ውዳሴ ማርያም';
      case 'ውዳሴ ማርያም':
        return 'ዕለታዊ ፀሎት';
      case 'የዘወትር ጸሎት':
        return 'የዘወትር ጸሎት';
      case 'አንቀጸ ብርሃን':
        return 'አንቀጸ ብርሃን';
      case 'ይወድስዋ መላዕክት':
        return 'ይወድስዋ መላዕክት';
      case 'ናይ ኩሉግዜ ፀሎት':
        return 'ናይ ኩሉግዜ ፀሎት';
      case 'ኣንቀፀ ብርሃን':
        return 'ኣንቀፀ ብርሃን';
      case ' ይወድስዋ መላዕክት':
        return ' ይወድስዋ መላዕክት';
      case 'የዘወትር ጸሎት':
        return 'የዘወትር ጸሎት'; 
      case 'መልክኣ ማርያም':
        return 'መልክኣ ማርያም';
      case 'መልክኣ ኢየሱስ':
        return 'መልክኣ ኢየሱስ';
    }
  }
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    // After 3 seconds, hide the splash screen
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 3000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(timer);
  }, []);

  const [darkMode, setDarkMode]  = useState('false')
  useEffect(()=>{
    const listener=EventRegister.addEventListener('ChangeTheme' ,(data)=>{setDarkMode(data)})
    return() =>{
      EventRegister.removeAllListeners(listener)
    }
  },[darkMode])

  return (
    <NavigationContainer style={ darkMode==='true' ? styles.dark: styles.light}>
      {showSplash ? (
        <Image
          source={require('./Asset/image.png')}
          style={{ flex: 1, resizeMode: 'cover' }}
        />
      ):(
      <Drawer.Navigator initialRouteName='Main' screenOptions={({ route }) => ({
      drawerIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Setting') {
          iconName = focused ? 'settings' : 'settings-outline';
        } else if (route.name === 'Share') {
          iconName = focused ? 'share' : 'share-outline';
        } else if (route.name === 'About Us') {
          iconName = focused ? 'person' : 'person-outline';
        } else if (route.name === 'ውዳሰ_ማርያም') {
          iconName = focused ? 'home' : 'home-outline';
        }
        return <Ionicons name={iconName} size={size} color={color} />;
      },
    })} drawerContentOptions={{
      headerStyle: { backgroundColor: 'red' },
    }} >
        <Drawer.Screen name='ውዳሰ_ማርያም' component={MyStack } options={({ route }) => ({
            headerTitle: getHeaderTitle(route),
          })} />
        <Drawer.Screen name='About Us' component={About_Us} />
        <Drawer.Screen name='Setting' component={Setting} />
        <Drawer.Screen name='Share' component={Share} />
      </Drawer.Navigator>
      )}
    </NavigationContainer>
  );
}
const styles=StyleSheet.create({
  dark:{
    theme:'dark',
    color:'white',
    backgroundColor:'black',
  },
  light:{
    theme:'light',
    color:'black',
    backgroundColor:'white'
  }
})
