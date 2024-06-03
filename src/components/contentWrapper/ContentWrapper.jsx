import React from 'react'

const ContentWrapper = ({ className,children }) => {
  return (
    <div className={`w-full max-w-[1200px] mx-auto px-5 ${className}`}>
      { children }
    </div>
  )
}

export default ContentWrapper
