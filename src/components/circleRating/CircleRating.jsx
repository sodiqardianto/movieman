import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const CircleRating = ({ rating, className, backgroundColor }) => {
  return (
    <div className={`bg-white rounded-full p-[2px] ${className}`}>
        <CircularProgressbar
            value={rating}
            maxValue={10}
            text={rating}
            background
            styles={buildStyles({
                pathColor: rating < 5 ? "red" : rating < 7 ? "orange" : "green",
                backgroundColor: backgroundColor,
                trailColor: "transparent",
                textColor: "#020c1b",
                textSize: "34px",
            })}
        />
    </div>
  )
}

export default CircleRating
