import React, { useEffect, useState } from 'react'
import "../../styles/StudyMaterial.css"
import axios from 'axios';
import Footer from '../../Footer';

const VedioTutorial = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:2923/api/mocktests');
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='vediototalMainContainer'>
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


    <div className='videoMainCont'>
  {data
    .filter((item) => item.cat === 'videotutorials')
    .map((item, index) => {
      return (
        <div className='videominiContainer' key={index}>
         
         <div className='videoImageDiv'>
          <img className='videoImage' src ={item.image} alt ='not found' />
          </div>

          <div className='videoHeadingDiv'>
          <span className='videoHeading'>{item.name}</span>
          </div>

          <div className='videoTextDiv'>
          <span className='videoText'>{item.text}</span>
          </div>

          <div className='textImageSpanDiv'>
          <span className='textImageSpan'><img src='data:image/svg+xml;base64,PHN2ZyBpZD0ieW91dHViZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB3aWR0aD0iMjguMTI2IiBoZWlnaHQ9IjI4LjEyNiIgdmlld0JveD0iMCAwIDI4LjEyNiAyOC4xMjYiPgogIDxwYXRoIGlkPSJQYXRoXzY3NyIgZGF0YS1uYW1lPSJQYXRoIDY3NyIgZD0iTTIyNC4xMTMsMjE1Ljk4NWw2LjktMy45NzMtNi45LTMuOTczWm0wLDAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTIuOTcyIC0xOTcuNzgxKSIgZmlsbD0iIzcyODM5YyIvPgogIDxwYXRoIGlkPSJQYXRoXzY3OCIgZGF0YS1uYW1lPSJQYXRoIDY3OCIgZD0iTTE0LjA2MywwQTE0LjA2MywxNC4wNjMsMCwxLDAsMjguMTI2LDE0LjA2MywxNC4wNjUsMTQuMDY1LDAsMCwwLDE0LjA2MywwWk0yMi44NSwxNC4wNzdhMjMuMjExLDIzLjIxMSwwLDAsMS0uMzYyLDQuMjI3LDIuMiwyLjIsMCwwLDEtMS41NDksMS41NDksNTMuNDUsNTMuNDUsMCwwLDEtNi44NzYuMzYyLDUxLjUzOCw1MS41MzgsMCwwLDEtNi44NzYtLjM3NkEyLjIsMi4yLDAsMCwxLDUuNjM4LDE4LjI5YTIzLjEwOSwyMy4xMDksMCwwLDEtLjM2Mi00LjIyNywyMy4yLDIzLjIsMCwwLDEsLjM2Mi00LjIyN0EyLjI0NywyLjI0NywwLDAsMSw3LjE4Nyw4LjI3M2E1My40NTEsNTMuNDUxLDAsMCwxLDYuODc2LS4zNjIsNTEuNDI5LDUxLjQyOSwwLDAsMSw2Ljg3Ni4zNzYsMi4yLDIuMiwwLDAsMSwxLjU0OSwxLjU0OUEyMi4wMjYsMjIuMDI2LDAsMCwxLDIyLjg1LDE0LjA3N1ptMCwwIiBmaWxsPSIjNzI4MzljIi8+Cjwvc3ZnPgo=' alt='Not Found' /></span>
          <span className='videos'>21 Videos</span>
          </div>

        </div>
      );
    })}

    
</div>

<Footer />
    </div>
  )
}

export default VedioTutorial
