import React, { useState } from 'react'
import "../styles/Signup.css"
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Signup = () => {

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
        // alert("User registration failed, please try again");
        // toast.remove("User registration failed, please try again")
      });

    // Clear the form data after submission
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
    <div className='MainSignupContainer'>
    <div className='miniContainer'>
        {/* <div className='subContainer'> */}
            <div>
                <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/illustrated.webp' alt='Not Found' />
            </div>

            <div>

            <div className='PContainer'>
                <div className='prepLogo'>
                    <img className='PrepImg' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logo.webp' alt='not found' />
                </div>
            <div className='picContainer'>
                <div><img className='BoxImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/students.webp' alt='not Found' /></div>
                <div className='pContainer'>
                    <span className='Number'>10K+</span>
                    <span>Students Enrolled</span>
                </div>
            </div>

            <div className='picContainer'>
                <div><img className='BoxImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/college.webp' alt='not Found' /></div>
                <div className='pContainer'>
                    <span className='Number'>1000+</span>
                    <span>Reach in Colleges</span>
                </div>
            </div>

            <div className='picContainer'>
                <div><img className='BoxImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/learning.webp' alt='not Found' /></div>
                <div className='pContainer'>
                    <span className='Number'>10K+</span>
                    <span>Hours of Learning</span>
                </div>
            </div>

            <div className='picContainer'>
                <div><img className='BoxImage' src='	https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/social.webp' alt='not Found' /></div>
                <div className='pContainer'>
                    <span className='Number'>150K+</span>
                    <span>Social Community</span>
                </div>
            </div>

            </div>

        {/* </div> */}
    </div>

   
    <div class="container">
      {/* <div class="text">
         Contact us Form
      </div>  */}
      <form action="#">
         <div class="form-row">
            <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">Name</label>
            </div>
            <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">Email</label>
            </div>
         </div>
         <div class="form-row">
            <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">Phone no.</label>
            </div>
            <div class="input-data">
               <input type="password" required/>
               <div class="underline"></div>
               <label for="">Password</label>
            </div>
         </div>
         
         <div class="form-row1">
            <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">College</label>
            </div>
            <div class="input-data">
               <input type="text" required/>
               <div class="underline"></div>
               <label for="">Passing Year</label>
            </div>
         </div>
        
            <div class="form-row submit-btn">
               <div class="input-data">
                  <div class="inner"></div>
                  <input type="submit" value="submit"/>
               </div>
            </div>
      </form>
      </div>
       
           
        </div>
    </div>
   
    
  )
}

export default Signup
