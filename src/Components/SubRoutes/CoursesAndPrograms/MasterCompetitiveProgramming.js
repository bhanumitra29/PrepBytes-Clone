import React from 'react'
import "../../styles/Courses.css";
import Footer from '../../Footer';
import { loadStripe } from '@stripe/stripe-js'

// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



const MasterCompetitiveProgramming = () => {

  // const slides = [
  //   {
  //     url:
  //       'https://beebom.com/wp-content/uploads/2023/09/iPhone-15-Pro-Max-Display.jpg?quality=75&strip=all',
  //     title: 'Tech',
  //   },
  //   {
  //     url:
  //       'https://img.etimg.com/thumb/msid-103490511,width-650,height-488,imgsize-52878,,resizemode-75/jawan-features-srk-in-a-dual-role-and-was-shot-in-various-locations-across-india-.jpg',
  //     title: 'Bolly',
  //   },
  //   {
  //     url:
  //       'https://m.media-amazon.com/images/S/pv-target-images/3c82c67bdbb947b8ed57ee9f4c89531bfc755426839b8598c275c799591c1288.jpg',
  //     title: 'Holly',
  //   },
  //   {
  //     url:
  //       'https://m.media-amazon.com/images/S/pv-target-images/3c82c67bdbb947b8ed57ee9f4c89531bfc755426839b8598c275c799591c1288.jpg',
  //     title: 'Holly',
  //   },
  // ];
  
  
  
      
  //     const settings = {
  //       dots: false,
  //       infinite: true,
  //       speed: 0,
  //       slidesToShow: 3,
  //       slidesToScroll: 1,
  //       autoplay: false, 
  //       autoplaySpeed: 2000, 
  //     };
  
  // const sliderRef = React.createRef();
  
  // const handleNextSlide = () => {
  //   sliderRef.current.slickNext();
  // };
  
  // const handlePrevSlide = () => {
  //   sliderRef.current.slickPrev();
  // };

  let courseenroll=[{ 
     
    id:75,
    image:"https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/mock-test/company/mcafee.svg",
    name: "Full Stack", 
    date:"Feb 1st ",
    price:250000.00,
    duration:"60 min",
    cat:"Participants",
}]
const course1handle=()=>{
  courseenroll[0]['date']="Feb 1st";
  console.log(courseenroll)
}
const course2handle=()=>{
  courseenroll[0]['date']="Feb 15nth";
  console.log(courseenroll)
}
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


  return (
    <div className='MainHead'>
    <div className='masterfirstMain'>
      <div className='masterfirstmini1'>

        <div className='masterH1Div'>
        <span className='masterH1'>MASTER COMPETITIVE PROGRAMMING</span>
        </div>


      <div className='SpanDiv1'>
        <span className='firstSpan1'>Master Competitive Programming Fom Zero And Become A Top-Rated Coder <span className='secondSpan2'>Under The Guidance Of Top Competitive Programmers</span></span>

        </div>

      <button className='enrolButton'>Enrol Now</button>

      </div>

      <div className='masterfirstmini2'>
          <img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-header-image.webp' alt='Not Found' />
      </div>
    </div>


    <div className='secondMain1'>
      <div className='secondMini1 secondMiniAll'>
          <div>
            <img className='boxImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-one.webp' alt='Not Found' />
          </div>

          <div>
              <span className='secondMiniText'>9 months intensive bootcamp</span>
          </div>
      </div>

      <div className='secondMini2 secondMiniAll'>

      <div>
          <img className='boxImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-two.webp' alt='Not Found' />
      </div>

        <div>
            <span className='secondMiniText'>Quick doubt resolution</span>
        </div>

      </div>

      <div className='secondMini3 secondMiniAll'>

        <div>
          <img className='boxImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-three.webp' alt='Not Found' />
        </div>

        <div>
            <span className='secondMiniText'>Live coding sessions with top-rated coders</span>
        </div>

      </div>

      <div className='secondMini4 secondMiniAll'>

        <div>
        <img className='boxImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/mcp-usp-four.webp' alt='Not Found' />
        </div>

        <div>
            <span className='secondMiniText'>Get certificate on course completion</span>
        </div>

      </div>

    </div>

    <div className='HeadingDivMain'>
      <span className='HeadingDivSpan'>Get Guidance From Industry Leading Mentors</span>
    </div>


    <div className='otherDiv'>
      <span className='other'>Other Mentors You Will Be Interacting With</span>
    </div>


    <div className='founderMainDiv'>

    <div className='founderMiniDiv1'>
      <div>
          <img className='founderImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Mamta.webp' alt='Not Found' />
      </div>

      <div className='FounderSpanDiv'>
        <span className='founderName'>Mamta</span>
        <span className='founderComName'>Co-Founder, PrepBytes</span>
        <span><img className='founderComImg1' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Mentor-Company1.webp' alt='Not Found' /></span>
      </div>
    </div>

    <div className='founderMiniDiv1'>
      <div>
      <img className='founderImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Kushdeep.webp' alt='Not Found' />
      </div>

      <div className='FounderSpanDiv'>
        <span className='founderName'>Kushdeep</span>
        <span className='founderComName'>SDE, ShareChat</span>
        <span><img className='founderComImg2' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-01.webp' alt='Not Found' /></span>
      </div>
    </div>

    <div className='founderMiniDiv1'>
      <div>
      <img className='founderImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/Student+Placed+Section/Mentor_Aveek.webp' alt='Not Found' />
      </div>

      <div className='FounderSpanDiv'>
        <span className='founderName'>Aveek</span>
        <span className='founderComName'>Mentor, PrepBytes</span>
        <span><img className='founderComImg3' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/logo-02.webp' alt='Not Found' /></span>
      </div>
    </div>

    </div>

    <div className='MasterHeadingDiv'>
      <span className='MasterHeading'>Master Competitive Programming With Us</span>
    </div>


    <div className='MainPictureDiv'>

      <div className='MainPictureRightDiv'>

      <div className='MiniInnerDiv11'>
        <div className='InnerMDiv'>
          <span className='InnerMDivHeadSpan'>Personalised Program</span>
          <span className='InnerMDivNormalSpan'>Master your skills from where you are, with</span>
          <span className='InnerMDivNormalSpan'>India's only personalised program</span>
          </div>

          <div className='circleImageDiv'><img className='circleImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Personalised+Program.webp' alt='Not Found' /></div>
        </div>

        <div className='MiniInnerDiv'>
        <div className='InnerMDiv'>
          <span className='InnerMDivHeadSpan'>Quick Doubt Support</span>
          <span className='InnerMDivNormalSpan'>Get your doubts cleared by coding experts and</span>
          <span className='InnerMDivNormalSpan'>have a smooth learning</span>
          </div>
          <div className='circleImageDiv'><img className='circleImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Quick+Doubt+Support.webp' alt='Not Found' /></div>
        </div>

        <div className='MiniInnerDiv'>
        <div className='InnerMDiv'>
          <span className='InnerMDivHeadSpan'>250+ Coding Questions</span>
          <span className='InnerMDivNormalSpan'>Best way to master a language is by coding in</span>
          <span className='InnerMDivNormalSpan'>the language</span>
          </div>
          <div className='circleImageDiv'><img className='circleImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_250+Coding+Questions.webp' alt='Not Found' /></div>
        </div>

        <div className='MiniInnerDiv'>
        <div className='InnerMDiv'>
          <span className='InnerMDivHeadSpan'>50+ Hours of Videos</span>
          <span className='InnerMDivNormalSpan'>Recorded video lectures by experts to help you</span>
          <span className='InnerMDivNormalSpan'>understand the concepts easily</span>
          </div>
          <div className='circleImageDiv'><img className='circleImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_80+Hours+of+Videos.webp' alt='Not Found' /></div>
        </div>

      
      </div>

      <div className='MainMiddleImageDiv'>
        <img className='MainMiddleImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Vector.svg' alt='Not Found' />
      </div>

      <div className='MainPictureRightDiv'>
      <div className='MiniInnerDiv'>
        
          <div className='circleImageDiv'><img className='circleImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Expert+Mentors.webp' alt='Not Found' /></div>
          <div className='InnerMDiv1'>
          <span className='InnerMDivHeadSpan'>Expert Mentors</span>
          <span className='InnerMDivNormalSpan'>Get career guidance, mentorship, time</span>
          <span className='InnerMDivNormalSpan'>management strategies from industry experts</span>
          </div>
       
        </div>

        <div className='MiniInnerDiv'>
        
          <div className='circleImageDiv'><img className='circleImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_Get+certificate-01.webp' alt='Not Found' /></div>
          <div className='InnerMDiv1'>
          <span className='InnerMDivHeadSpan'>Get Certified</span>
          <span className='InnerMDivNormalSpan'>Get recognized on course completion with highly</span>
          <span className='InnerMDivNormalSpan'>reputed PrepBytes certificates</span>
          </div>
       
        </div>

        <div className='MiniInnerDiv'>
        
        <div className='circleImageDiv'><img className='circleImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_20+Live+Coding+Sessions.webp' alt='Not Found' /></div>
        <div className='InnerMDiv1'>
        <span className='InnerMDivHeadSpan'>20+ Live Coding Sessions</span>
        <span className='InnerMDivNormalSpan'>Code live and get mentorship with the top-rated</span>
        <span className='InnerMDivNormalSpan'>coders of the country.</span>
        </div>
     
      </div>

      <div className='MiniInnerDiv'>
        
        <div className='circleImageDiv'><img className='circleImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/Course+Feature+Section/Icons_80+Tech-Apti+MCQ+Tests.webp' alt='Not Found' /></div>
        <div className='InnerMDiv1'>
        <span className='InnerMDivHeadSpan'>40+ Coding quizes</span>
        <span className='InnerMDivNormalSpan'>Small quizzes after every topic to give you a</span>
        <span className='InnerMDivNormalSpan'>quick check on your understandings</span>
        </div>
     
      </div>
      </div>

    </div>


    <div className='WordMainDiv'>
      <div className='BlueBigDiv'>
        <span className='BlueBig'>10K+</span>
        <span className='BlueDownDiv'>Students Enrolled</span>
      </div>

      <div className='BlueBigDiv'>
      <span className='BlueBig'>1000K+</span>
      <span className='BlueDownDiv'>Doubts Solved</span>
      </div>

      <div className='BlueBigDiv'>
      <span className='BlueBig'>2k+ hrs</span>
      <span className='BlueDownDiv'>Mentor Interaction</span>
      </div>
    </div>

    <div className='CrackDiv'>
      <span className='CrackSpan'>Crack Reputed Coding Contests</span>
    </div>

    <div className='OctaImageDiv'>
      <img className='OctaImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/MCPWebp/MCP-company-new.webp' alt='Not Found' />
    </div>



    {/* <div>
  <div className="custom-arrows">
    <div className="arrow-left" onClick={handlePrevSlide}></div>
  </div>
  <Slider {...settings} ref={sliderRef}>
    {slides.map((slide, index) => (
      <div key={index} className="slider-item">
        <img
          src={slide.url}
          alt={slide.title}
          className="sliderClass" 
        />
      </div>
    ))}
  </Slider>
  <div className="custom-arrows">
    <div className="arrow-right" onClick={handleNextSlide}></div>
  </div>
</div> */}

<div className='MainSelectBatchDiv'>
  <div><span className='SelectBatchSpan'>SELECT BATCH</span></div>
  <div className='ButtonMayMain'>
  <div className='fs-container2-item2' onClick={course1handle}><input type='radio' name='dates'/>1st Feb<div className='fs-container2-item3'>Enrolment Started</div></div>
    <div className='fs-container2-item2' onClick={course2handle}><input type='radio' name='dates'/>15th Feb<div className='fs-container2-item3'>Enrolment Started</div></div>
  </div>
  <div className='EnrollMayMainDiv'><span className='Rupee25'>₹ 25000</span><button className='EnrollMayBB' onClick={doenroll}>Enroll Now</button></div>
</div>



    <div className='CrackDiv1'>
      <span className='CrackSpan'>By The End Of This Course, You Will Be Able To</span>
    </div>


   
<div className='LastMainSepDiv'>

  <div className='StarImageDiv'>
    <img className='StarImage' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/Vecto2.webp' alt='Not Found' />
  </div>

    <div className='secondMain12'>
      <div className='secondMini1 secondMiniAll12'>
          <div>
            <img className='boxImage12' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/1.webp' alt='Not Found' />
          </div>

          <div>
              <span className='secondMiniText12'>4 star and above in CodeChef</span>
          </div>
      </div>

      <div className='secondMini2 secondMiniAll12'>

      <div>
          <img className='boxImage12' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/2.webp' alt='Not Found' />
      </div>

        <div>
            <span className='secondMiniText12'>Crack contests like Facebook Hacker Cup, Google Kickstart, ACM ICPC</span>
        </div>

      </div>

      <div className='secondMini3 secondMiniAll12'>

        <div>
          <img className='boxImage12' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/3.webp' alt='Not Found' />
        </div>

        <div>
            <span className='secondMiniText12'>Candidate master and above in CodeForces</span>
        </div>

      </div>

      <div className='secondMini4 secondMiniAll12'>

        <div>
        <img className='boxImage12' src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/coursePageNew/zenithWebp/4.webp' alt='Not Found' />
        </div>

        <div>
            <span className='secondMiniText12'>Specialist and above in SPOJ.com</span>
        </div>

      </div>

    </div>

    </div>

<Footer />
    </div>
  )
}

export default MasterCompetitiveProgramming
