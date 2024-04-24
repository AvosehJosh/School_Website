import React from 'react'
import ThirdMainSect from '../Css/ThirdMainSect.css';
import FirstImg from '../Images/Third-1.png';
import SecondImg from '../Images/Third-2.png';
import ThirdImg from '../Images/Third-3.png';


function Third_MainSect() {
  return (
    <div>
      <div className="Thirdcontainer">
        <div className="mainFirst">
          <div className="FirstContain" style={{backgroundImage: `url(${FirstImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover" }}>
          </div>
          <div className='details'>Stanford University</div>
          <div className='more'>SEE UNIVERSITY </div>
        </div>

        <div className="mainSecond">
          <div className="SecondContain" style={{backgroundImage: `url(${SecondImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover" }}>
          </div>
          <div className='details'>Stallion University</div>
          <div className='more'>SEE UNIVERSITY </div>
        </div>

        <div className="mainThird">
          <div className="ThirdContain" style={{backgroundImage: `url(${ThirdImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover" }}>
          </div>
          <div className='details'>Covenant University</div>
          <div className='more'>SEE UNIVERSITY </div>
        </div>
       </div>

       <div className="extra">
          <button className='all'> SEE ALL -></button>
          <div className="course" > Most Popular Courses</div>
          <div className="underline"></div>
        </div> 
  
  </div>
  )
}

export default Third_MainSect
