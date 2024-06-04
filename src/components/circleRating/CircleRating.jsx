import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./circle-rating.css"

const CircleRating = ({ rating, className }) => {
  return (
    <div className={`bg-blackOne rounded-full p-[2px] ${className}`}>
        <CircularProgressbar
            value={rating}
            maxValue={10}
            text={rating}
            styles={buildStyles({
                pathColor:
                    rating < 5 ? "red" : rating < 7 ? "orange" : "green",
            })}
        />
    </div>
  )
}

export default CircleRating
