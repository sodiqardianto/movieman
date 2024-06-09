import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import PosterFallBack from '../../assets/no-poster.png';
import Img from '../lazyLoadImage/Img';
import CircleRating from '../circleRating/CircleRating';
import Genres from '../genres/Genres';
import dayjs from 'dayjs';

const MovieCard = ({ data, fromSearch, mediaType }) => {
    const { url } = useSelector((state) => state.home);
    const navigate = useNavigate();
    const posterUrl = data.poster_path ? url.poster + data.poster_path : PosterFallBack;

    const formatedDate = () => {
        if (data?.release_date) {
            return dayjs(data?.release_date).format('MMM D, YYYY')
        } else if (data?.first_air_date) {
            return dayjs(data?.first_air_date).format('MMM D, YYYY')
        } else {
            return "-";
        }
    }
    
    return (
        <div
            className={`w-[calc(50%-5px)] mb-[25px] cursor-pointer flex-shrink-0 md:w-[calc(25%-15px)] lg:w-[calc(20%-15px)]`}
            onClick={() => navigate(`/${data.media_type || mediaType}/${data.id}`)}
        >
            <div className="relative w-full aspect-[1/1.5] bg-cover bg-center mb-[30px] flex items-end justify-between p-[10px] transition-all duration-500 ease-linear hover:opacity-50">
                <Img
                    className="w-full h-full object-cover object-center"
                    wrapperClassName="absolute top-0 left-0 w-full h-full rounded-xl overflow-hidden"
                    src={posterUrl}
                />
                {!fromSearch && (
                    <React.Fragment>
                        <CircleRating
                            rating={data.vote_average.toFixed(1)}
                            className="w-10 h-10 relative top-[30px] flex-shrink-0 md:w-[50px] md:h-[50px] font-bold"
                            backgroundColor="white"
                        />
                        <Genres
                            data={data.genre_ids.slice(0, 2)}
                            className="bg-blueNew py-[3px] px-[5px] text-[12px] rounded text-white whitespace-nowrap hidden relative md:flex md:flex-wrap md:justify-end"
                        />
                    </React.Fragment>
                )}
            </div>
            <div className="text-white flex flex-col">
                <span className="text-base mb-[10px] leading-6 ellipsis-1 md:text-xl">
                    {data.title || data.name}
                </span>
                <span className="text-sm opacity-50">
                    {formatedDate()}
                </span>
            </div>
        </div>
    );
}

export default MovieCard