import './Project.css';
import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";
import NewWindow from 'react-new-window'
import ProjectModal from './ProjectModal'

import ABOUTImage from './images/ABOUT.png'
import MENUImage from './images/MENU.png'
import CONTACTImage from './images/CONTACT.png'

function Project(props) {
  const [{yText, yButton, opacity, opacityText, color}, set] = useSpring(() => ({
    yText: -200,
    yButton: 300,
    color: "white",
    opacity: 1,
    opacityText : 0,
    config: { friction: 25 }}))

  const [opacityTest, setOpacity] = useSpring(() => ({
    opacity:0

  }))

  const [show, setShow] = useState(false);
  function handleShow() {
     setShow(true);

   }
  function handleClose() {
    setShow(false);

  }

  const slideImages = [
  ABOUTImage,
  MENUImage,
  CONTACTImage
  ];

  return (
    <div
      className="projectImage"
      onMouseMove={() => set({ yText: -100, yButton: 150,opacity: 0, opacityText: 1})}
      onMouseLeave={() => set({ yText: -200, yButton: 300,opacity: 1, opacityText: 0})}
    >
      <animated.img style={{opacity}} src={props.image} />
      <animated.div
        style={Object.assign({},
          {opacity: opacityText.interpolate((o) => `${o}`)},
          {transform: yText.interpolate((v) => `translateY(${v}%`)})}
        className="projectText">
        {props.MainText}
      </animated.div>
      <animated.button
        onMouseDown={handleShow}
        style={Object.assign({},
          {opacity: opacityText.interpolate((o) => `${o}`)},
          {transform: yButton.interpolate((v) => `translateY(${v}%`)})}
        className="projectButton">
        LEARN MORE
      </animated.button>
      <ProjectModal
        show={show}
        handleClose={handleClose}
        slideImage1={props.slideImage1}
        slideImage2={props.slideImage2}
        slideImage3={props.slideImage3}
        MainText={props.MainText}
        Explaination={props.Explanation}
        githubPage = {props.githubPage}/>

    </div>
  )
}

export default Project;
