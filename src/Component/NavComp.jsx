import React from 'react';
import NavStyle from '../Css/NavStyle.css';


function NavComp() {
  return (
    <header>
      <div className='navbar'>
          <div className='logo'><a href='logo.com'>Mrs. College Guide</a></div>
          <ul className='links'>
            <li><a href='uni.com'>Universities </a></li>
            <li><a href='comm.com'>Community</a></li> 
            <li><a href="news.com">News</a></li>
            <li><a href="abt.com">About</a></li>
            </ul>

            <a href='login.com' className='act_btn_1'>LOGIN</a>
            <a href='sign.com' className='act_btn_2'>SIGN UP</a> 
             
      </div>  
    </header>
  )
}

export default NavComp
