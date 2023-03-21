import { useState } from "react";
import "./register.css";
import FormInput from '../components/forminput/FormInput'
import Grid from '@mui/material/Grid';
import Swal from "sweetalert2"
import { useNavigate } from "react-router-dom"
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Login({ setIsLoggedIn }) {
 
    const navigate = useNavigate()
   
    const [values, setValues] = useState({
        email: "",
        password: "",

    });

    const inputs = [

        {
            id: 2,
            name: "email",
            placeholder: "Email/Mobile",
            errorMessage: "It should be a valid email address/mobile number!",
            label: "Email/Mobile",
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

    ];

    const handleSubmit = async (e) => {

        e.preventDefault();

        let body = {
            email: values.email,
            password: values.password,

        };

        try {
            const log = await fetch('http://localhost:5000/users/chkuserlogin', {
                method: 'POST', headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }, body: JSON.stringify(body)
            })
            const response = await log.json()
            // console.log("first", response)

            if (response.status == true) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successfully',
                    timer: 1500

                })
                const jsonValue = JSON.stringify(response.data)
                await AsyncStorage.setItem('data', jsonValue)
                navigate('/profile')
                setIsLoggedIn(true);

            }
            else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Invalid email/mobile or password!',
                    timer: 1500
                })
            }




        } catch (e) {
            console.log("first", e)
        }


// console.log('value', values.email)
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };


    return (
        <div className="app">
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
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
                <div onClick={()=>navigate('/')} className='link'>
                  
                        Don't have an account? Sign Up
                  
                    </div>
                </Grid>
            </form>


        </div>
    )
}
