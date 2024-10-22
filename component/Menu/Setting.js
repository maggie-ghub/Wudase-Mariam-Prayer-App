import React, {useState} from 'react'
import { Switch } from 'react-native'
import { EventRegister } from 'react-native-event-listeners';

const Setting = () => {
  const [darkMode, setDarkMode]=useState('false');
  return (
    <Switch value={darkMode} onValueChange={(value)=>{
      setDarkMode(value);
      EventRegister.emit('changeTheme', darkMode)
    }} />
  )
}

export default Setting