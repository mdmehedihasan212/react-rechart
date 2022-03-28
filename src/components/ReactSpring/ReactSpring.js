import React, { useState } from 'react';
import { useSpring, animated, useSprings } from 'react-spring'

const ReactSpring = () => {
    const [flip, set] = useState(false)

    const props = useSpring({
        to:
            { opacity: 1 },
        from: { opacity: 0 },
        reset: true,
        reverse: flip,
        delay: 200,
        onRest: () => set(!flip)
    })
    return (
        <animated.div style={props}>Welcome To My Web</animated.div>
    );
};

export default ReactSpring;