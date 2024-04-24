import React from 'react'
import FirstImg from '../Images/Fifth.png';
import SecondImg from '../Images/Fourth_2.png';


function FifthMainSect() {
  return (
    <div>
        <div className="Thirdcontainer">
        <div className="mainFirst">
          <div className="FirstContain" style={{backgroundImage: `url(${FirstImg})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover" }}>
          </div>
        </div>

        <div className="mainSecond">
          <div className="SecondContain">
            <div>We're here to help</div>
            <p>Read through our FAQs and, if you can't find what you're looking for, our experts will be happy to answer your questions </p>
            <a href='sign.com' className='act_btn_2'>READ FAQS</a> 
          </div>
        </div>

        
       </div>
    </div>
  )
}

export default FifthMainSect
