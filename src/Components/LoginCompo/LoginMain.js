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
          .post('https://ecommerce-project-backend-w01h.onrender.com/user/register', data)
          .then((res) => {
            // alert(res.data.msg);
            
            
    
            if (res.data.msg === "User Registered successfully") {
              localStorage.setItem('token', res.data.token);
              console.log("token display",res.data.token)
            
              localStorage.setItem("selfname",res.data.userdetail.username)
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
      {/* <div class="text">
         Contact us Form
      </div>  */}
      <form>
         <div class="form-row">
            

            <div class="input-data">
               <input type="email" id='email' name='email' value={data.email} onChange={handleChange} required />
               <div class="underline"></div>
               <label htmlFor='email'>Email</label>
            </div>

            <div class="input-data">
               <input type="password" id='password' name='password' value={data.password} onChange={handleChange} required />
               <div class="underline"></div>
               <label htmlFor='password'>Password</label>
            </div>
         </div>


        
        
            <NavLink to='#'>Forgot your password?</NavLink>
            <div>
                <button onClick={handleSubmit}>SIGN IN</button>
            </div>
            <div><button>Login Via OTP</button></div>
      </form>
      </div>
    </div>
  )
}

export default LoginMain
