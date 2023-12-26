import React from 'react'
import "../../styles/StudyMaterial.css"

const VedioTutorial = () => {
  return (
    <div>
     <div className='vedioFirstContainer'>
        <div className='firstInner'>
            <h1>Prepbytes Video Library</h1>
            <p>Increase your knowledge with PrepBytes free videos. PrepBytes video 
                library is a repository of more than 250 videos containing videos on 
                Competitive Programming , Language Fundamentals - C, C++, Java, 
                Data Structures and Algorithms, Aptitude, 
                Operating System, Interview Questions and much 
                more all at one place.</p>
        </div>

        <div className='secondImgInner'>
            <img src='https://prepbytes-misc-images.s3.ap-south-1.amazonaws.com/video-repository/video_lib_illustration.png' alt='Not Found' />
        </div>
     </div>

    <div className='categories'>
      <span className='categoriesSpan'>CATEGORIES</span>
    </div>
    </div>
  )
}

export default VedioTutorial
