import { makeStyles } from '@mui/styles'

const useStyles= makeStyles({

sticky:{
    width:'100%',
    display:'flex',
    justifyContent:'space-between',
    alignItems:'center',
    backgroundColor:'#dff9fb'
   
},
profileInfo:{
display:'flex',

},

btnstyle:{
    fontWeight:'bold',
    textTransform:'capitalize',
    borderRadius:15,
    background:'none',
    color:'#000',
    padding:10,
    border:'none',
    backgroundColor:'#fff',
    margin:10,

    "&:hover": {
        background: "#22a6b3",
        cursor:'pointer'
      }
  
},
btnstylelogut:{
    fontWeight:'bold',
    textTransform:'capitalize',
    borderRadius:15,
    background:'none',
    color:'#fff',
    padding:10,
    border:'none',
    backgroundColor:'red',
    margin:10,
    justifyContent:'flex-end',

    "&:hover": {
        background: "#22a6b3",
        cursor:'pointer'
      }
}



})

export { useStyles }