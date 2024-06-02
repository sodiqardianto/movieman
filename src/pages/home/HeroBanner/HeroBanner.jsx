import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  
  const navigate = useNavigate();
  const { data, loading } = useFetch("/movie/upcoming");

  const { url } = useSelector((state) => state.home);

  useEffect(() => {
    const bg = url.backdrop + data?.results[Math.floor(Math.random() * 20)]?.backdrop_path
    setBackground(bg);
  }, [data])

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };
  
  return (
    <div className="w-full h-[450px] bg-blackOne flex items-center relative md:h-[700px]">
      {!loading &&
      <div className="w-full h-full absolute top-0 left-0 opacity-50 overflow-hidden">
        <Img src={background} className="w-full h-full object-cover object-center" />
      </div>
      }

      <div className="w-full h-[250px] bg-gradient-to-b from-transparent to-[#04152d] absolute bottom-0 left-0"></div>
      <ContentWrapper>
        <div className="flex flex-col items-center text-white text-center relative max-w-[800px] mx-auto">
          <span className="text-5xl font-bold mb-3 md:mb-0 md:text-8xl">Welcome.</span>
          <span className="text-xs font-medium mb-10 md:text-base">Millions of movies, TV shows and people to discover. Explore now.</span>
          <div className="flex items-center w-full">
            <input
            type="text"
            placeholder="Search for a movie or tv show..."
            onChange={(e) => setQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            className="w-[calc(100%-100px)] h-12 bg-white outline-0 rounded-l-3xl px-4 text-xs md:w-[calc(100% - 150px)] md:h-16 md:text-sm md:px-7"
            />
            <button className="w-full h-12 bg-gradient-to-r from-cyan-500 to-blue-500 text-white outline-0 border-0 rounded-r-3xl text-base cursor-pointer md:w-[150px] md:h-16 md:text-lg">Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  )
}

export default HeroBanner
