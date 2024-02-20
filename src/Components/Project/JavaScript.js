import React, { useRef } from 'react'
import "../styles/Project.css";
import "../styles/Navbar.css";
import Footer from '../Footer';
import { NavLink } from 'react-router-dom';

const JavaScript = () => {

  const targetDivRef = useRef(null);
  const targetDivRef1 = useRef(null);

  const handleButtonClick = () => {
   
    targetDivRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  const handleButtonClick1 = () => {
   
    targetDivRef1.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };

  return (
    <>
    
      <div class="blog-card">
  <div class="title-content">
    <h3>JAVASCRIPT PROJECT</h3>
    <div class="intro">Reminder Clock App</div>
  </div>
  <div class="card-info">
  While developing this project, you will get to work on multiple HTML tags, and various CSS properties. Most importantly you will get introduced with the functions required for DOM manipulation. Also how to add dynamic HTML using JS and Date function of JS.
    <button className='readMore' onClick={handleButtonClick}>Project Links </button>
  </div>
  
 
</div>




  <div class="ag-courses_box" ref={targetDivRef}>
    <div class="ag-courses_item">
      <div class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div  class="ag-courses-item_title">
          <h2>Host Link:</h2>
          <NavLink className='navLinks' to='https://bhanumitra29.github.io/Reminder_clock_app/'>https://bhanumitra29.github.io/Reminder_clock_app/</NavLink>
        </div>

        <div  class="ag-courses-item_title">
          <h2>Repo Link:</h2>
          <NavLink className='navLinks' to='https://github.com/bhanumitra29/Reminder_clock_app'>https://github.com/bhanumitra29/Reminder_clock_app</NavLink>
        </div>

        
      </div>
    </div>


  

  </div>


  <div class="blog-card">
  <div class="title-content">
    <h3>JAVASCRIPT PROJECT</h3>
    <div class="intro"> Todo App JS </div>
  </div>
  <div class="card-info">
  This project contains the capabilties of JS.
During the development of this project you will understand that how do you connect the HTML pages with functionality written in JS files, you will be using multiple DOM functions which will make your static application as Dynamic application where you can do multiple operations on user input and change the look and view of page based on user input, also known as adding Dynamic HTML in the website based on user's input.
  <button className='readMore' onClick={handleButtonClick1}>Project Links </button>
  </div>
  
 
</div>




  <div class="ag-courses_box" ref={targetDivRef1}>
    <div class="ag-courses_item">
      <div class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div  class="ag-courses-item_title">
          <h2>Host Link:</h2>
          <NavLink className='navLinks' to='https://bhanumitra29.github.io/Todo_App_JS/'>https://bhanumitra29.github.io/Todo_App_JS/</NavLink>
        </div>

        <div  class="ag-courses-item_title">
          <h2>Repo Link:</h2>
          <NavLink className='navLinks' to='https://github.com/bhanumitra29/Todo_App_JS'>https://github.com/bhanumitra29/Todo_App_JS</NavLink>
        </div>

        
      </div>
    </div>
  </div>


<Footer />
    
    </>
  )




    
}

export default JavaScript
