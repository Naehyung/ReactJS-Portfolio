import './ProgressBar.css'
import React from 'react';
import { Spring } from 'react-spring/renderprops'


const ProgressBar = (props) => {

  return (
    <div>
    <Spring
      from = {{x: 700, color: "red"}}
      to = {{x:0, color: "black"}}
      config={{ delay: props.delayBar, tension: 20, friction: 6}}>
      {props => <svg className="svg" width="160" height="160">
      <circle
        className="svg-circle"
        stroke={props.color}
        cx="80"
        cy="80"
        r="75"
        strokeWidth="5"
        strokeDashoffset={props.x}
        strokeDasharray="700"
      />
      </svg>
    }
    </Spring>
    </div>
  )
}

export default ProgressBar;
