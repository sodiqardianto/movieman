import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

const Trending = () => {
    const [endPoint, setEndPoint] = useState("day");

    const { data, loading } = useFetch(`/trending/movie/${endPoint}`);
    
    const onTabChange = (tab) => {
        setEndPoint(tab === "Day" ? "day" : "week");
    }
    
    return (
        <div className="relative mb-16">
            <ContentWrapper className="flex items-center justify-between mb-5">
                <span className="font-normal text-2xl text-white">Trending</span>
                <SwitchTabs data={["Day", "Week"]} onTabChange={onTabChange} />
            </ContentWrapper>
            <Carousel data={data?.results} loading={loading} />
        </div>
    )
}

export default Trending
