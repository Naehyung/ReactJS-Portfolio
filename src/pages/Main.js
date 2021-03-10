import './Main.css';
import mainVideo from './components/video/main.mp4'
import { Link } from "react-router-dom";
import Typical from 'react-typical'
import { useSpring, animated } from "react-spring";

function Main() {

  const [{ x, color}, set] = useSpring(() => ({ x:100, color:"#fff"}));

  return (
    <div className = "main">
      <video autoPlay loop muted id="video">
        <source src={mainVideo} type="video/mp4"/>
      </video>
      <div className = "text">
        <Typical
        steps={["Hello, I'm Naehyung Kim.", 2000, "I'm a Software Engineer.", 2000]}
        loop={Infinity}
        wrapper="h1"/>
      </div>
      <div className = "button">
        <button
        onMouseEnter={() => set({ x: 0, color: "#000" })}
        onMouseLeave={() => set({ x: 100, color: "#fff" })}>
          <Link to = "/About" style={{ textDecoration: 'none' }}>
            <animated.span style={{ color }}>
              CHECK OUT MY WORK
            </animated.span>
          </Link>
          <animated.div
            style={{ transform: x.interpolate((v) => `translateX(${-v}%`) }}
            className="glance"
          />
        </button>
      </div>
    </div>
  );

}

export default Main;
