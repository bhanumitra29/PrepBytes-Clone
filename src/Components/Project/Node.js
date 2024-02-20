import React, { useRef } from 'react'
import "../styles/Project.css";
import "../styles/Navbar.css";
import Footer from '../Footer';
import { NavLink } from 'react-router-dom';

const Node = () => {

  const targetDivRef = useRef(null);

  const handleButtonClick = () => {
   
    targetDivRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };


  return (
    <>
    
      <div class="blog-card">
  <div class="title-content">
    <h3>NODE PROJECT</h3>
    <div class="intro"> React Blog App Backend </div>
  </div>
  <div class="card-info">
  This project mainly revolves around technologies like Node.JS and Express. During its development you will understand that how to create a server and then how to expose the APIs having data using express server. And also they will understand how to create the structure of data and maintain the data.
    <button className='readMore' onClick={handleButtonClick}>Project Links </button>
  </div>
  
 
</div>





  <div class="ag-courses_box" ref={targetDivRef}>
    <div class="ag-courses_item">
      <div class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

    
        <div  class="ag-courses-item_title">
          <h2>Host Link:</h2>
          <NavLink className='navLinks' to='https://lovely-llama-40be06.netlify.app'>https://lovely-llama-40be06.netlify.app</NavLink>
        </div>

        <div  class="ag-courses-item_title">
          <h2>FrontEnd Repo Link:</h2>
          <NavLink className='navLinks' to='https://github.com/bhanumitra29/React-Blog-App-Backend'>https://github.com/bhanumitra29/React-Blog-App-Backend</NavLink>
        </div>

        <div  class="ag-courses-item_title">
          <h2>BackEnd Repo Link:</h2>
          <NavLink className='navLinks' to='https://github.com/bhanumitra29/NodeServer_api'>https://github.com/bhanumitra29/NodeServer_api</NavLink>
        </div>
        
      </div>
    </div>

   

  </div>



<Footer />
    
    </>
  )




    
}

export default Node
