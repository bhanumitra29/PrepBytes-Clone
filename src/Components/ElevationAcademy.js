import React, { useState } from 'react'

import "./styles/ElevationPage.css";
import { loadStripe } from '@stripe/stripe-js';
import Footer from './Footer';
// import { FaArrowRight } from 'react-icons/fa';



const ElevationAcademy = () => {
  const [handleplus1,Sethandleplus1]=useState(true);
  const firsthandle=()=>{
    Sethandleplus1(!handleplus1)
  }
  const [handleplus2,Sethandleplus2]=useState(true);
  const firsthandle2=()=>{
    Sethandleplus2(!handleplus2)
  }
  const [handleplus3,Sethandleplus3]=useState(true);
  const firsthandle3=()=>{
    Sethandleplus3(!handleplus3)
  }
  const [handleplus4,Sethandleplus4]=useState(true);
  const firsthandle4=()=>{
    Sethandleplus4(!handleplus4)
  }

  const [handleplus5,Sethandleplus5]=useState(true);
  const firsthandle5=()=>{
    Sethandleplus5(!handleplus5)
  }

  const [handleplus6,Sethandleplus6]=useState(true);
  const firsthandle6=()=>{
    Sethandleplus6(!handleplus6)
  }

  const [handleplus7,Sethandleplus7]=useState(true);
  const firsthandle7=()=>{
    Sethandleplus7(!handleplus7)
  }

  const [handleplus8,Sethandleplus8]=useState(true);
  const firsthandle8=()=>{
    Sethandleplus8(!handleplus8)
  }

  const [handleplus9,Sethandleplus9]=useState(true);
  const firsthandle9=()=>{
    Sethandleplus9(!handleplus9)
  }
  const [handlehide1,Sethandlehide1]=useState(true)
  const [handlehide2,Sethandlehide2]=useState(false)
  const [handlehide3,Sethandlehide3]=useState(false)
  const [handlehide4,Sethandlehide4]=useState(false)
  const [handlehide5,Sethandlehide5]=useState(false)
  const handlehide11=()=>{
    Sethandlehide1(true)
    Sethandlehide2(false)
    Sethandlehide3(false)
    Sethandlehide4(false)
    Sethandlehide5(false)
  }
 
  const handlehide12=()=>{
    Sethandlehide2(true)
    Sethandlehide1(false)
    Sethandlehide3(false)
    Sethandlehide4(false)
    Sethandlehide5(false)
  }

  const handlehide13=()=>{
    Sethandlehide3(true)
    Sethandlehide1(false)
    Sethandlehide2(false)
    Sethandlehide4(false)
    Sethandlehide5(false)
  }
 
  const handlehide14=()=>{
    Sethandlehide4(true)
    Sethandlehide1(false)
    Sethandlehide2(false)
    Sethandlehide3(false)
    Sethandlehide5(false)
  }
 
  const handlehide15=()=>{
    Sethandlehide5(true)
    Sethandlehide1(false)
    Sethandlehide2(false)
    Sethandlehide3(false)
    Sethandlehide4(false)
  }
const [plus1,Setplus1]=useState(false)
const ele22plus1=()=>{
  Setplus1(!plus1)
}
const [plus2,Setplus2]=useState(false)
const ele22plus2=()=>{
  Setplus2(!plus2)
}
const [plus3,Setplus3]=useState(false)
const ele22plus3=()=>{
  Setplus3(!plus3)
}
const [plus4,Setplus4]=useState(false)
const ele22plus4=()=>{
  Setplus4(!plus4)
}

let courseenroll=[{ 
     
    id:75,
    image:"https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/assets/1624427096926-Product%20based__Test-1.svg",
    name: "Data Analyst", 
    date:"Feb 1st ",
    price:7000000.00,
    duration:"60 min",
    cat:"Participants",
}]
const checkitem=()=>{
    
                  
  courseenroll[0]['useremail']=localStorage.getItem("selfdetails")
  return [courseenroll[0]]




}
const   doenroll=async (id)=>{
const result=await checkitem()



const stripe=await loadStripe(" pk_test_51OMERySJb30zHYKXhazWu96YHeq9esM7jjoHRU5Yl6OsFBFrIqAN4l6DR432lstZ8S1BEgMXk05yGcoIoqcZQ0FJ00fJW2eWVM")
const body={
products:result
}
const headers={
"content-Type":"application/json"
}
try {
const response = await fetch("https://prepbytes-clone-backend.onrender.com/createcheckout1", {
method: "POST",
headers: headers,
body: JSON.stringify(body),
});

if (!response.ok) {
throw new Error(`HTTP error! Status: ${response.status}`);
}

const session = await response.json();
console.log(session);

const result = await stripe.redirectToCheckout({
sessionId: session.id,
});


if (result.error) {
console.log(result.error);
}
} catch (error) {
console.error("Fetch error:", error);
}

}


  return (<>
  <div className='ele-container1'>
    <div className='ele-container1-sub1'>
      <div  className='ele-container1-sub1-text1'>PrepBytes Elevation Academy - Full Stack Web Development Career</div>
      <div className='ele-container1-sub1-text2'>Enroll in PrepBytes Elevation Academy - Full Stack Program and Guaranteed Tech Job of minimum 5 LPA.</div>
      <div  className='ele-container1-sub1-text3'> <img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS44NjciIGhlaWdodD0iOC44NSIgdmlld0JveD0iMCAwIDExLjg2NyA4Ljg1Ij4KICA8cGF0aCBpZD0iUGF0aF80ODU2IiBkYXRhLW5hbWU9IlBhdGggNDg1NiIgZD0iTTE0LjI0MiwxOS4zMzRsLTMuOTg1LDMuOTg1YS40MzMuNDMzLDAsMSwxLS42MTItLjYxMmwzLjI0OC0zLjI0OEgyLjkzN2EuNDM3LjQzNywwLDEsMSwwLS44NzRIMTIuODhMOS42MzIsMTUuMzM3YS40MjMuNDIzLDAsMCwxLDAtLjYxMi40NTMuNDUzLDAsMCwxLC42MjUsMGwzLjk4NSwzLjk4NWEuNDE0LjQxNCwwLDAsMSwuMTI1LjMxMkEuNDY3LjQ2NywwLDAsMSwxNC4yNDIsMTkuMzM0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNSAtMTQuNikiIGZpbGw9IiM0MjQyNDIiLz4KPC9zdmc+Cg==' alt='Not Found' /> 
      Complete Live Class from experts
      </div>
      <div  className='ele-container1-sub1-text3'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS44NjciIGhlaWdodD0iOC44NSIgdmlld0JveD0iMCAwIDExLjg2NyA4Ljg1Ij4KICA8cGF0aCBpZD0iUGF0aF80ODU2IiBkYXRhLW5hbWU9IlBhdGggNDg1NiIgZD0iTTE0LjI0MiwxOS4zMzRsLTMuOTg1LDMuOTg1YS40MzMuNDMzLDAsMSwxLS42MTItLjYxMmwzLjI0OC0zLjI0OEgyLjkzN2EuNDM3LjQzNywwLDEsMSwwLS44NzRIMTIuODhMOS42MzIsMTUuMzM3YS40MjMuNDIzLDAsMCwxLDAtLjYxMi40NTMuNDUzLDAsMCwxLC42MjUsMGwzLjk4NSwzLjk4NWEuNDE0LjQxNCwwLDAsMSwuMTI1LjMxMkEuNDY3LjQ2NywwLDAsMSwxNC4yNDIsMTkuMzM0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNSAtMTQuNikiIGZpbGw9IiM0MjQyNDIiLz4KPC9zdmc+Cg==' alt='Not Found' /> 
      Be the best Full stack developer
      </div>
      <div  className='ele-container1-sub1-text3'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS44NjciIGhlaWdodD0iOC44NSIgdmlld0JveD0iMCAwIDExLjg2NyA4Ljg1Ij4KICA8cGF0aCBpZD0iUGF0aF80ODU2IiBkYXRhLW5hbWU9IlBhdGggNDg1NiIgZD0iTTE0LjI0MiwxOS4zMzRsLTMuOTg1LDMuOTg1YS40MzMuNDMzLDAsMSwxLS42MTItLjYxMmwzLjI0OC0zLjI0OEgyLjkzN2EuNDM3LjQzNywwLDEsMSwwLS44NzRIMTIuODhMOS42MzIsMTUuMzM3YS40MjMuNDIzLDAsMCwxLDAtLjYxMi40NTMuNDUzLDAsMCwxLC42MjUsMGwzLjk4NSwzLjk4NWEuNDE0LjQxNCwwLDAsMSwuMTI1LjMxMkEuNDY3LjQ2NywwLDAsMSwxNC4yNDIsMTkuMzM0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuNSAtMTQuNikiIGZpbGw9IiM0MjQyNDIiLz4KPC9zdmc+Cg==' alt='Not Found' /> 
      Job Guarantee
      </div>
      <div className='ele-container1-sub1-text4'> 
      <div><button className='ele-container1-sub1-text4-bt1'>Apply Now</button></div>
      <div><button className='ele-container1-sub1-text4-bt2'>Get a call back</button></div>
      </div>
    </div>
    <div className='ele-container1-sub2'>
      <img className='ele-container1-sub2-imgsize' src=' https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/ISA-masthead-mern-5.webp' alt='not-loaded' />


    </div>

  </div>
  <div className='ele-container2'>
  How will you reach to your dream Job?
  </div>
  <div  className='ele-container3'>
    
    <div className='ele-container3-sub1'>
      <div className='ele-container3-sub1-item1'>
      Application & Shortlisting
      <div className='ele-container3-sub1-item2'>
      1
      </div>
      <div className='ele-container3-hr'>
      {/* <hr/> */}
      <div className='LineBlue'></div>
      </div>
      </div>
      <div className='ele-container3-sub1-item3'>
      Attend Free Webinar
      <div className='ele-container3-sub1-item4'>
      2
      </div>
      <div className='ele-container3-hr'>
      {/* <hr/> */}
      <div className='LineBlue'></div>
      </div>
      </div>
      <div className='ele-container3-sub1-item5'>
      Batch Commencement
      <div className='ele-container3-sub1-item6'>
      3
      </div>
      <div className='ele-container3-hr'>
      {/* <hr/> */}
      <div className='LineBlue'></div>
      </div>
      </div>
      <div className='ele-container3-sub1-item7'>
      7 Months Program
      <div className='ele-container3-sub1-item8'>
      4
      </div>
      <div className='ele-container3-hr'>
      {/* <hr/> */}
      <div className='LineBlue'></div>
      </div>
      </div>
      <div className='ele-container3-sub1-item9'>
      Guaranteed Placement
      <div className='ele-container3-sub1-item10'>
      5
      </div>
      <div className='ele-container3-hr'>
      {/* <hr/> */}
      <div className='LineBlue'></div>
      </div>
      </div>
      

    </div>


    <div className='ele-container3-sub2'>
      <div className='ele-container3-sub2-item1'>
        <div className='ele-container3-sub2-item2'>
        Apply, fill the form & wait till we review your application. You will be selected based on the eligibility criteria (2023, 2022 & 2021 passouts)
        </div>
        <div className='ele-container3-sub2-item3Div'>
          <img className='ele-container3-sub2-item3' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Application%2B%2BShortlisting.webp' alt='not-loaded'/>
        </div>

      </div>
      <div className='ele-container3-sub2-item1'>
        <div className='ele-container3-sub2-item2'>
        Go through the free classes and learn the important concepts while understanding how the program unfolds.
        </div>
        <div className='ele-container3-sub2-item3Div'>
          <img className='ele-container3-sub2-item3' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/5%2BDays%2BFree%2BClass.webp' alt='not-loaded'/>
        </div>

      </div>
      <div className='ele-container3-sub2-item1'>
        <div className='ele-container3-sub2-item2'>
        Embark on your journey of success once you receive the offer letter for successful enrolment.
        </div>
        <div className='ele-container3-sub2-item3Div'>
          <img className='ele-container3-sub2-item3' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Complete%2BEnrollment%2B.webp' alt='not-loaded'/>
        </div>

      </div>
      <div className='ele-container3-sub2-item1'>
        <div className='ele-container3-sub2-item2'>
        You have now signed up for a learning-filled journey of 7 months that ends with you being placed in your dream company.
        </div>
        <div className='ele-container3-sub2-item3Div'>
          <img className='ele-container3-sub2-item3' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/4%2BMonths%2BPrograms.webp' alt='not-loaded'/>
        </div>

      </div>
      <div className='ele-container3-sub2-item1'>
        <div className='ele-container3-sub2-item2'>
        The program comes with interview opportunities and a placement guarantee of minimum 5 LPA.
        </div>
        <div className='ele-container3-sub2-item3Div'>
          <img className='ele-container3-sub2-item3' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Interview%2BOpportunities%2B.webp' alt='not-loaded'/>
        </div>

      </div>
      
      
      
      
    </div>
    
    
  </div>
  <div className='ele-container4'>
  Why PrepBytes Elevation Academy?

  </div>
  <div className='ele-container5'>
    <div className='ele-container5-sub1'>
      <div><img className='ele-container5-sub1-item1' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Live+Learning.webp' alt='not-loaded'/></div>
      <div className='ele-container5-sub1-item2'>Live Learning</div>
      <div className='ele-container5-sub1-item3'>Master Mern Stack in Live Classes taken by Experts</div>
    </div>

    <div className='ele-container5-sub1'>
      <div><img className='ele-container5-sub1-item1' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/1+week+of+Free+Classes.webp' alt='not-loaded'/></div>
      <div className='ele-container5-sub1-item2'>Learn with Industry Experts</div>
      <div className='ele-container5-sub1-item3'>Learn with leading tech mentors and gain access to real-time web development experience.</div>
    </div>

    <div className='ele-container5-sub1'>
      <div><img className='ele-container5-sub1-item1' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Learn+by+Doing.webp' alt='not-loaded'/></div>
      <div className='ele-container5-sub1-item2'>Learn by Doing</div>
      <div className='ele-container5-sub1-item3'>Gain in depth experience by building real world projects</div>
    </div>

    <div className='ele-container5-sub1'>
      <div><img className='ele-container5-sub1-item1' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Resume+Building.webp' alt='not-loaded'/></div>
      <div className='ele-container5-sub1-item2'>Resume Building</div>
      <div className='ele-container5-sub1-item3'>Get a resume that companies would shortlist</div>
    </div>

    <div className='ele-container5-sub1'>
      <div><img className='ele-container5-sub1-item1' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Mock+Interviews.webp' alt='not-loaded'/></div>
      <div className='ele-container5-sub1-item2'>Mock Interviews</div>
      <div className='ele-container5-sub1-item3'>Interview practice with industry veterans with real-time feedbacks</div>
    </div>

    <div className='ele-container5-sub1'>
      <div><img className='ele-container5-sub1-item1' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Interview+Opportunities.webp' alt='not-loaded'/></div>
      <div className='ele-container5-sub1-item2'>Interview Opportunities</div>
      <div className='ele-container5-sub1-item3'>Get developer interview opportunities after course completion</div>
    </div>
  

  </div>

  <div className='ele-container6'>
  Program Syllabus
  </div>
  <div className='ele-container7'>Learn from the best and be prepared to crack full stack developer jobs</div>
  <div className='ele-container8'>
    <div className='ele-container8-sub1 sub11'>1st Week - 4th Week</div>
    <div className='ele-container8-sub2'></div>
    
    <div className='ele-container8-sub3 sub331'>
    <div className='ele-container8-sub4'>
      <div className='ele-container8-sub3-item1 item111'><div className='ele-container8-sub3-item2 item112'>1</div>
      
      </div>
      <div className='ele-container8-sub3-item3'>Frontend Development Basics</div>
      
    </div>
    {handleplus1 ?(<> <div className='ele-container8-sub3-item4 sub441' onClick={firsthandle}>+</div></>):( <> <div className='ele-container8-sub3-item4 sub441' onClick={firsthandle}>-</div></>)

    }
   
    </div>
    {!handleplus1 ?
    (<>
    <div className='ele-container8-sub5'>
      <div className='ele-container8-sub5-item1'>
      Frontend Development Basics - HTML, CSS AND Github
      </div>
      <div className='ele-container8-sub5-item2'> 
      <div className='ele-container8-sub5-item3'>How websites work</div>
      <div className='ele-container8-sub5-item3'>Web Development Overview - Advantages</div>
      <div className='ele-container8-sub5-item3'>HTML Introduction</div>
      <div className='ele-container8-sub5-item3'>Structure of Webpage</div>
      <div className='ele-container8-sub5-item3'>HTML Tags</div>
      <div className='ele-container8-sub5-item3'>Texts, Images, Videos</div>
      <div className='ele-container8-sub5-item3'>Lists, Forms, Tables</div>
      <div className='ele-container8-sub5-item3'>Links, Anchor tags</div>
      <div className='ele-container8-sub5-item3'>HTML Divs</div>
      <div className='ele-container8-sub5-item3'>Github</div>
      <div className='ele-container8-sub5-item3'>CSS Introduction</div>
      <div className='ele-container8-sub5-item3'>Inline vs Internal vs External styling</div>
      <div className='ele-container8-sub5-item3'>CSS Display</div>
      <div className='ele-container8-sub5-item3'>CSS Font Styling, background, margin, padding</div>
      <div className='ele-container8-sub5-item3'>Styling Lists, Tables, Forms</div>
      <div className='ele-container8-sub5-item3'>FontAwesome</div>
      <div className='ele-container8-sub5-item3'>Transitionals, Transformations, Animations</div>
      <div className='ele-container8-sub5-item3'>Styling button</div>
      <div className='ele-container8-sub5-item3'>Tool tip, Box Sizing, Flex, Grid</div>
      <div className='ele-container8-sub5-item3'>Projects</div>
      </div>
     </div></>):(<></>)
   
    }

    
   
  </div>

  <div className='ele-container8'>
    <div className='ele-container8-sub1 sub22'>5th Week - 8th Week</div>
    <div className='ele-container8-sub2'></div>
    
    <div className='ele-container8-sub3 sub332'>
    <div className='ele-container8-sub4'>
      <div className='ele-container8-sub3-item1 item222'><div className='ele-container8-sub3-item2 item223'>2</div>
      
      </div>
      <div className='ele-container8-sub3-item3'>Javascript Fundamentals & Problem Solving</div>
      
    </div>
    {handleplus2 ?(<> <div className='ele-container8-sub3-item4 sub442' onClick={firsthandle2}>+</div></>):( <> <div className='ele-container8-sub3-item4' onClick={firsthandle2}>-</div></>)

    }
   
    </div>
    {!handleplus2 ?
    (<>
    <div className='ele-container8-sub529'>
      <div className='ele-container8-sub5-item1'>
      Javascript Fundamentals & Problem Solving
      </div>
      <div className='ele-container8-sub5-item2'> 
      <div className='ele-container8-sub5-item329'>Introduction to JavaScript</div>
      <div className='ele-container8-sub5-item329'>Variables, scoping, Data type</div>
      <div className='ele-container8-sub5-item329'>Logic Building</div>
      <div className='ele-container8-sub5-item329'>Strings and Numbers</div>
      <div className='ele-container8-sub5-item329'>Operators and loops</div>
      <div className='ele-container8-sub5-item329'>Functions</div>
      <div className='ele-container8-sub5-item329'>Arrays and Objects</div>
      <div className='ele-container8-sub5-item329'>Data Structures - Stack, Queues, Maps, Sets</div>
      <div className='ele-container8-sub5-item329'>Searching and Sorting Algorithms</div>
      <div className='ele-container8-sub5-item329'>Problem Solving</div>
      
      </div>
     </div></>):(<></>)
   
    }

    
   
  </div>

  <div className='ele-container8'>
    <div className='ele-container8-sub1 sub33'>9th Week - 12th Week</div>
    <div className='ele-container8-sub2'></div>
    
    <div className='ele-container8-sub3 sub333'>
    <div className='ele-container8-sub4'>
      <div className='ele-container8-sub3-item1 item333'><div className='ele-container8-sub3-item2 item334'>3</div>
      
      </div>
      <div className='ele-container8-sub3-item3'>Building Websites using JS</div>
      
    </div>
    {handleplus3 ?(<> <div className='ele-container8-sub3-item4 sub443' onClick={firsthandle3}>+</div></>):( <> <div className='ele-container8-sub3-item4' onClick={firsthandle3}>-</div></>)

    }
   
    </div>
    {!handleplus3 ?
    (<>
    <div className='ele-container8-sub529'>
      <div className='ele-container8-sub5-item1'>
      Building Websites using JS
      </div>
      <div className='ele-container8-sub5-item2'> 
      <div className='ele-container8-sub5-item329'>Understanding and working with DOM</div>
      <div className='ele-container8-sub5-item329'>Modifying Website Elements with JS</div>
      <div className='ele-container8-sub5-item329'>Developer tools in Browsers</div>
      <div className='ele-container8-sub5-item329'>Prototypes</div>
      <div className='ele-container8-sub5-item329'>Closuress</div>
      <div className='ele-container8-sub5-item329'>Browser Local Storage</div>
      <div className='ele-container8-sub5-item329'>Jquery, Ajax</div>
      <div className='ele-container8-sub5-item329'>Promises</div>
      <div className='ele-container8-sub5-item329'>ES5 vs ES6 vs ES7</div>
      <div className='ele-container8-sub5-item329'>Eventloop in Javascript</div>
      
      </div>
     </div></>):(<></>)
   
    }

    
   
  </div>

  <div className='ele-container8'>
    <div className='ele-container8-sub1 sub44'>13th Week - 16th Week</div>
    <div className='ele-container8-sub2'></div>
    
    <div className='ele-container8-sub3 sub334'>
    <div className='ele-container8-sub4'>
      <div className='ele-container8-sub3-item1 item444'><div className='ele-container8-sub3-item2 item445'>4</div>
      
      </div>
      <div className='ele-container8-sub3-item3'>React</div>
      
    </div>
    {handleplus4 ?(<> <div className='ele-container8-sub3-item4 sub444' onClick={firsthandle4}>+</div></>):( <> <div className='ele-container8-sub3-item4' onClick={firsthandle4}>-</div></>)

    }
   
    </div>
    {!handleplus4 ?
    (<>
    <div className='ele-container8-sub506'>
      <div className='ele-container8-sub5-item1'>
      Building Websites using JS
      </div>
      <div className='ele-container8-sub5-item2'> 
      <div className='ele-container8-sub5-item306'>React Intro</div>
      <div className='ele-container8-sub5-item306'>Node installation</div>
      <div className='ele-container8-sub5-item306'>Create an app using create-react-app</div>
      <div className='ele-container8-sub5-item306'>Understanding basics of react app</div>
      <div className='ele-container8-sub5-item306'>Understanding JSX</div>
      <div className='ele-container8-sub5-item306'>Understanding virtual DOMS , Single page apps</div>
      <div className='ele-container8-sub5-item306'>React Lifecycle</div>
      <div className='ele-container8-sub5-item306'>States, class components vs functional components</div>
      <div className='ele-container8-sub5-item306'>Event handling, props</div>
      <div className='ele-container8-sub5-item306'>Building forms in React</div>
      <div className='ele-container8-sub5-item306'>Routes</div>
      <div className='ele-container8-sub5-item306'>Conditional Rendering</div>
      <div className='ele-container8-sub5-item306'>Pure Components</div>
      <div className='ele-container8-sub5-item306'>High order components</div>
      <div className='ele-container8-sub5-item306'>Controlled vs Uncontrolled components</div>
      <div className='ele-container8-sub5-item306'>React Hooks</div>
      <div className='ele-container8-sub5-item306'>Redux</div>
      <div className='ele-container8-sub5-item306'>Babel, Webpack</div>
      <div className='ele-container8-sub5-item306'>Axios, Creating a mock server</div>
      <div className='ele-container8-sub5-item306'>SASS overview</div>
      </div>
     </div></>):(<></>)
   
    }

    
   
  </div>

  <div className='ele-container8'>
    <div className='ele-container8-sub1 sub55'>17th Week - 19th Week</div>
    <div className='ele-container8-sub2'></div>
    
    <div className='ele-container8-sub3 sub335'>
    <div className='ele-container8-sub4'>
      <div className='ele-container8-sub3-item1 item555'><div className='ele-container8-sub3-item2 item556'>5</div>
      
      </div>
      <div className='ele-container8-sub3-item3'>NodeJS</div>
      
    </div>
    {handleplus5 ?(<> <div className='ele-container8-sub3-item4 sub445' onClick={firsthandle5}>+</div></>):( <> <div className='ele-container8-sub3-item4' onClick={firsthandle5}>-</div></>)

    }
   
    </div>
    {!handleplus5 ?
    (<>
    <div className='ele-container8-sub5'>
      <div className='ele-container8-sub5-item1'>
      NodeJS
      </div>
      <div className='ele-container8-sub5-item2'> 
      <div className='ele-container8-sub5-item3'>Creating a Simple Server</div>
      <div className='ele-container8-sub5-item3'>Response types - HTML, JSON</div>
      <div className='ele-container8-sub5-item3'>Routing</div>
      <div className='ele-container8-sub5-item3'>Express Introduction</div>
      <div className='ele-container8-sub5-item3'>Intergrate Frontend and Backend</div>
      <div className='ele-container8-sub5-item3'>Express Params and Query String</div>
      <div className='ele-container8-sub5-item3'>Express Middleware</div>
      <div className='ele-container8-sub5-item3'>API Authentication</div>
      <div className='ele-container8-sub5-item3'>JWT Token, Passport.js</div>
      <div className='ele-container8-sub5-item3'>Socket Programming</div>
      
      </div>
     </div></>):(<></>)
   
    }

    
   
  </div>

  <div className='ele-container8'>
    <div className='ele-container8-sub1 sub66'>20th Week - 22th Week</div>
    <div className='ele-container8-sub2'></div>
    
    <div className='ele-container8-sub3 sub336'>
    <div className='ele-container8-sub4'>
      <div className='ele-container8-sub3-item1 item666'><div className='ele-container8-sub3-item2 item667'>6</div>
      
      </div>
      <div className='ele-container8-sub3-item3'>Database</div>
      
    </div>
    {handleplus6 ?(<> <div className='ele-container8-sub3-item4 sub446' onClick={firsthandle6}>+</div></>):( <> <div className='ele-container8-sub3-item4' onClick={firsthandle6}>-</div></>)

    }
   
    </div>
    {!handleplus6 ?
    (<>
    <div className='ele-container8-sub529'>
      <div className='ele-container8-sub5-item1'>
      Database
      </div>
      <div className='ele-container8-sub5-item2'> 
      <div className='ele-container8-sub5-item329'>SQL vs NOSQL</div>
      <div className='ele-container8-sub5-item329'>MongoDB/ DynamoDB overview</div>
      <div className='ele-container8-sub5-item329'>Installing MongoDB</div>
      <div className='ele-container8-sub5-item329'>Connecting and Inserting Data</div>
      <div className='ele-container8-sub5-item329'>Deleting and updating Data</div>
      <div className='ele-container8-sub5-item329'>Understanding CRUD operations</div>
      <div className='ele-container8-sub5-item329'>Understanding Firebase</div>
      
      
      </div>
     </div></>):(<></>)
   
    }

    
   
  </div>

  <div className='ele-container8'>
    <div className='ele-container8-sub1 sub77'>23th Week - 24th Week</div>
    <div className='ele-container8-sub2'></div>
    
    <div className='ele-container8-sub3 sub337'>
    <div className='ele-container8-sub4'>
      <div className='ele-container8-sub3-item1 item777'><div className='ele-container8-sub3-item2 item778'>7</div>
      
      </div>
      <div className='ele-container8-sub3-item3'>Code Review & Deployment</div>
      
    </div>
    {handleplus7 ?(<> <div className='ele-container8-sub3-item4 sub447' onClick={firsthandle7}>+</div></>):( <> <div className='ele-container8-sub3-item4' onClick={firsthandle7}>-</div></>)

    }
   
    </div>
    {!handleplus7 ?
    (<>
    <div className='ele-container8-sub506'>
      <div className='ele-container8-sub5-item1'>
      Code Review & Deployment
      </div>
      <div className='ele-container8-sub5-item2'> 
      <div className='ele-container8-sub5-item306'>Deploy using Netlify and Github</div>
      <div className='ele-container8-sub5-item306'>Get code review by Software Developers</div>
      <div className='ele-container8-sub5-item306'>Deploy all the projects</div>
      
      
      
      </div>
     </div></>):(<></>)
   
    }

    
   
  </div>

  <div className='ele-container8'>
    <div className='ele-container8-sub1 sub77'>25th Week - 28th Week</div>
    <div className='ele-container8-sub2'></div>
    
    <div className='ele-container8-sub3 sub338'>
    <div className='ele-container8-sub4'>
      <div className='ele-container8-sub3-item1 item888'><div className='ele-container8-sub3-item2 item889'>8</div>
      
      </div>
      <div className='ele-container8-sub3-item3'>Code Review & Deployment</div>
      
    </div>
    {handleplus8 ?(<> <div className='ele-container8-sub3-item4 sub448' onClick={firsthandle8}>+</div></>):( <> <div className='ele-container8-sub3-item4' onClick={firsthandle8}>-</div></>)

    }
   
    </div>
    {!handleplus8 ?
    (<>
    <div className='ele-container8-sub506'>
      <div className='ele-container8-sub5-item1'>
      Code Review & Deployment
      </div>
      <div className='ele-container8-sub5-item2'> 
      <div className='ele-container8-sub5-item306'>Deploy using Netlify and Github</div>
      <div className='ele-container8-sub5-item306'>Get code review by Software Developers</div>
      <div className='ele-container8-sub5-item306'>Deploy all the projects</div>
      
      
      
      </div>
     </div></>):(<></>)
   
    }

    
   
  </div>

  <div className='ele-container8'>
    <div className='ele-container8-sub1 sub88'> 28th Week on wards</div>
    <div className='ele-container8-sub2'></div>
    
    <div className='ele-container8-sub3 sub339'>
    <div className='ele-container8-sub4'>
      <div className='ele-container8-sub3-item1 item999'><div className='ele-container8-sub3-item2 item990'>9</div>
      
      </div>
      <div className='ele-container8-sub3-item3'>Interviews Opportunities</div>
      
    </div>
    {handleplus9 ?(<> <div className='ele-container8-sub3-item4 sub449' onClick={firsthandle9}>+</div></>):( <> <div className='ele-container8-sub3-item4' onClick={firsthandle9}>-</div></>)

    }
   
    </div>
    {!handleplus9 ?
    (<>
    <div className='ele-container8-sub529'>
      <div className='ele-container8-sub5-item1'>
      Interview Preparation & Major Projects
      </div>
     
     </div></>):(<></>)
     
   
    }

    
   
  </div>
  <div className='ele-container9'>
    <div className='ele-container9-sub'>
    <div className='ele-container9-sub1'>Upcoming Elevation Academy Batch - Full Stack Web Development Career - May 2023 now OPEN </div>
    <div>
    <button className='ele-container9-sub2'>Apply Now</button>
  </div>
  </div>
  
  <div className='ele-container9-sub3'><img className='ele-container9-sub4' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/batches-back.webp' alt='not-loaded'/></div>
  </div>

  
  <div className='ele-container10'>
  Where our Students are placed
  </div>
  <div className='ele-container11'>
  "You guarantee hard work, We  <br/>guarantee placements"
  </div>
  <div className='ele-container12'>
    <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/Paytm_Logo.webp' alt='not-loaded'/></div>
    <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/info_edge_Logo.svg' alt='not-loaded'/></div>
    <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/SAP_Logo.svg' alt='not-loaded'/></div>
    <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Intuit_Logo.svg' alt='not-loaded'/></div>
    <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Microsoft_Logo.svg' alt='not-loaded'/></div>
    <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Thoughtfocus_Logo.svg' alt='not-loaded'/></div>
    <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/99_Games_Logo.svg' alt='not-loaded'/></div>
    <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Samsung_Logo.svg' alt='not-loaded'/></div>
    <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Amazon_Logo.svg' alt='not-loaded'/></div>
    <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Buy_Hatke_logo.svg' alt='not-loaded'/></div>
    <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Intel_logo.svg' alt='not-loaded'/></div>
    <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/Teksystems_logo.svg' alt='not-loaded'/></div>

  </div>
  <div className='ele-container13'>
    <div className='ele-container13-sub-up'>
      <div className='ele-container13-sub-up-div1'>
      How can you be part of the next batch
      </div>
      <div className='ele-container13-sub-up-div2'>
      Experts mentors designed to get you job-ready, designed for complete beginners as well. All this with absolute zero cost including real-time assignments that help you practice what you have learnt. for complete beginners as well.

      </div>

    </div>
    <div className='ele-container13-sub'>
    <div className='ele-container13-sub1'>
      {handlehide1 ?(<><div className='ele-container13-sub1-item11' ><img className='AppImage11' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/registeration-icon.webp' alt='Not Found' /> Application</div> </> ):(<><div className='ele-container13-sub1-item1' onClick={handlehide11} ><img className='AppImage11' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/registeration-icon.webp' alt='Not Found' /> Application</div></>)
         }
      {handlehide2 ?(<><div className='ele-container13-sub1-item12'><img className='AppImage11' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/qualification.webp' alt='Not Found' /> Shortlisting</div></>):(<><div className='ele-container13-sub1-item2' onClick={handlehide12}> <img className='AppImage11' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/qualification.webp' alt='Not Found' />Shortlisting</div></>)
      }
      {handlehide3 ?(<><div className='ele-container13-sub1-item13' ><img className='AppImage11' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/qualification.webp' alt='Not Found' /> Free Webinars</div></>):(<><div className='ele-container13-sub1-item3' onClick={handlehide13}> <img className='AppImage11' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/qualification.webp' alt='Not Found' />Free Webinars</div></>)
      }
      {handlehide4 ?(<><div className='ele-container13-sub1-item14' ><img className='AppImage11'src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/payment-icon.webp' alt='Not Found' /> Enrolment</div></>):(<><div className='ele-container13-sub1-item4' onClick={handlehide14} > <img className='AppImage11'src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/payment-icon.webp' alt='Not Found' />Enrolment</div></>)
      }
      {handlehide5 ?(<><div className='ele-container13-sub1-item15' ><img className='AppImage11' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/start-batch-icon.webp' alt='Not Found' /> Batch commencement</div></>):(<><div className='ele-container13-sub1-item5' onClick={handlehide15}> <img className='AppImage11' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/start-batch-icon.webp' alt='Not Found' />Batch commencement</div></>)
      }
      </div>
    
    <div className='ele-container13-sub2'>
    {handlehide1 ?(<div className='LineTickHeight'><div  className='ele-container13-font'>Application</div>
      <div className='TickArrowImage'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=' alt='Not Found' />We are inviting applications for 2023, 2022 & 2021 passouts.</div>
      <div className='TickArrowImage'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=' alt='Not Found' />Apply for the next batch by filling up the application form.</div>
      <div className='TickArrowImage'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=' alt='Not Found' />Fill all the information correctly.</div>
      <div className='TickArrowImage'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=' alt='Not Found' />Any false information will lead to disqualification.</div>
      </div>):(<></>)}
      {handlehide2 ?(<div className='LineTickHeight'><div className='ele-container13-font'>Shortlisting</div>
      <div className='TickArrowImage'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=' alt='Not Found' />After you have submitted the application, your application will be reviewed by PrepBytes team.</div>
      <div className='TickArrowImage'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=' alt='Not Found' />Candidates meeting the eligibility criteria will be shortlisted and the free webinars link will be shared to them over email.</div>
      
      </div>):(<></>)}
      {handlehide3 ?(<div className='LineTickHeight'><div className='ele-container13-font'>Free Webinars</div>
      <div className='TickArrowImage'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=' alt='Not Found' />Attend Free Webinar conducted by expert mentors</div>
      <div className='TickArrowImage'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=' alt='Not Found' />Understand the importance of Web Development and pathway to crack Web Development Jobs</div>
      
      </div>):(<></>)}
      {handlehide4 ?(<div className='LineTickHeight'><div className='ele-container13-font'>Enrolment</div>
      <div className='TickArrowImage'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=' alt='Not Found' />Students clearing the interview will be provided with admission letters.</div>
      <div className='TickArrowImage'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=' alt='Not Found' />Selected students have to sign the offer letter and pay enrolment amount to enrol in the program.</div>
      <div className='TickArrowImage'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=' alt='Not Found' />Enrolment Fees is 100% refundable if candidate wants to come out of the program within 7 days.</div>
      
      </div>):(<></>)}
      {handlehide5 ?(<div className='LineTickHeight'><div className='ele-container13-font'>Batch commencement</div>
      <div className='TickArrowImage'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMC4zNzUiIGhlaWdodD0iMjAuMzc1IiB2aWV3Qm94PSIwIDAgMjAuMzc1IDIwLjM3NSI+CiAgPHBhdGggaWQ9Ikljb25fYXdlc29tZS1jaGVjay1jaXJjbGUiIGRhdGEtbmFtZT0iSWNvbiBhd2Vzb21lLWNoZWNrLWNpcmNsZSIgZD0iTTIwLjkzOCwxMC43NUExMC4xODgsMTAuMTg4LDAsMSwxLDEwLjc1LjU2MywxMC4xODcsMTAuMTg3LDAsMCwxLDIwLjkzOCwxMC43NVpNOS41NzIsMTYuMTQ0LDE3LjEzLDguNTg2YS42NTcuNjU3LDAsMCwwLDAtLjkyOUwxNi4yLDYuNzI3YS42NTcuNjU3LDAsMCwwLS45MywwTDkuMTA3LDEyLjg5MSw2LjIyOSwxMC4wMTNhLjY1Ny42NTcsMCwwLDAtLjkzLDBsLS45MjkuOTI5YS42NTcuNjU3LDAsMCwwLDAsLjkyOWw0LjI3Miw0LjI3MmEuNjU3LjY1NywwLDAsMCwuOTMsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjU2MyAtMC41NjMpIiBmaWxsPSIjZjc4MDc3Ii8+Cjwvc3ZnPgo=' alt='Not Found' />Batch will be started post enrolment. Classes will be completely live</div>
      
      </div>):(<></>)}
    </div>
    </div>
  </div>
  <div className='ele-container14'>
    <div className='ele-container14-text1'>Payment Plans</div>
      <div className='ele-container14-text2'>Choose a payment plan suiting your needs</div>
      <div className='ele-container14-sub1'>
        <div className='ele-container14-sub1-text1'>Pay Upfront*</div>
        <div className='ele-container14-sub1-text2'>Pay Now</div>
        <div className='ele-container14-sub1-text3'>₹ 70,000</div>
        <div><hr/></div>
        <div className='ele-container14-sub1-text4'>*Money-back guarantee on placements</div>
        <div className='ele-container14-sub1-text113'>EMI Starting at</div>
        <div className='ele-container14-sub1-text3'><span className='MonthCost'>₹ 5833 </span> <span className='Month'>/month</span></div>
        <div className='ele-container14-sub1-text5'><img className='ele-container14-sub1-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/tag4-01.webp' alt='not-loaded'/></div>
      </div>
      <div className='ele-container14-text3Div'><button className='ele-container14-text3' onClick={doenroll}>Register</button></div>
      <div className='ele-container14-text4'><img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNS45OTgiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNS45OTggMTYiPgogIDxwYXRoIGlkPSJJY29uX2F3ZXNvbWUtY2hlY2stZG91YmxlIiBkYXRhLW5hbWU9Ikljb24gYXdlc29tZS1jaGVjay1kb3VibGUiIGQ9Ik0xNS43NzcsNS40NjEsMTQuNTQsNC4yMjNhLjc0Ny43NDcsMCwwLDAtMS4wNTksMEw2LDExLjcwNywyLjUxNiw4LjIyM2EuNzQ3Ljc0NywwLDAsMC0xLjA1OSwwTC4yMTcsOS40NjNhLjc1MS43NTEsMCwwLDAsMCwxLjA2Mmw1LjI0OSw1LjI1MmEuNzQ3Ljc0NywwLDAsMCwxLjA1OSwwbDkuMjQ5LTkuMjU1QS43NTMuNzUzLDAsMCwwLDE1Ljc3Nyw1LjQ2MVpNNS42NDQsOC43NzNhLjUuNSwwLDAsMCwuNzA2LDBsNi41LTYuNTA1YS41LjUsMCwwLDAsMC0uNzA2TDExLjQzNy4xNDZhLjUuNSwwLDAsMC0uNzA2LDBMNiw0Ljg3OSw0LjI2NiwzLjE0NWEuNS41LDAsMCwwLS43MDYsMEwyLjE0NSw0LjU2MWEuNS41LDAsMCwwLDAsLjcwNloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDA0IDAuMDAyKSIgZmlsbD0iI2Y3ODA3NyIvPgo8L3N2Zz4K' alt='not-loaded'/>Guaranteed Placement of minimum 5 LPA</div>
  </div>
  <div className='ele-container16'>
  Our Mentors
  </div>
  <div className='ele-container17'>Learn directly from experienced software developers and master full stack</div>
  <div className='ele-container15'>
      <div className='ele-container15-sub'>
        <div className='ele-container15-sub-item1'>
          <img className='ele-container15-sub-item1-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/mamta_mentor_background.png' alt='not-loaded'/>
          <div className='ele-container15-sub-item2' >
            
          <img src="https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/mamta_ma'am(Mentor).webp" alt="Mamta Ma'am" />

          </div>
          <div className='ele-container15-sub-item3'>
          Mamta Kumari
        </div>
        <div className='ele-container15-sub-item4'>
        Ex Amazon, Samsung - Cofounder PrepBytes
        </div>
        <div className='ele-container15-sub-item5'>
        Mamta has 4.5 years of experience as a Software Developer. She has great passion towards coding and motivates students to pursue coding.Her mission is to use her knowledge and expertise to help students get placed in their dream company.
        </div>
        <div className='LastLastImage'>
          <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/amazon.webp' alt='not-loaded' />
        </div>
        </div>
        
        

      </div>


      <div className='ele-container15-sub'>
        <div className='ele-container15-sub-item1'>
          <img className='ele-container15-sub-item1-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/kunal_dwivedi_mentor_background.png' alt='not-loaded'/>
          <div className='ele-container15-sub-item2' >
            
            <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/kunal_sir.png' alt='not-loaded'/>
          </div>
          <div className='ele-container15-sub-item3'>
          Kunal Dwivedi
        </div>
        <div className='ele-container15-sub-item4'>
        Software Developer, Amazon
        </div>
        <div className='ele-container15-sub-item5'>
        Kunal has switched from Samsung to Amazon recently and likes to spend time teaching students who are walking down the same road. He love competitive programming and have secured under 100 rank in various coding challenges and 287 rank in Google Kickstart.
        </div>
        <div className='LastLastImage'>
          <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/amazon.webp' alt='not-loaded' />
        </div>
        </div>
        
        

      </div>

      <div className='ele-container15-sub'>
        <div className='ele-container15-sub-item1'>
          <img className='ele-container15-sub-item1-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/harshita_mentor_background.png' alt='not-loaded'/>
          <div className='ele-container15-sub-item2' >
            
            <img className='ThirdCImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/mentor_harshita.webp' alt='not-loaded'/>
          </div>
          <div className='ele-container15-sub-item3'>
          Harshita Sharma


        </div>
        <div className='ele-container15-sub-item4'>
        Harshita Sharma
        </div>
        <div className='ele-container15-sub-item5'>
        Harshita is currently working in AskSid.ai and has worked in MindTree as Full Stack Developer. She has 3+ years of MERN Stack Exp. Apart from Web Development she also have experience in developing Voice-based Chatbots using Dialogflow from Google.
        </div>
        <div className='LastLastImage'>
          <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/ask_sid.png' alt='not-loaded' />
        </div>
        </div>
        
        

      </div>

      

      </div>
      <div className='ele-container18'>
        <div> <img className='ele-container18-imgsize' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/elevation-academy/Images/calendar.webp' alt='not-loaded'/></div>
        <div>
          <div className='ele-container18-item1'>
          Free Webinar
          </div>
          <div className='ele-container18-item2'>Experts mentors designed to get you job-ready, designed for <br/> complete beginners as well.</div>
          <div className='ele-container18-item3'> 17th April</div>
          <div className='ele-container18-item4-sub1'> <button className='ele-container18-item4'>Register</button></div>
        </div>
      </div>
      <div className='ele-container19'>
        <div className='ele-container19-sub1'>
          <div className='ele-container19-sub'><div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/faculity-icon.svg' alt='not-laoded'/>
          </div>
          <div>
            <div className='ele-container19-sub2'>100k+</div>
            <div className='ele-container19-sub3'>Student Coding Community</div>
          </div>
          </div>
          
          </div>

          <div className='ele-container19-sub1'>
          <div className='ele-container19-sub'><div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/college-icon.svg' alt='not-laoded'/>
          </div>
          <div>
            <div className='ele-container19-sub2'>800+</div>
            <div className='ele-container19-sub3'>Colleges</div>
          </div>
          </div>
          
          </div>

          <div className='ele-container19-sub1'>
          <div className='ele-container19-sub'><div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/ISA/student-icon.svg' alt='not-laoded'/>
          </div>
          <div>
            <div className='ele-container19-sub2'>100+</div>
            <div className='ele-container19-sub3'>Students placed</div>
          </div>
          </div>
          
          </div>
      </div>
      <div className='ele-container20'>
      Frequently Asked Questions
      </div>
      <div className='ele-container21'>
      <div > <button className='ele-container21-item1'>Eligibility Criteria</button></div>
      <div > <button className='ele-container21-item1'>Batch Enrolment</button></div>
      <div > <button className='ele-container21-item1'>Placement support</button></div>
      </div>
      <div className='ele-container22'>
        <div className='ele-container22-sub1'>
          <div className='ele-container22-sub1-item1'>Can i apply if i am still in college?</div>
          {plus1 ? (<div className='ele-container22-sub1-item2' onClick={ele22plus1}>-</div>):(<div className='ele-container22-sub1-item2' onClick={ele22plus1}>+</div>)}
        </div>
        {plus1 ?(<><div className='ele-container22-sub1-item3'>Current batch is focussed on 2022, 2021 and 2020 passouts.</div></>):(<></>)  }
        <div className='marginBottomHr'><hr/></div>

        <div className='ele-container22-sub1'>
          <div className='ele-container22-sub1-item1'>Can i apply if i am from non cse branch?</div>
          {plus2 ? (<div className='ele-container22-sub1-item2' onClick={ele22plus2}>-</div>):(<div className='ele-container22-sub1-item2' onClick={ele22plus2}>+</div>)}
        </div>
        {plus2 ?(<><div className='ele-container22-sub1-item3'>Yes, if you are willing to work hard on your coding skills, you can apply.</div></>):(<></>)  }
        <div className='marginBottomHr'><hr/></div>

        <div className='ele-container22-sub1'>
          <div className='ele-container22-sub1-item1'>Do I need to have strong coding skills?</div>
          {plus3 ? (<div className='ele-container22-sub1-item2' onClick={ele22plus3}>-</div>):(<div className='ele-container22-sub1-item2' onClick={ele22plus3}>+</div>)}
        </div>
        {plus3 ?(<><div className='ele-container22-sub1-item3'>No, you do not need to have strong coding skills. You just need to have good fundamentals and willingness to work hard.</div></>):(<></>)  }
        <div className='marginBottomHr'><hr/></div>


        <div className='ele-container22-sub1'>
          <div className='ele-container22-sub1-item1'>How can I apply?</div>
          {plus4 ? (<div className='ele-container22-sub1-item2' onClick={ele22plus4}>-</div>):(<div className='ele-container22-sub1-item2' onClick={ele22plus4}>+</div>)}
        </div>
        {plus4 ?(<><div className='ele-container22-sub1-item3'>Click on apply button on the top banner and fill the complete application form.</div></>):(<></>)  }
        
      </div>

      <Footer/>
    </> )
}

export default ElevationAcademy