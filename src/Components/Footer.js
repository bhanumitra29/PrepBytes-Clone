import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaPhone, FaMailBulk, FaLinkedin} from 'react-icons/fa'
import "./styles/Footer.css"
const Footer = () => {
  return (
    <>
    <div className='mainparentfooter'>
    <div className="footer">

      <div className="footer-section">
        <h3>FOLLOW US</h3>
        {/* <div className='allicons'> */}
              <FaFacebook className='icons facebook' />
              <FaInstagram className='icons instagram' />
              <FaLinkedin className='icons twitter' />
              <FaYoutube className='icons youtube' />
              {/* <FaGithub className='icons github' />          */}
            {/* </div> */}
      </div>


     
      <div className="footer-section about">
        <h3>CONTACT US</h3>
        <p><FaPhone /> +91-7969 0011 21</p>
        <p><FaMailBulk /> support@abc1234.com</p>
      </div>

</div>


<div className="footer1">
      
<div className='mainquicklinks'>
      <h3>LATEST ARTICLES</h3>
      {/* <div className="footer-section quick-links"> */}
   
        
        {/* <div className='dividelinks'> */}
        <ul>
          <li>
            <NavLink to="/">find Command in Linux with Examples</NavLink>
          </li>
          <li>
            <NavLink to="/all">awk Command in unix/linux with Examples</NavLink>
          </li>
          <li>
            <NavLink to="/mobiles">grep Command in unix linux</NavLink>
          </li>

         
          <li>
            <NavLink to="/electronics">ps Command in Linux with Examples</NavLink>
          </li>
          <li>
            <NavLink to="/watches">curl Command in Linux with Examples</NavLink>
          </li>
          </ul>
          </div>
          
          
          <div className='mainquicklinks'>
      <h3>LATEST ARTICLES</h3>
     
        <ul>
          <li>
            <NavLink to="/">find Command in Linux with Examples</NavLink>
          </li>
          <li>
            <NavLink to="/all">awk Command in unix/linux with Examples</NavLink>
          </li>
          <li>
            <NavLink to="/mobiles">grep Command in unix linux</NavLink>
          </li>

         
          <li>
            <NavLink to="/electronics">ps Command in Linux with Examples</NavLink>
          </li>
          <li>
            <NavLink to="/watches">curl Command in Linux with Examples</NavLink>
          </li>
          </ul>
          </div>

          </div>
          
    
    <div className="footer2">

      <div className='mainquicklinks1'>
      <h3>Quick Links</h3>
      {/* <div className="footer-section quick-links"> */}
   
        
        {/* <div className='dividelinks'> */}
        <ul>
          <li>
            <NavLink to="/">Interview Notes</NavLink>
          </li>
          <li>
            <NavLink to="/all">Mock Tests</NavLink>
          </li>
          <li>
            <NavLink to="/mobiles">Placement Programs</NavLink>
          </li>

         
          <li>
            <NavLink to="/electronics">Coding Courses</NavLink>
          </li>
          <li>
            <NavLink to="/watches">About Us</NavLink>
          </li>

          <li>
            <NavLink to="/watches">Blog</NavLink>
          </li>
          </ul>
          </div>
          
          </div>
      {/* </div> */}
      {/* </div> */}
      
    {/* <hr className='lasthr1'/> */}
    </div>

    <div className='policiesMain'>
      <div className='policies'>
        <div><p>Copyright©2023</p></div>
        <div>
       <p> <span className='spanSpace'>Privacy Policy</span><span className='spanSpace'>Refund Policy</span><span className='spanSpace'>Terms of Use of Use</span></p>
        </div>
        </div>
      </div>
    </>
  );
};

export default Footer;