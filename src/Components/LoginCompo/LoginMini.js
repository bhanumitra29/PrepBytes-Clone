import React, { useState } from 'react'
import LoginMain from './LoginMain'
import SignupMain from './SignupMain'

const LoginMini = () => {
    const [button1,setButton1]=useState(true)
    const [button2,setButton2]=useState(false)


    const handleButton1=()=>{
        setButton1(true)
        setButton2(false)
        
    }

    const handleButton2=()=>{
        setButton2(true)
        setButton1(false)
    }
  return (

    <div>
      <div>
        <div className='LogButtonsDiv'>
          <div className='LogButtonsDivIn'>
            <button
              className={`LoginupButton ${button1 ? 'active' : ''}`}
              onClick={handleButton1}
            >
              Login
            </button>
            <button
              className={`SiginUpButton ${button2 ? 'active' : ''}`}
              onClick={handleButton2}
            >
              Sign Up
            </button>

           
          </div>
          
        </div>
        <div>
          {button1 ? <LoginMain /> : ''}
          {button2 ? <SignupMain /> : ''}
        </div>
      </div>
    </div>

    
  )
}

export default LoginMini
