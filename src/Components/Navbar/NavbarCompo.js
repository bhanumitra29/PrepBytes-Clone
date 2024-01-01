import React from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/Navbar.css"
import { FaCaretDown } from 'react-icons/fa'

const NavbarCompo = () => {
  return (
    <div className='navmaindiv'>
      <div>
      <NavLink to='/'>
        <img id='prepimage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg' alt='PrepBytes Logo' />
      </NavLink>

      </div>

   
      <div className='Mcontainer'>

     {/* <div> */}
     <div className='loginDiv'>
        <button class="button1  button"><NavLink className='loginNav1' to="/login">Login</NavLink></button>
        <button class="button2  button"><NavLink className='loginNav2' to="/signup">Sign up</NavLink></button>
    </div>
     {/* </div> */}
   
      <div className='otherRoutes'>
        {/* <NavLink className="NavLinks" to='/study'>Study Material</NavLink> */}
        <div>
        
            <div class="dropdownContainer">
            <button class="DropButton">Study Material<FaCaretDown /></button>
            <div class="SubRoutes">
                <NavLink to="/mocktests">Mock Tests</NavLink>
                <NavLink to="/vediotutorial">Video Tutorial</NavLink>
            </div>
            </div>
</div>
        
<div>
        
        <div class="dropdownContainer">
        <button class="DropButton">Courses and Programs<FaCaretDown /></button>
        <div class="SubRoutes">
            <NavLink to="/master">Master Competitive Programming</NavLink>
            <NavLink to="/fullstack">Full Stack Program</NavLink>
        </div>
        </div>
</div>

        <NavLink className="NavLinks elevation" to='/elevation'>Elevation Academy</NavLink>
       
        <div>
        
        <div class="dropdownContainer">
        <button class="DropButton">Project<FaCaretDown /></button>
        <div class="SubRoutes">
            <NavLink to="#">HTML</NavLink>
            <NavLink to="#">CSS</NavLink>
            <NavLink to="#">JavaScript</NavLink>
            <NavLink to="#">React JS</NavLink>
            <NavLink to="#">Node JS</NavLink>
            <NavLink to="#">MongoDB</NavLink>
        </div>
        </div>
</div>
        
      </div>

      </div>
      {/* <div><p>Hi Bhanumitra</p></div> */}


      {/* <div className='requestMainDiv'>
       <span>Need Help? Talk to us on  079 6900 2111 or <span className='requestText'>Request Callback</span></span>

      </div> */}
      </div>

      
  
  )
}

export default NavbarCompo
