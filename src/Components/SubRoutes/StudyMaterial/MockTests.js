import React, { useEffect, useState } from 'react'
import "../../styles/StudyMaterial.css";
import axios from 'axios';
import { FaShareAlt } from 'react-icons/fa';
import Footer from '../../Footer';
import { loadStripe } from '@stripe/stripe-js';



const MockTests = () => {


  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  // const [renderData,setRenderData] = useState([])

  const fetchData = async () => {
    try {
      const response = await axios.get('https://prepbytes-clone-backend.onrender.com/api/mocktests');
      
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

  const checkitem=(id)=>{
    for (let i=0;i<data.length;i++){
                  if(data[i].id===id){
                    data[i]['email']=localStorage.getItem("selfdetails")
                    console.log(data[i],"1111111111111111111")
                      return [data[i]]
  
                  }
              }

  }
  const   handlePayment=async (id)=>{
    const result=await checkitem(id)
    console.log(result,"22222222222222")
    
    
    const stripe=await loadStripe(" pk_test_51OMERySJb30zHYKXhazWu96YHeq9esM7jjoHRU5Yl6OsFBFrIqAN4l6DR432lstZ8S1BEgMXk05yGcoIoqcZQ0FJ00fJW2eWVM")
const body={
products:result
}
const headers={
"content-Type":"application/json"
}
try {
// const response = await fetch("https://prepbytes-clone-backend.onrender.com/user/createcheckout1", {
  const response = await fetch("http://localhost:2923/user/createcheckout1", {
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
    <div className='MocktestsMaindiv'>
        <div className='firstMockdivParent'>
            <div className='firstMockdiv'>
              
              <h1>Mock Tests</h1>

              <p>Technical and Aptitude Test is a 
                very important process of most of 
                the placement tests. Crack your 
                next placement with series of 
                PrepBytes practice and mock tests. 
                Practice subject-wise and 
                company-wise tests. Take real-time 
                mock tests with other students and 
                test your preparation.</p>

            </div>
        </div>



      <div>
        <div className='FeaturedDiv'> 
      <span className='Featured'>Featured Mock Tests</span>
      </div>
        <div class="container11">
          <div class="line"></div>
          <p className='containerP11'>PAST MOCK TESTS</p>
          <div class="line"></div>
        </div>

        </div>

        <div id='flex-container'>
         
  {data
    .filter((item) => item.cat==='mocktests')
    .map((item, index) => {
      return (
        <div className='miniContainer' key={index}>
        
        <div className='infoImageDiv'>
        <img className='infoImage' src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNi42MDEiIGhlaWdodD0iMjYuNjAxIiB2aWV3Qm94PSIwIDAgMjYuNjAxIDI2LjYwMSI+PGRlZnM+PHN0eWxlPi5he2ZpbGw6IzM5NjlhZDtzdHJva2U6IzM5NjlhZDt9PC9zdHlsZT48L2RlZnM+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41IDAuNSkiPjxjaXJjbGUgY2xhc3M9ImEiIGN4PSIwLjUiIGN5PSIwLjUiIHI9IjAuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIgNikiLz48cGF0aCBjbGFzcz0iYSIgZD0iTTIxLjg1MiwzLjc0OWExMi44LDEyLjgsMCwwLDAtMTguMSwxOC4xLDEyLjgwNSwxMi44MDUsMCwwLDAsMTUuNjc1LDEuOSwxLDEsMCwwLDAtMS4wMzYtMS43MTEsMTAuOSwxMC45LDAsMSwxLDMuMzgyLTMuMjUxLDEsMSwwLDAsMCwxLjY2MywxLjExMiwxMi43NjksMTIuNzY5LDAsMCwwLTEuNTgtMTYuMTU3WiIvPjxwYXRoIGNsYXNzPSJhIiBkPSJNMjM3LDE4N2ExLDEsMCwwLDAtMSwxdjguOWExLDEsMCwwLDAsMiwwVjE4OEExLDEsMCwwLDAsMjM3LDE4N1oiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMjQuMiAtMTc3LjY1KSIvPjwvZz48L3N2Zz4=' alt='Not Found' />
        </div>
        
        <div className='ShareDiv'>
        <FaShareAlt className='shareSymbol'/>
        </div>

          <div className='techImageDiv'>
          <img className='techImage' src ={item.image} alt ='not found' />
          </div>
          <span className='mainHeading'>{item.name}</span>

          <div className='priceMainContainer'>

            <div className='allMini'>
              <span>{item.date}</span>
              <span className='spanDowntext'>Date</span>
            </div>

            <hr/>

            <div className='allMini'>
            <span>{item.price}</span>
              <span className='spanDowntext'>Price</span>
            </div>

            <hr/>

            <div className='allMini'>
            <span>{item.duration}</span>
              <span className='spanDowntext'>Duration</span>
            </div>
          </div>

          <button className='buynowButton' onClick={()=>handlePayment(item.id)}>Buy Now</button>
        </div>
      );
    })}
</div>

<div>
        <div className='FeaturedDiv'> 
      <span className='Featured'>Practice Tests</span>
      </div>
        <div class="container11">
          <div class="line"></div>
          <p className='containerP11'>TOPIC WISE</p>
          <div class="line"></div>
        </div>

        </div>

        <div className='practicetestMainCont'>
  {data
    .filter((item) => item.cat === 'practicetests' && item.id <=39)
    .map((item, index) => {
      return (
        <div className='practiceminiContainer' key={index}>
         
         <div className='techImageDiv1'>
          <img className='techImage1' src ={item.image} alt ='not found' />
          </div>

          <span className='mainHeading1'>{item.name}</span>

          <button className='buynowButton1' onClick={()=>handlePayment(item.id)}>Buy Now</button>
         
        </div>
      );
    })}

    
</div>

<div className='practicetestMainCont1'>

{data
    .filter((item) => item.cat === 'practicetests' && item.id >= 40 && item.id<=43 )
    .map((item, index) => {
      return (
        <div className='practiceminiContainer' key={index}>
         
         <div className='techImageDiv1'>
          <img className='techImage1' src ={item.image} alt ='not found' />
          </div>

          <span className='mainHeading1'>{item.name}</span>

          <button className='buynowButton1' onClick={()=>handlePayment(item.id)}>Buy Now</button>
         
        </div>
      );
    })}
</div>


        
        <div class="container11">
          <div class="line"></div>
          <p className='containerP11'>COMPANY WISE</p>
          <div class="line"></div>
        </div>


    <div className='companywiseMainCont2'>

    {data
    .filter((item) => item.cat === 'companywise' && item.id<=63)
    .map((item, index) => {
      return (
        <div className='companyminiContainer' key={index}>
         
         <div className='techImageDiv2'>
          <img className='techImage2' src ={item.image} alt ='not found' />
          </div>

         

          <button className='buynowButton2' onClick={()=>handlePayment(item.id)}>Buy Now</button>
         
        </div>
      );
    })}
</div>


<div className='companywiseMainCont21'>

    {data
    .filter((item) => item.cat === 'companywise' && item.id>=64 && item.id<=67)
    .map((item, index) => {
      return (
        <div className='companyminiContainer' key={index}>
         
         <div className='techImageDiv2'>
          <img className='techImage2' src ={item.image} alt ='not found' />
          </div>

         

          <button className='buynowButton2' onClick={()=>handlePayment(item.id)}>Buy Now</button>
         
        </div>
      );
    })}
</div>

 <Footer />
    </div>
  )
}

export default MockTests
