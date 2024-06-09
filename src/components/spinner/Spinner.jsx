import React from 'react'

const Spinner = ({ initial }) => {
  return (
    <div className={`w-full relative flex items-center justify-center ${initial ? "h-[700px]" : "h-[150px]"}`}>
        <svg className="animate-rotate z-20 w-[50px] h-[50px]" viewBox="0 0 50 50">
            <circle
                className="stroke-[hsl(210,70%,75%)] stroke-2 stroke-round animate-dash"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="5"
            ></circle>
        </svg>
    </div>
  )
}

export default Spinner
