import React, { useRef } from 'react'
import "../styles/Project.css";
import "../styles/Navbar.css";
import Footer from '../Footer';
import { NavLink } from 'react-router-dom';

const Css = () => {

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
    <h3>CSS PROJECT</h3>
    <div class="intro">Todo App UI Web </div>
  </div>
  <div class="card-info">
  This project contains the capabilties of HTML, CSS. During the development of this project you will understand that how do you connect the HTML pages with CSS files and style the pages, you will be developing styled static application containing HTML files and CSS files. And understand the difference between Internal CSS, External CSS and Inline CSS and CSS properties like margin, display, box property, padding etc.
    <button className='readMore' onClick={handleButtonClick}>Project Links </button>
  </div>
  
 
</div>




  <div class="ag-courses_box" ref={targetDivRef}>
    <div class="ag-courses_item">
      <div class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div  class="ag-courses-item_title">
          <h2>Host Link:</h2>
          <NavLink className='navLinks' to='https://bhanumitra29.github.io/Todo-App-UI-Web/'>https://bhanumitra29.github.io/Todo-App-UI-Web/</NavLink>
        </div>

        <div  class="ag-courses-item_title">
          <h2>Repo Link:</h2>
          <NavLink className='navLinks' to='https://github.com/bhanumitra29/Todo-App-UI-Web'>https://github.com/bhanumitra29/Todo-App-UI-Web</NavLink>
        </div>

        
      </div>
    </div>


  

  </div>


  <div class="blog-card">
  <div class="title-content">
    <h3>CSS PROJECT</h3>
    <div class="intro"> Todo App UI Web </div>
  </div>
  <div class="card-info">
  This project contains the capabilties of HTML, CSS. During the development of this project you will understand that how do you connect the HTML pages with CSS files and style the pages, you will be developing styled static application containing HTML files and CSS files. And understand the difference between Internal CSS, External CSS and Inline CSS and CSS properties like margin, display, box property, padding etc.
  TIn this project you will be developing the application in a way that same website can work on multiple devices having different screen sizes in pixels. To acheive this you will be using Media Queries, one of the finest concept in CSS to build responsive applications.
  <button className='readMore' onClick={handleButtonClick1}>Project Links </button>
  </div>
  
 
</div>




  <div class="ag-courses_box" ref={targetDivRef1}>
    <div class="ag-courses_item">
      <div class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div  class="ag-courses-item_title">
          <h2>Host Link:</h2>
          <NavLink className='navLinks' to='https://bhanumitra29.github.io/Todo-App-UI-Mobile/'>https://bhanumitra29.github.io/Todo-App-UI-Mobile/</NavLink>
        </div>

        <div  class="ag-courses-item_title">
          <h2>Repo Link:</h2>
          <NavLink className='navLinks' to='https://github.com/bhanumitra29/Todo-App-UI-Mobile'>https://github.com/bhanumitra29/Todo-App-UI-Mobile</NavLink>
        </div>

        
      </div>
    </div>
  </div>


<Footer />
    
    </>
  )




    
}

export default Css
