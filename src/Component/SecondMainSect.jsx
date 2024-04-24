import React from 'react';
import SecondMainSect from '../Css/SecondMainSect.css';
import background from '../Images/Rectangle.png';

function Second_MainSect() {
  return (
    <div>
      <section className="second_sect">
        <div className="second_sect_bdg" style={{backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover" }}>
                <div className="container">
                    <div className="container_1" ></div>
                    <div className="container_2"></div>
                    <div className="container_3"></div>
                </div>

            </div>
        <div className="top_rank"> Top ranking universities</div>
        <div className="underline"></div>
    </section>
    </div>
  )
}

export default Second_MainSect
