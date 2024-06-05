import React from 'react'
import { useSelector } from 'react-redux'

const Genres = ({ data, className }) => {
    const { genres } = useSelector((state) => state.home);
    return (
        <div className="flex gap-[5px]">
            {data?.map((genre) => {
                if (!genres[genre]?.name) return;
                return (
                    <div key={genre} className={`bg-blueNew py-[3px] px-[5px] text-[12px] rounded text-white whitespace-nowrap relative md:flex md:flex-wrap md:justify-end ${className}`}>
                        {genres[genre]?.name}
                    </div>
                )
            })}
        </div>
    )
}

export default Genres
