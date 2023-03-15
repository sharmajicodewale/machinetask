import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useStyles } from './AppHeaderCss';

export default function AppHeader() {
    const classes=useStyles()
    var navigate = useNavigate()
    const handleHost=()=>{
        navigate("/profile")
      }
      const handleHome=()=>{
        navigate("/page")
      }
  return (
    <div className={classes.sticky} style={{ boxShadow: '1px 3px 3px grey'}}> 
    <div className={classes.profileInfo}>
       <input type="button" className={classes.btnstyle} onClick={handleHost} value="Profile Details"  />
       <input type="button" className={classes.btnstyle} onClick={handleHome} value="Check Number"  />
        </div>
     </div>
  )
}
