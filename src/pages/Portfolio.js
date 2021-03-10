import './Portfolio.css';
import Menu from './Menu';
import Project from './components/Project'
import Madtongsan from './components/images/Madtongsan.png'
import LOGINImage from './components/images/LOGIN.png'
import TextyAnim from 'rc-texty';
import ABOUTImage from './components/images/ABOUT.png'
import MENUImage from './components/images/MENU.png'
import CONTACTImage from './components/images/CONTACT.png'
import MainPage from './components/images/MainPage.png'
import MainPage2 from './components/images/MainPage2.png'
import Chatting from './components/images/Chatting.png'
import Footer from './components/Footer';
import HARMS1 from './components/images/HARMS1.png'
import HARMS2 from './components/images/HARMS2.png'
import HARMS3 from './components/images/HARMS3.png'
import Portfolio1 from './components/images/Portfolio1.png'
import Portfolio2 from './components/images/Portfolio2.png'
import Portfolio3 from './components/images/Portfolio3.png'
import Portfolio4 from './components/images/Portfolio4.png'

function Portfolio() {

  return(
    <div className = "portfolio">
      <Menu/>
      <div className = "portfolioText">
        <TextyAnim type="swing" onEnd={(type) => {console.log(type);}}>
          PORTFOLIO
        </TextyAnim>
      </div>
      <div className = "project">
        <Project
          image={Madtongsan}
          slideImage1={ABOUTImage}
          slideImage2={MENUImage}
          slideImage3={CONTACTImage}
          MainText="MADTONGSAN WEBSITE"
          Explanation="Simple Website using HTML, CSS, JavaScript"
          githubPage="https://github.com/Naehyung/Madtongsan-Website1"/>
        <Project image={LOGINImage}
          slideImage1={MainPage}
          slideImage2={MainPage2}
          slideImage3={Chatting}
          MainText="CHATTING APPLICATION"
          Explanation="Simple Chatting Application using Java, AndroidStudio, SpringBoot, WebSocket, Restful API and STOMP"
          githubPage="https://github.com/Naehyung/Simple-Chatting-Application"/>
        <Project image={HARMS1}
          slideImage1={HARMS1}
          slideImage2={HARMS2}
          slideImage3={HARMS3}
          MainText="GUI FOR HARMS"
          Explanation="Graphical User Interface for Hierarchical Attack Representation Model using Java, Python and SocketIO"
          githubPage="https://github.com/Naehyung/HARMs"/>
        <Project image={Portfolio1}
          slideImage1={Portfolio2}
          slideImage2={Portfolio3}
          slideImage3={Portfolio4}
          MainText="Portfolio Website"
          Explanation="Portfolio Website using HTML, CSS, JavaScript, ReactJS"
          githubPage="https://github.com/Naehyung/ReactJS-Portfolio"/>
      </div>
      <Footer/>
    </div>
  )
}

export default Portfolio;
