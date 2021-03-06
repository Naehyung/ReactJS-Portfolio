import './FlipImage.css'
import Reacts from 'react';
import { useSpring, animated} from 'react-spring';
import ProgressBar from './ProgressBar';

function FlipImage(props) {

  const props3 = useSpring({
    from: {transform: "perspective(500px) rotateY(180deg)",opacity:0},
    to: async (next, cancel) => {
      await next({
        transform: "perspective(1000px) rotateY(0)",opacity:1})},
        delay: props.delay,
        config: { tension: 20,friction: 5 }
  })

  return (
    <div classNmae ="flipImageBody">
      <div className = "flipImageMain">
        <animated.div className = "flipImage" style={props3}>
          <img src={props.image} />
        </animated.div>
        <ProgressBar delayBar={props.delayBar}/>
      </div>
      <div className = "flipImageText">
        <p>{props.text}</p>
      </div>
    </div>

  )
}

export default FlipImage;
