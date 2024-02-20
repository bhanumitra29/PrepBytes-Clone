import React, { useRef } from 'react'
import "../styles/Project.css";
import "../styles/Navbar.css";
import Footer from '../Footer';
import { NavLink } from 'react-router-dom';

const ReactCompo = () => {

  const targetDivRef = useRef(null);

  const handleButtonClick = () => {
   
    targetDivRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };


  return (
    <>
    
      <div class="blog-card">
  <div class="title-content">
    <h3>REACT PROJECT</h3>
    <div class="intro"> React Blog Web App </div>
  </div>
  <div class="card-info">
  This assessment includes capabilities React.JS and React Router mainly. While developing this project you will understand that how you can create multiple components in React like Smart Components and Dummy Components and how to modify and do data operations within component using state variables and how to communicate between two components props variables. You will also be creating different components like Class Components and Functional Components, and can use Hooks, which is the newest concept of React16. And also you will get comfortable in developing single page application using Browser Router.
    <button className='readMore' onClick={handleButtonClick}>Project Links </button>
  </div>
  
 
</div>





  <div class="ag-courses_box" ref={targetDivRef}>
    <div class="ag-courses_item">
      <div class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

    
        <div  class="ag-courses-item_title">
          <h2>Host Link:</h2>
          <NavLink className='navLinks' to='https://calm-pothos-7a66b2.netlify.app'>https://calm-pothos-7a66b2.netlify.app</NavLink>
        </div>

        <div  class="ag-courses-item_title">
          <h2>Repo Link:</h2>
          <NavLink className='navLinks' to='https://github.com/bhanumitra29/React_Blog_Web_App'>https://github.com/bhanumitra29/React_Blog_Web_App</NavLink>
        </div>

        
      </div>
    </div>

   

  </div>



<Footer />
    
    </>
  )




    
}

export default ReactCompo
