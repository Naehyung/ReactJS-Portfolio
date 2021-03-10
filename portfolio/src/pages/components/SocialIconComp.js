import './SocialIconComp.css';
import { SocialIcon } from 'react-social-icons';
import React, { useState } from 'react';
import { useSpring, animated } from "react-spring";



function SocialIconComp (props) {

  const[color,setColor] = useState("rgba(52,58,64,1)");

  return (
    <div
      className ="socialIconComp"
      style={{backgroundColor:color}}
      onMouseMove={()=>setColor("rgba(246, 36, 89, 1)")}
      onMouseLeave={()=>setColor("rgba(52,58,64,1)")}>
      <SocialIcon
        url={props.url}
        bgColor="transparent"
        fgColor ="white"/>
    </div>
  )
}

export default SocialIconComp;
