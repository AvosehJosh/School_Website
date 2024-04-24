import React from 'react'
import MainFooter from '../Css/MainFooter.css';

function Main_Footer() {
  return (
    <div className='mainContainer'>
      <div className="subContain">
        <div className="firstSub">Subscribe to our newsletter</div>
        <div className='secondSub'>Get expert advice for your journey to university delivered to your inbox each <br />  month. It's short, and worthwhile - we promise </div>

        <input type="text" placeholder='Email address' />

        </div>
    </div>
  )
}

export default Main_Footer

