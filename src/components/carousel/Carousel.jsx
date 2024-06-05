import React, { useRef } from 'react';
import {
  BsArrowLeft,
  BsArrowRight,
} from "react-icons/bs";
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Img from '../lazyLoadImage/Img';
import PosterFallBack from '../../assets/no-poster.png';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import CircleRating from '../circleRating/CircleRating';
import "./carousel.css";
import Genres from '../genres/Genres';

const Carousel = ({ data, loading, endPoint }) => {
  const carouselContainer = useRef();

  const { url } = useSelector((state) => state.home);
  const navigate = useNavigate();

  const navigation = (dir) => {
    const container = carouselContainer.current;

    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20)

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    })
  }

  const skeletonItem = () => {
    return (
      <div className="w-32 md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)] flex-shrink-0">
        <div className="rounded-xl w-full aspect-[1/1.5] mb-8 skeleton">
          <div className="flex flex-col skeleton">
            <div className="w-full h-5 mb-5 skeleton"></div>
            <div className="w-3/4 h-5 skeleton"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mb-13">
      <ContentWrapper className="relative">
        <BsArrowLeft
          className="text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 absolute rounded-full p-1 text-white top-[40%] translate-y-[-50%] cursor-pointer opacity-50 z-10 hidden md:block hover:opacity-80 left-8"
          onClick={() => navigation("left")}
        />
        <BsArrowRight
          className="text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 absolute rounded-full p-1 text-white top-[40%] translate-y-[-50%] cursor-pointer opacity-50 z-10 hidden md:block hover:opacity-80 right-8"
          onClick={() => navigation("right")}
        />
        {!loading ? (
          <div className="flex gap-[10px] overflow-y-hidden -mr-5 -ml-5 px-5 md:gap-5 md:overflow-hidden md:m-0 md:p-0" ref={carouselContainer}>
            {data?.map((item) => {
              const posterUrl = item?.poster_path ? url.poster + item?.poster_path : PosterFallBack
              return (
                <div
                  key={item?.id}
                  className="w-[125px] cursor-pointer md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)] flex-shrink-0"
                  onClick={() => navigate(`/${item?.media_type || endPoint}/${item?.id}`)}
                >
                  <div className="relative w-full aspect-[1/1.5] bg-cover bg-center mb-8 flex items-end justify-between p-[10px]">
                    <Img src={posterUrl} className="w-full h-full object-cover object-center" />
                    <CircleRating rating={item?.vote_average.toFixed(1)} className="w-10 h-10 relative top-[30px] bg-white flex-shrink-0 md:w-[50px] md:h-[50px]" />
                    <Genres data={item?.genre_ids.slice(0, 2)} />
                  </div>
                  <div className="text-white flex flex-col">
                    <span className="font-semibold lg:text-base mb-3 leading-6 ellipsis-1 md:text-sm">
                      {item?.title || item?.name}
                    </span>
                    <span className="text-sm opacity-50">
                      {dayjs(item?.release_date).format("MMM D, YYYY")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex gap-3 overflow-y-hidden -mr-5 -ml-5 px-5 md:gap-5 md:overflow-hidden md:m-0 md:p-0">
            {skeletonItem()}
            {skeletonItem()}
            {skeletonItem()}
            {skeletonItem()}
            {skeletonItem()}
          </div>
        )}
      </ContentWrapper>
    </div>
  )
}

export default Carousel
