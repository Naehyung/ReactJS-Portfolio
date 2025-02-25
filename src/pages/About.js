import './About.css';
import Menu from './Menu';
import TextyAnim from 'rc-texty';
import myImage from './components/images/about1.jpg'
import BarChart from './components/BarChart';
import FlipImage from './components/FlipImage'
import Creative from './components/images/creative.png';
import Dynamic from './components/images/dynamic.png';
import Responsive from './components/images/responsive.png'
import Fast from './components/images/fast.png'
import Footer from './components/Footer';
import { useSpring, animated } from "react-spring";

const text = 'ABOUT ME';

function About() {

  const props3 = useSpring({
    from: {transform: "perspective(500px) rotateY(180deg)",opacity:0},
    to: async (next, cancel) => {
      await next({
        transform: "perspective(1000px) rotateY(0)",opacity:1})},
        config: { tension: 40,friction: 10 }
  })

  return (
    <div className ="about">
      <Menu/>
      <div className = "aboutText">
        <TextyAnim type="swing" onEnd={(type) => {console.log(type);}}>
          {text}
        </TextyAnim>
      </div>
      <div className ="aboutHeader">
        <div className ="headerItem">
          <FlipImage delay="100" delayBar="100" image={Creative} text="Creative"/>
        </div>
        <div className ="headerItem">
          <FlipImage delay="200" delayBar="200" image={Dynamic} text="Dynamic"/>
        </div>
        <div className ="headerItem">
          <FlipImage delay="300" delayBar="300" image={Responsive} text="Responsive"/>
        </div>
        <div className ="headerItem">
          <FlipImage delay="400" delayBar="400" image={Fast} text="Fast"/>
        </div>
      </div>
      <div className = "aboutBody">
        <div className = "bodyLeft">
          <div className = "bodyLeftText">
            <TextyAnim type="swing" onEnd={(type) => {console.log(type);}}>
              WHO AM I?
            </TextyAnim>
          </div>
          <animated.div className = "bodyLeftImage" style={props3}>
            <img src = {myImage} alt ="myImage"/>
          </animated.div>
          <div className = "bodyLeftContent">
            <p>I graudated from the University of Queensland<br/>with bachelor degree in Software Enginnering.</p>
          </div>
        </div>
        <div className = "bodyRight">
          <div className = "bodyRightText">
            <TextyAnim type="swing" onEnd={(type) => {console.log(type);}}>
              SKILLS
            </TextyAnim>
          </div>
          <div className = "barChart">
            <BarChart width = "100" delay ="100" name = "HTML" percentage = "90%"/>
            <BarChart width = "90" delay = "120" name = "CSS" percentage = "80%"/>
            <BarChart width = "80" delay = "140" name = "JavaScript" percentage = "70%"/>
            <BarChart width = "100" delay = "160" name = "Java" percentage = "90%"/>
            <BarChart width = "60" delay = "180" name = "SpringBoot" percentage = "50%"/>
            <BarChart width = "80" delay = "200" name = "Android" percentage = "70%"/>
            <BarChart width = "60" delay = "220" name = "PhotoShop" percentage = "50%"/>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
export default About;
