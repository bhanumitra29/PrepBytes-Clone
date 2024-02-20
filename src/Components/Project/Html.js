import React, { useRef } from 'react'
import "../styles/Project.css";
import "../styles/Navbar.css";
import Footer from '../Footer';
import { NavLink } from 'react-router-dom';

const Html = () => {

  const targetDivRef = useRef(null);

  const handleButtonClick = () => {
   
    targetDivRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
  };


  return (
    <>
    
      <div class="blog-card">
  <div class="title-content">
    <h3>HTML PROJECT</h3>
    <div class="intro"> HTML Blog Page </div>
  </div>
  <div class="card-info">
  It is a pure HTML page. This assignment is to make sure that you understand the basic html tags like Heading, Paragraphs, Lists, Tables, Dic, etc. and their usage.
    <button className='readMore' onClick={handleButtonClick}>Project Links </button>
  </div>
  
  {/* <div class="gradient-overlay"></div> */}
  {/* <div class="color-overlay"></div> */}
</div>




{/* <div class="ag-format-container"> */}
  <div class="ag-courses_box" ref={targetDivRef}>
    <div class="ag-courses_item">
      <div class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        {/* <div class="ag-courses-item_title">
          UI/Web&amp;Graph design for teenagers 11-17&#160;years old
        </div> */}

        <div  class="ag-courses-item_title">
          <h2>Host Link:</h2>
          <NavLink className='navLinks' to='https://bhanumitra29.github.io/Backtracking_Project/'>https://bhanumitra29.github.io/Backtracking_Project/</NavLink>
        </div>

        <div  class="ag-courses-item_title">
          <h2>Repo Link:</h2>
          <NavLink className='navLinks' to='https://github.com/bhanumitra29/Backtracking_Project'>https://github.com/bhanumitra29/Backtracking_Project</NavLink>
        </div>

        
      </div>
    </div>

    {/* <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          UX/UI Web-Design&#160;+ Mobile Design
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Annual package "Product+UX/UI+Graph designer&#160;2022"
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Graphic Design
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            04.11.2022
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Motion Design
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            30.11.2022
          </span>
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Front-end development&#160;+ jQuery&#160;+ CMS
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg">
        </div>
        <div class="ag-courses-item_title">
          Digital Marketing
        </div>
      </a>
    </div>

    <div class="ag-courses_item">
      <a href="#" class="ag-courses-item_link">
        <div class="ag-courses-item_bg"></div>

        <div class="ag-courses-item_title">
          Interior Design
        </div>

        <div class="ag-courses-item_date-box">
          Start:
          <span class="ag-courses-item_date">
            31.10.2022
          </span>
        </div>
      </a>
    </div> */}

  </div>
{/* </div> */}


<Footer />
    
    </>
  )




    
}

export default Html
