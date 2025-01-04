import React, { useRef, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';

const Background = () => {
  const backgroundRef = useRef();

  // Use react-spring to animate the background color
  const [props, api] = useSpring(() => ({
    backgroundColor: 'rgba(0, 0, 0, 1)', // Initial background color (full opacity)
  }));

  useEffect(() => {
    const interval = setInterval(() => {
      api.start({
        backgroundColor: `rgba(0, 0, 0, ${Math.random() * 0.5 + 0.5})`, // Randomly change opacity between 0.5 and 1
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [api]);

  return (
    <animated.div className="background" style={props} ref={backgroundRef}>
      <div className="background-pattern" />
    </animated.div>
  );
};

export default Background;
