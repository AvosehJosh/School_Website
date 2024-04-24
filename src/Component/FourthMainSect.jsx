import React from 'react'
import FirstImg from '../Images/fourth_1.png';
import SecondImg from '../Images/Fourth_2.png';
import ThirdImg from '../Images/Forth_3.png';

function FourthMainSect() {
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
        </div> 
        <div className="linethrough"></div>
    </div>
  )
}

export default FourthMainSect
