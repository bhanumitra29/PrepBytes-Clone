import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../styles/Navbar.css"
import { FaCaretDown } from 'react-icons/fa'
import axios from 'axios'

const NavbarCompo = () => {

  // const [isOpen, setIsOpen] = useState(false);
  const [loginout, setloginout] = useState(false);
  const navigate=useNavigate();
  const temp=localStorage.getItem("selfname")
  console.log(temp)
//  const [profilename,setprofilename]=useState("hi")
  const token = localStorage.getItem("token");
  //console.log(token)
  useEffect(() => {
    if (token) {
      console.log(token);
      // console.log("########################")
        axios.get("https://prepbytes-clone-backend.onrender.com/user/auth", { headers: { "authorization": `Bearer ${token}` } }) 
            .then((res) => {
                console.log(res.data.msg);
                if (res.data.msg ==="User Authorized") {
                      setloginout(true);
                      // setprofilename(localStorage.getItem("selfname").substring(0, 5))
                      // navigate("/")
                  

              }                
            })
            .catch(err => console.log(err))
    }
    
}, [token,navigate])

const selfdashboard=()=>{
  navigate("/profile")
}
const logoutbtn=()=>{
  localStorage.clear()
  setloginout(false)
  // setIsOpen(false);
  navigate('/login')
}



  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // };

  
  // const closeMenu = () => {
  //   setIsOpen(false);
  // };

  // const dropdownMenuStyle = {
  //   display: isOpen ? 'block' : 'none',
  // };


  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className='navmaindiv'>
      <div>
      <NavLink to='/'>
        <img id='prepimage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg' alt='PrepBytes Logo' />
      </NavLink>

      </div>

   
      <div className='Mcontainer'>

     {/* <div> */}
     {loginout ? <></> :
     <div className='loginDiv'>
        <button class="button1  button"><NavLink className='loginNav1' to="/login">Login</NavLink></button>
        <button class="button2  button"><NavLink className='loginNav2' to="/signup">Sign up</NavLink></button>
    </div>}
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
            <NavLink to="/html">HTML</NavLink>
            <NavLink to="/css">CSS</NavLink>
            <NavLink to="/js">JavaScript</NavLink>
            <NavLink to="reactjs">React JS</NavLink>
            <NavLink to="/nodejs">Node JS</NavLink>
            <NavLink to="mongodb">MongoDB</NavLink>
        </div>
        </div>
</div>
        
      </div>

      </div>
      {/* <div><p>Hi Bhanumitra</p></div> */}

      { loginout ? (<div className="dropdown2" onClick={toggleDropdown}>
  <div className='dropbtMain'>
  <div className="dropbtn2">
    <span className="text-round-style">{temp[0].toUpperCase()}</span>
    <span className="text-normal-style"><span>Hi </span><span>{localStorage.getItem('selfname')} </span></span>
  </div>
  </div>
  <div className={`dropdown-content2 ${showDropdown ? 'show' : ''}`}>
  <button onClick={selfdashboard} className='navbar-logout-btn1'><NavLink to="/profile"><div className='ImageandMy'><span><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS4yMjMiIGhlaWdodD0iMjIuODg4IiB2aWV3Qm94PSIwIDAgMTkuMjIzIDIyLjg4OCI+CiAgPGcgaWQ9InJlYWRpbmctYm9vayIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTQwLjk5NCkiPgogICAgPHBhdGggaWQ9IlBhdGhfMSIgZGF0YS1uYW1lPSJQYXRoIDEiIGQ9Ik02MC4yMTcsMTQuNzUyYTIuMjM5LDIuMjM5LDAsMCwwLTEuNzg4LTIuMTlWMTAuMTQ4YS42NzEuNjcxLDAsMCwwLS45MDYtLjYyOGwtMS4yOC40OGE3LjgxOCw3LjgxOCwwLDAsMC0yLjk4MS0xLjkzNiw0LjQ3LDQuNDcsMCwxLDAtNS4zMTIsMEE3LjgxOCw3LjgxOCwwLDAsMCw0NC45NjgsMTBsLTEuMjgtLjQ4YS42NzEuNjcxLDAsMCwwLS45MDYuNjI4djIuNDE0YTIuMjM1LDIuMjM1LDAsMCwwLDAsNC4zOHYyLjU5M2EuNjcxLjY3MSwwLDAsMCwuNDM1LjYyOGw3LjE1MywyLjY4MmEuNjc4LjY3OCwwLDAsMCwuNDcxLDBsNy4xNTMtMi42ODJhLjY3MS42NzEsMCwwLDAsLjQzNS0uNjI4VjE2Ljk0MkEyLjIzOSwyLjIzOSwwLDAsMCw2MC4yMTcsMTQuNzUyWk00Ny40NzYsNC40N0EzLjEyOSwzLjEyOSwwLDEsMSw1MC42MDUsNy42LDMuMTMzLDMuMTMzLDAsMCwxLDQ3LjQ3Niw0LjQ3Wm0zLjEyOSw0LjQ3YTYuNDcyLDYuNDcyLDAsMCwxLDQuMjQyLDEuNTgybC00LjI0MiwxLjU5MS00LjI0Mi0xLjU5MUE2LjQ3Miw2LjQ3MiwwLDAsMSw1MC42MDUsOC45NDFabS04LjI3LDUuODExYS45LjksMCwwLDEsLjg5NC0uODk0aC40NDd2MS43ODhoLS40NDdBLjkuOSwwLDAsMSw0Mi4zMzUsMTQuNzUyWm0xLjc4OCwyLjIxM2ExLjEyLDEuMTIsMCwwLDAsLjg5NC0xLjFWMTMuNjM1YTEuMTIsMS4xMiwwLDAsMC0uODk0LTEuMVYxMS4xMTVsNS44MTEsMi4xNzlWMjEuMjVsLTUuODExLTIuMTc5Wm03LjE1Myw0LjI4NVYxMy4yOTVsNS44MTEtMi4xNzlWMTIuNTRhMS4xMiwxLjEyLDAsMCwwLS44OTQsMS4xVjE1Ljg3YTEuMTIsMS4xMiwwLDAsMCwuODk0LDEuMXYyLjEwNlptNi43MDYtNS42aC0uNDQ3VjEzLjg1OGguNDQ3YS44OTQuODk0LDAsMCwxLDAsMS43ODhaIiBmaWxsPSIjMDM2Ii8+CiAgPC9nPgo8L3N2Zz4K' alt='Not Found' /></span> <span>My Dashboard</span></div></NavLink></button><br/>
     <button onClick={logoutbtn} className='navbar-logout-btn12'><NavLink to="/">Logout</NavLink ></button>
  </div>
  
  </div>):(<> </>)}



      {/* <div className='requestMainDiv'>
       <span>Need Help? Talk to us on  079 6900 2111 or <span className='requestText'>Request Callback</span></span>

      </div> */}
      </div>

      
  
  )
}

export default NavbarCompo
