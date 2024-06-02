import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
// SOMETHING NOT YET IMPORTED HERE IN 1:51:30

const Img = ({ src, className }) => {
  return (
    <LazyLoadImage
        className={className || ""}
        alt=""
        effect=""
        src={src}
    />
  )
}

export default Img
