import React from 'react'
import Footer from './Footer'
import "../Components/styles/Home.css";

const Home = () => {
  return (
    <div className='HomeMainContainer'>
      <div className='startMContainer'>
        <div className='spanContainer'>
        <div className='spanInnerCont'>
        <span className='firstSpan'>Start your journey of success</span>
        <span className='secondSpan'>Personalised Coding Programs to make coding easier for you</span>
        <span className='thirdSpan'>Want to know how <span id='prepbytes'>PrepBytes</span> can help you?</span>
        <button className='knowmore'>Know More</button>
        </div>
        </div>

        <div className='imageDiv'>
          <img className='firstImage' src='	https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Masterhead(web).svg' alt='Not Found'/>
        </div>
      </div>

      <div className='photoContainer'>
        <div className='photoinner'>
          <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/Google-launchpad.webp' alt='not found' /></div>
          <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/future-skills-homepage.webp' alt='not found' /></div>
          <div><img src='	https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/she-leads.webp' alt='not found' /></div>
          <div><img src='https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/homepage/aws-ed-start.webp' alt='not found' /></div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
