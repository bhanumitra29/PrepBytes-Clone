import React, { useRef } from 'react'
import "../styles/Project.css";
import "../styles/Navbar.css";
import Footer from '../Footer';
import { NavLink } from 'react-router-dom';

const MongoDB = () => {

  const targetDivRef = useRef(null);

  const handleButtonClick = () => {
   
    targetDivRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };


  return (
    <>
    
      <div class="blog-card">
  <div class="title-content">
    <h3>MONGODB PROJECT</h3>
    <div class="intro"> Ecommerce Web App </div>
  </div>
  <div class="card-info">
  This assessment includes capabilities React.JS and React Router mainly. While developing this project you will understand that how you can create multiple components in React like Smart Components and Dummy Components and how to modify and do data operations within component using state variables and how to communicate between two components props variables. You will also be creating different components like Class Components and Functional Components, and can use Hooks, which is the newest concept of React16. And also you will get comfortable in developing single page application using Browser Router. You will also be developing this application using Redux library, so you will be working on concepts like setting up Redux in React Project following three principles of redux i.e. State, Action and Reducer. Also how to connect and have the communication between the React Components and Redux. You will also be developing Login functionality in this project, which includes the Registration Concept and Login Concept. You will be using JWT tokens to acheive this functionality.
    <button className='readMore' onClick={handleButtonClick}>Project Links </button>
  </div>
  
 
</div>





  <div class="ag-courses_box" ref={targetDivRef}>
    <div class="ag-courses_item">
      <div class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

    
        <div  class="ag-courses-item_title">
          <h2>Host Link:</h2>
          <NavLink className='navLinks' to='https://gleeful-daffodil-71cd10.netlify.app'>https://gleeful-daffodil-71cd10.netlify.app</NavLink>
        </div>

        <div  class="ag-courses-item_title">
          <h2>FrontEnd Repo Link:</h2>
          <NavLink className='navLinks' to='https://github.com/bhanumitra29/Ecommerce_Project'>https://github.com/bhanumitra29/Ecommerce_Project</NavLink>
        </div>

        <div  class="ag-courses-item_title">
          <h2>BackEnd Repo Link:</h2>
          <NavLink className='navLinks' to='https://github.com/bhanumitra29/Ecommerce_Project_Backend'>https://github.com/bhanumitra29/Ecommerce_Project_Backend</NavLink>
        </div>
        
      </div>
    </div>

   

  </div>



<Footer />
    
    </>
  )




    
}

export default MongoDB
