import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "../styles/Signup.css"

const SignupMain = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        college:"",
        year:"",
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
          .post('https://prepbytes-clone-backend.onrender.com/user/register', data)
          .then((res) => {
            // alert(res.data.msg);
            
            
    
            if (res.data.msg === "User Registered successfully") {
              localStorage.setItem('token', res.data.token);
              console.log("token display",res.data.token)
              navigate('/login');
              // toast.success(res.data.msg)
              alert(res.data.msg)
            }
            else{
              alert(res.data.msg)
            }
          })
          .catch((error) => {
            console.log(error);
            
          });
    

        setData({
          name: "",
          email: "",
          phone: "",
          password: "",
          college:"",
          year:"",
        });
      };
    

  return (
    <div>
       <div class="Formcontainer">
      <div class="head123">
      Create your new account
      </div> 
    
      <form>
         <div class="form-row">
            <div class="input-data">
               <input type="text" id='name' name='name' value={data.name} onChange={handleChange} required />
               {/* <div class="underline"></div> */}
               <label className='labelname' htmlFor='name'>Name</label>
            </div>

            <div class="input-data">
               <input type="email" id='email' name='email' value={data.email} onChange={handleChange} required />
               {/* <div class="underline"></div> */}
               <label className='labelname' htmlFor='email'>Email</label>
            </div>
         </div>


         <div class="form-row">
            <div class="input-data">
               <input type="number" id='phone' name='phone' value={data.phone} onChange={handleChange} required />
               {/* <div class="underline"></div> */}
               <label className='labelname' htmlFor='phone'>Phone no.</label>
            </div>

            <div class="input-data">
               <input type="password" id='password' name='password' value={data.password} onChange={handleChange} required />
               {/* <div class="underline"></div> */}
               <label className='labelname' htmlFor='password'>Password</label>
            </div>
         </div>
         
         <div class="form-row1">
            <div class="input-data">
               <input type="text" id='college' name='college' value={data.college} onChange={handleChange} required />
               {/* <div class="underline"></div> */}
               <label className='labelname' htmlFor='college'>College</label>
            </div>

            <div class="input-data">
               <input type="number" id='year' name='year' value={data.year} onChange={handleChange} required />
               {/* <div class="underline"></div> */}
               <label className='labelname' htmlFor='year'>Passing Year</label>
            </div>
         </div>

        <div className='termsMainDiv'>
        <input type='checkbox' name='agree' required/>  <span className='IAgree'>I agree to the</span> <span className='termsSpan'>terms and conditions</span>.
        </div>

            <div className='SignUpMainDiv'>
                <button className='SignUpMainButton' onClick={handleSubmit}>SIGN UP</button>
            </div>
      </form>
      </div>
    </div>
  )
}

export default SignupMain
