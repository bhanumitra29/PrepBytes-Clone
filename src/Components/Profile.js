import React, { useEffect, useState } from 'react'

import { NavLink, useNavigate } from 'react-router-dom'

import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark} from '@fortawesome/free-solid-svg-icons'
import { FaBars, FaBookOpen, FaShareAlt } from 'react-icons/fa'
import "./styles/Profile.css";






const Profile = () => {
  const navigate = useNavigate()
    const hideIcon = true;
  const [purchasedCourses, SetpurchasedCourses]=useState([])
  
  const [handleItem, SethandleItem] = useState(false)
  
  const [name,Setname]=useState(localStorage.getItem("selfname"))
  
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // const closeDropdown = () => {
  //   setShowDropdown(false);
    
  // };

  const selfdashboard=()=>{
    navigate("/profile")
    // setShowDropdown(false);
  }
 
  
  
  useEffect(() => {
        const buyData = async () => {
         try {
            const response1 = await axios.get('https://prepbytes-clone-backend.onrender.com/user/paid');
            SetpurchasedCourses(response1.data)
             
             
         } catch (error) {
           console.log(error);
           }
         };
         buyData(); 
            },[purchasedCourses]);
  const widthhandle={
              width: handleItem ? '90px' : '300px',

              
              
           transition: hideIcon ? ' width 2s': " width 2s"
         
           }
  const hidethetexts={
    display:handleItem ? 'none' : 'block',
   
    
    
  }
    
    const iconhandle=()=>{
        SethandleItem(!handleItem)
        
      
        }
    const logoutbtn3=()=>{
          localStorage.removeItem("selfname")
          localStorage.clear()
          Setname(null)
          // localStorage.setItem("loginhandle",false)
          // setShowDropdown(false);
         
          
        }
    
  return (<>
  <div className='NavbarDashCont'>
  <div className='headCont'>
    <div className='NavbarDashContItem1'>
    <div className='IconPad'>
    { handleItem ?( <div style={widthhandle}> <FaBars onClick={iconhandle} /> </div>):(<div style={widthhandle}> <FontAwesomeIcon onClick={iconhandle} icon={faXmark } /> </div>)}
    </div>
    <div className='headLogo2'>
      
                <NavLink to='/'><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/navbar/logoPrepBytes.svg' alt="Not Found" className='logoShape2'/></NavLink>

            </div>
    </div>
    
   
        </div>
        
        <div className="dropdown21" onClick={toggleDropdown}>
  <div className='dropbtMain1'>
  <div className="dropbtn21">
    <span className="text-round-style1">{name[0].toUpperCase()}</span>
    <span className="text-normal-style1"><span>Hi </span><span>{localStorage.getItem('selfname')} </span></span>
  </div>
  </div>
  <div className={`dropdown-content21 ${showDropdown ? 'show' : ''}`} >
  <button onClick={selfdashboard} className='navbar-logout-btn11'><NavLink to="/profile"><div className='ImageandMy1'><span><FaBookOpen /></span> <span>My Courses</span></div></NavLink></button><br/>
     <button onClick={logoutbtn3}  className='navbar-logout-btn121'><NavLink to="/">Logout</NavLink ></button>
  </div>
  
  </div>
         </div>
    <div className='dashboardSideBox'>

      <div className='dashboardSideBoxItem1' style={widthhandle}>
            <div><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13.18v2.81c0 .73.4 1.41 1.04 1.76l5 2.73c.6.33 1.32.33 1.92 0l5-2.73c.64-.35 1.04-1.03 1.04-1.76v-2.81l-6.04 3.3c-.6.33-1.32.33-1.92 0L5 13.18zm6.04-9.66l-8.43 4.6c-.69.38-.69 1.38 0 1.76l8.43 4.6c.6.33 1.32.33 1.92 0L21 10.09V16c0 .55.45 1 1 1s1-.45 1-1V9.59c0-.37-.2-.7-.52-.88l-9.52-5.19a2.04 2.04 0 00-1.92 0z"></path></svg><NavLink to='/Selfinfo' className="text-dec-none" style={hidethetexts}>My Courses</NavLink></div>
            <div><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM7.07 18.28c.43-.9 3.05-1.78 4.93-1.78s4.51.88 4.93 1.78C15.57 19.36 13.86 20 12 20s-3.57-.64-4.93-1.72zm11.29-1.45c-1.43-1.74-4.9-2.33-6.36-2.33s-4.93.59-6.36 2.33C4.62 15.49 4 13.82 4 12c0-4.41 3.59-8 8-8s8 3.59 8 8c0 1.82-.62 3.49-1.64 4.83zM12 6c-1.94 0-3.5 1.56-3.5 3.5S10.06 13 12 13s3.5-1.56 3.5-3.5S13.94 6 12 6zm0 5c-.83 0-1.5-.67-1.5-1.5S11.17 8 12 8s1.5.67 1.5 1.5S12.83 11 12 11z"></path></svg><NavLink to='/Selfinfo' className="text-dec-none" style={hidethetexts}>My Profile</NavLink></div>
            <div><svg class="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12c1.93 0 3.5-1.57 3.5-3.5S10.93 5 9 5 5.5 6.57 5.5 8.5 7.07 12 9 12zm0-5c.83 0 1.5.67 1.5 1.5S9.83 10 9 10s-1.5-.67-1.5-1.5S8.17 7 9 7zm0 6.75c-2.34 0-7 1.17-7 3.5V18c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-.75c0-2.33-4.66-3.5-7-3.5zM4.34 17c.84-.58 2.87-1.25 4.66-1.25s3.82.67 4.66 1.25H4.34zm11.7-3.19c1.16.84 1.96 1.96 1.96 3.44V19h3c.55 0 1-.45 1-1v-.75c0-2.02-3.5-3.17-5.96-3.44zM15 12c1.93 0 3.5-1.57 3.5-3.5S16.93 5 15 5c-.54 0-1.04.13-1.5.35.63.89 1 1.98 1 3.15s-.37 2.26-1 3.15c.46.22.96.35 1.5.35z"></path></svg><NavLink to='/Selfinfo' className="text-dec-none" style={hidethetexts}>Share & Earn</NavLink></div>
      </div>

    <div className='numberofcourses-style'>
    <div className='courses-length' ><div >Courses ({purchasedCourses.length})</div> </div>
    <hr/>
   
    {/* <div  className='mock-sub-container'>  */}
    <div id='flex-container11'  >
{purchasedCourses.map((item)=>{
    return(<>
      
     <div className='miniContainer11' key={item.id}>
        
        <div className='infoImageDiv11'>
        <img className='infoImage11' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNi42MDEiIGhlaWdodD0iMjYuNjAxIiB2aWV3Qm94PSIwIDAgMjYuNjAxIDI2LjYwMSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzM5NjlhZDtzdHJva2U6IzM5NjlhZDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41IDAuNSkiPjxjaXJjbGUgY2xhc3M9ImEiIGN4PSIwLjUiIGN5PSIwLjUiIHI9IjAuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIgNikiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTIxLjg1MiwzLjc0OWExMi44LDEyLjgsMCwwLDAtMTguMSwxOC4xLDEyLjgwNSwxMi44MDUsMCwwLDAsMTUuNjc1LDEuOSwxLDEsMCwwLDAtMS4wMzYtMS43MTEsMTAuOSwxMC45LDAsMSwxLDMuMzgyLTMuMjUxLDEsMSwwLDAsMCwxLjY2MywxLjExMiwxMi43NjksMTIuNzY5LDAsMCwwLTEuNTgtMTYuMTU3WiIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMjM3LDE4N2ExLDEsMCwwLDAtMSwxdjguOWExLDEsMCwwLDAsMiwwVjE4OEExLDEsMCwwLDAsMjM3LDE4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjQuMiAtMTc3LjY1KSIvPjwvZz48L3N2Zz4=' alt='Not Found' />
        </div>
        
        <div className='ShareDiv11'>
        <FaShareAlt className='shareSymbol11'/>
        </div>

          <div className='techImageDiv11'>
          <img className='techImage11' src ={item.image} alt ='not found' />
          </div>
          <span className='mainHeading11'>{item.name}</span>

          <div className='priceMainContainer11'>

            <div className='allMini11'>
              <span>{item.date}</span>
              <span className='spanDowntext11'>Date</span>
            </div>

            <hr/>

            <div className='allMini11'>
            <span>{item.price}</span>
              <span className='spanDowntext11'>Price</span>
            </div>

            <hr/>

            <div className='allMini11'>
            <span>{item.duration}</span>
              <span className='spanDowntext11'>Duration</span>
            </div>
          </div>

          <button className='buynowButton11'  >Go to Course</button>
        </div>
        
    </>)
    
})}
</div>

      
   
    {/* </div> */}
    </div>
    </div>
    </>)
}

export default Profile