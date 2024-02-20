import axios from 'axios';
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import "../styles/Signup.css"
const LoginMain = () => {

    const [data, setData] = useState({
        
        email: "",
       
        password: "",
        
      });
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        setData({
          ...data,
          [e.target.name]: e.target.value,
        });
        console.log(data)
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        // if (!data.name || !data.phone || !data.email || !data.password) {
        //   alert("Please fill in all fields before submitting.");
        //   return;
        // }
    
        axios
          .post('https://prepbytes-clone-backend.onrender.com/user/login', data)
          .then((res) => {
            // alert(res.data.msg);
            
            
    
            if (res.data.msg === "User login successfully") {
              localStorage.setItem('token', res.data.token);
              console.log("token display",res.data.token)
            
              localStorage.setItem("selfname",res.data.userdetail.name)
              localStorage.setItem("selfdetails",res.data.userdetail.email)
            
              alert(res.data.msg)
              navigate('/')
             
            }
            else{
              alert(res.data.msg)
            }
          })
          .catch((error) => {
            console.log(error);
            
          });
    

        setData({
         
          email: "",
          
          password: "",
         
         
        });
      };
    

  return (
    <div>
       <div class="Formcontainer">
      <div class="head123">
      Sign in to your account
      </div> 
      <form>
         <div class="form-row">
            

            <div class="input-data">
               <input type="email" id='email' name='email' value={data.email} onChange={handleChange} required />
               {/* <div class="underline"></div> */}
               <label className='labelname' htmlFor='email'>Email</label>
            </div>

            <div class="input-data">
               <input type="password" id='password' name='password' value={data.password} onChange={handleChange} required />
               {/* <div class="underline"></div> */}
               <label className='labelname' htmlFor='password'>Password</label>
            </div>
         </div>


        
        
            <NavLink className='ForgotNav' to='#'>Forgot your password?</NavLink>
            <div className='SignUpMainDiv'>
                <button className='SignUpMainButton' onClick={handleSubmit}>SIGN IN</button>
            </div>
            <div className='SignUpMainDiv1'><button className='SignUpMainButton1'>Login Via OTP</button></div>
      </form>
      </div>
    </div>
  )
}

export default LoginMain
