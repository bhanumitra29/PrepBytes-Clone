import React from 'react'
import "../styles/Signup.css"
import LoginMini from './LoginMini'

const Login = () => {

 


  return (
    <div className='MainSignupContainer'>
    <div className='miniSignUpContainer'>
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

   <div>
    <LoginMini />
   </div>
   
       
           
        </div>
    </div>
   
    
  )
}

export default Login
