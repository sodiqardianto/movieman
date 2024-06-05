import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css';

const Img = ({ src, className, wrapperClassName }) => {
  return (
    <LazyLoadImage
      src={src}
      className={className || ""}
      wrapperClassName={wrapperClassName || ""}
      alt=""
      effect="blur"
    />
  )
}

export default Img
