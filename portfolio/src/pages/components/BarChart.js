import Reacts from 'react';
import './BarChart.css'
import {useSpring, animated} from 'react-spring'



function BarChart(props) {

  const props2 = useSpring({
    from: {width: `${props.width}%`, transform: "translateX(-100%)",background:"red"},
    to: async (next, cancel) => {
      await next({transform:"translateX(0%)",background:"black"})
    }, delay: props.delay, config: { tension: 60 }

  })

  return (
    <div>
      <div className = "bar">
        <div className = "language">
          {props.name}
        </div>
        <div className = "percentage">
          <animated.div className="glance2" style={props2}/>
        </div>
        <div className = "percentageText">
          {props.percentage}
        </div>

      </div>

    </div>
  )
}

export default BarChart;
