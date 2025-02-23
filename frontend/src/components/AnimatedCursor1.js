import React from 'react'
import AnimatedCursor from "react-animated-cursor"

const AnimatedCursor1 = () => {
  return (
    <AnimatedCursor 
     
    innerSize={10}
    outerSize={20}
    color='34,34,34'  // Changed to black (RGB values)
    outerAlpha={0.2}
    innerScale={0.9}
    outerScale={5}
    clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}

  />


  )
}

export default AnimatedCursor1