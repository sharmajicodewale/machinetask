import { useState } from "react";
import "./register.css";
import FormInput from '../components/forminput/FormInput'
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Swal from "sweetalert2"
import {useNavigate} from "react-router-dom"


const Register = () => {
  var navigate=useNavigate()
  const [values, setValues] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      pattern:`^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]`,
      required: true,
    },
    {
      id: 3,
      name: "mobile",
      type: "mobile",
      placeholder: "Mobile Number",
      label: "Mobile Number",
      errorMessage: "It should be a 10 digit valid Mobile number!",
      pattern:`^[0-9]{10}$`,
      required: true,
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
  ];

  const handleSubmit = async(e) => {
    e.preventDefault();
    let body = {
      username: values.username,
      email: values.email,
      mobilenumber: values.mobile,
      password: values.password,
     
    };
    
    try{
      const log=await fetch('http://localhost:5000/users/addnewuser',{ method: 'POST',headers: { 
           'Accept': 'application/json',
           'Content-Type': 'application/json' 
           },body:JSON.stringify(body)})
           const response = await log.json()
           console.log("first",response.status)
           
           if(response.status==true)
           {
             Swal.fire({
               icon: 'success',
               title: 'Register Successfully',
               timer: 1500
                  
             })
         
             navigate('/login')
       
           }
           else
           {
             Swal.fire({
               icon: 'error',
               title: 'Oops...',
               text: 'Something went wrong!',
               timer: 1500
             })
           }
    
  
    
   
         }catch(e){
           console.log("first",e)
         }

   
    // console.log('value',body)
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button>Submit</button>
        <Grid item>
                <Link href="/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
      </form>

    
    </div>
  );
};

export default Register;