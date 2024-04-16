import React from 'react';
import MainMenu from '../Css/MainMenu.css';
import background from '../Images/school_Overview.png';

function Main_Menu() {
  return (
    
    <div className="main_drop" style={{backgroundImage: `url(${background})`,
                                        backgroundRepeat: "no-repeat",
                                        backgroundSize: "cover" }} >
          <div className="main_tip">
        <div className="main_tip_itmes">
        <p>find your <span>future</span> today!</p>
        <p>the altimate guide to universities wordwide</p>
        </div>
      </div>
  </div>
  
  )
}

export default Main_Menu
