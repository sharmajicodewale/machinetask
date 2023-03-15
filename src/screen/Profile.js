import AsyncStorage from '@react-native-async-storage/async-storage';
import React,{useEffect,useState} from 'react'
import './profile.css'
import { useNavigate } from 'react-router-dom';
import AppHeader from '../components/header/AppHeader';
import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme();
export default function Profile(props) {
 
  const [image,setImage]=useState('https://www.w3schools.com/w3images/avatar6.png')


  const navigate = useNavigate()
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [mobile,setMobile]=useState('')
    // console.log("user",username)
    

    const fetchData=async()=>{
     const userData = await AsyncStorage.getItem('data')
     const user=JSON.parse(userData)
        console.log("datauer>>>",user.email )
        setUsername(user.username)
        setEmail(user.email)
        setMobile(user.mobilenumber)
    }


 

useEffect(() => {
 fetchData()
}, [])


  return (
    <div > 
    <AppHeader />
     <div className='app'>      
         <div className='Card'>
        <div className='upper-container'>
          <div className='image-container'>
            <img src={image} height='100px' width='100px' />
          </div>
          </div>
          <div className='lower-container'>
            <h3>User Name: {username}</h3>
            <h4>Email: {email}</h4>
            <h3>Mobile: {mobile}</h3>
          </div>
       </div>
       </div>

   
       
    

    
     </div>
  )
}
