import React from 'react';
import NavComp from '../Component/NavComp';
import MainStyle from '../Css/MainStyle.css';
import MainMenu from '../Component/MainMenu';
import MainMenuSect from '../Component/FirstMainSect'
import SecondMainSect from '../Component/SecondMainSect';
import ThirdMainSect from '../Component/ThirdMainSect';
import FourthMainSect from '../Component/FourthMainSect';
import FifthMainSect from '../Component/FifthMainSect';
import MainFooter from '../Component/MainFooter';


function MainPage() {
  return (
    <div>
      <NavComp />
      <MainMenu />
      <MainMenuSect />
      <SecondMainSect />
      <ThirdMainSect />
      <FourthMainSect />
      <FifthMainSect />
      <MainFooter />
    </div>
  )
}

export default MainPage
