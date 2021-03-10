import Reacts from 'react';
import './Footer.css'
import SocialIconComp from './SocialIconComp'

function Footer() {


  return (
    <div className ="footer">
      <div className ="footerBody">
      <SocialIconComp url = "https://www.linkedin.com/in/naehyung-kim-15a1921b4/"/>
      <SocialIconComp url = "https://www.facebook.com/skyfishknh"/>
      <SocialIconComp url = "https://github.com/Naehyung"/>
      <SocialIconComp url = "https://www.instagram.com/naehyung91/"/>
      </div>
      <div className ="footerText">
      <p>NAEHYUNG KIM &copy; 2021</p>
      </div>
    </div>
  )
}

export default Footer;
