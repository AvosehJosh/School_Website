import React from 'react';
import SecondMainSect from '../Css/SecondMainSect.css';
import background from '../Images/Rectangle.png';

function Second_MainSect() {
  return (
    <div>
      <section className="second_sect">
        <div className="second_sect_bdg">
                <div className="container">
                    <div className="container_1" >
                      <h4>Find a course</h4>
                      <p>Search by subject, course or region to find the right course for you</p>
                      <a href="get" className="act_btn_2">get started</a>
                    </div>
                    <div className="container_2">
                    <h4>Find an university</h4>
                      <p>Search for universities to find out about courses</p>
                      <a href="get" className="act_btn_2">get started</a>
                    </div>
                    <div className="container_3">
                    <h4>Find an Open Day</h4>
                      <p>Search and book open days to help you make the right choice</p>
                      <a href="get" className="act_btn_2">get started</a>
                    </div>
                </div>

            </div>
    </section>
    <div className='under'>
    <div className="top_rank"> Top ranking universities</div>
    <div className="underline"></div>
    </div>
    </div>
  )
}

export default Second_MainSect
