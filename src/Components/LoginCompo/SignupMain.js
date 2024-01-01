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
          .post('https://ecommerce-project-backend-w01h.onrender.com/user/register', data)
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
      {/* <div class="text">
         Contact us Form
      </div>  */}
      <form>
         <div class="form-row">
            <div class="input-data">
               <input type="text" id='name' name='name' value={data.name} onChange={handleChange} required />
               <div class="underline"></div>
               <label htmlFor='name'>Name</label>
            </div>

            <div class="input-data">
               <input type="email" id='email' name='email' value={data.email} onChange={handleChange} required />
               <div class="underline"></div>
               <label htmlFor='email'>Email</label>
            </div>
         </div>


         <div class="form-row">
            <div class="input-data">
               <input type="Number" id='phonenumber' name='phonenumber' value={data.phone} onChange={handleChange} required />
               <div class="underline"></div>
               <label htmlFor='phonenumber'>Phone no.</label>
            </div>

            <div class="input-data">
               <input type="password" id='password' name='password' value={data.password} onChange={handleChange} required />
               <div class="underline"></div>
               <label htmlFor='password'>Password</label>
            </div>
         </div>
         
         <div class="form-row1">
            <div class="input-data">
               <input type="text" id='college' name='college' value={data.college} onChange={handleChange} required />
               <div class="underline"></div>
               <label htmlFor='college'>College</label>
            </div>

            <div class="input-data">
               <input type="Number" id='passingyear' name='passingyear' value={data.year} onChange={handleChange} required />
               <div class="underline"></div>
               <label htmlFor='passingyear'>Passing Year</label>
            </div>
         </div>

        <div>
        <input type='checkbox' name='agree' required/>  agree to terms & conditions
        </div>

            <div>
                <button onClick={handleSubmit}>SIGN UP</button>
            </div>
      </form>
      </div>
    </div>
  )
}

export default SignupMain
