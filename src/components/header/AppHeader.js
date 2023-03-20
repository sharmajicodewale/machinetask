import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useStyles } from './AppHeaderCss';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AppHeader() {
  const classes = useStyles()
  var navigate = useNavigate()
  const handleHost = () => {
    navigate("/profile")
  }
  const handleNumber = () => {
    navigate("/page")
  }

  const handlelogut=async()=>{
    await AsyncStorage.clear()
    navigate("/login")
  }

  return (
    <div className={classes.sticky} style={{ boxShadow: '1px 3px 3px grey', justifyContent: 'flex-end' }}>
      <div className={classes.profileInfo}>
        <input type="button" className={classes.btnstyle} onClick={handleHost} value="Profile Details" />
        <input type="button" className={classes.btnstyle} onClick={handleNumber} value="Check Number" />
        <input type="button" className={classes.btnstylelogut} onClick={handlelogut} value="Logout" />
      </div>

    </div>
  )
}
