import React, { useState } from 'react'
import AppHeader from '../components/header/AppHeader'
import './register.css'
import FormInput from '../components/forminput/FormInput'


export default function NumberPage() {
  const [values, setValues] = useState({
    number: "",
  });
  const [error, setError] = useState('')
  const [number, setNumber] = useState('')
  const [numberType, setNumberType] = useState('')
  const [isPrime, setIsPrime] = useState('')
  const [factorial, setFactorial] = useState('')


  const inputs = [

    {
      id: 1,
      name: "number",
      placeholder: "Enter Number",
      errorMessage: "Enter the max 2 digit number!",
      label: "Number",
      required: true,
      pattern: `^[0-9\b]+$`


    },



  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (values.number.length > 2) {
      setError('Enter 2 digit Number Only')
      // console.log('greater')
    }
    let body = {
      number: parseInt(values.number),
    };



    try {
      const log = await fetch('http://localhost:5000/number/addnumber', {
        method: 'POST', headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }, body: JSON.stringify(body)
      })
      const response = await log.json()
      console.log("response", response.data)
      if (response.status == true) {
        setNumber(response.data.number)
        setNumberType(response.data.numberType)
        setIsPrime(response.data.isPrime == true ? 'yes' : 'no')
        setFactorial(response.data.factorial)

      }

      setValues({
        number: "",
      })





    } catch (e) {
      console.log("first", e)
    }


  }




  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    setError('')
  };

  return (
    <div>
      <AppHeader />
      <div className="app">
        <form onSubmit={handleSubmit}>
          <h1>Enter Number</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}

          <div>{error}</div>
          <button>Submit</button>
          <div className='table'>
            <div className='gap'>Number: {number}</div>
            <div className='gap'>Number Type: {numberType}</div>
            <div className='gap'>Number Prime/Not: {isPrime}</div>
            <div className='gap'>Factorial: {factorial}</div>
          </div>


        </form>


      </div>
    </div>
  )
}
