import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import { useSelector } from 'react-redux';
import Img from '../../../components/lazyLoadImage/Img';
import PosterFallBack from '../../../assets/no-poster.png';
import dayjs from 'dayjs';
import Genres from '../../../components/genres/Genres';
import CircleRating from '../../../components/circleRating/CircleRating';
import PlayIcon from './PlayIcon';
import VideoPopup from '../../../components/videoPopup/VideoPopup';

const DetailsBanner = ({ video, crew }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const { url } = useSelector((state) => state.home);

    const { mediaType, id } = useParams();
    const { data, loading } = useFetch(`/${mediaType}/${id}`);

    const director = crew?.filter((f) => f.job === "Director");
    const writer = crew?.filter((f) => f?.job == "Screenplay" || f?.job == "Story" || f?.job == "Writer");

    const _genres = data?.genres?.map(genre => genre.id);

    const toHoursAndMinutes = (totalMinutes) => {
        const hours = Math.floor(totalMinutes / 60);
        const minutes = totalMinutes % 60;
        return `${hours}h${minutes > 0 ? ` ${minutes}m` : ''}`;
    }

    return (
        <div className="w-full bg-blackOne pt-[100px] mb-[50px] md:mb-0 md:pt-[120px] min-h-[700px]">
            {!loading ? (
                <>
                    {!!data && (
                        <React.Fragment>
                            <div className="w-full h-full absolute top-0 left-0 opacity-10 overflow-hidden">
                                <Img
                                    src={url.backdrop + data?.backdrop_path}
                                    className="w-full h-full object-cover object-center"
                                    wrapperClassName={"w-full h-full"}
                                />
                            </div>
                            <div className="w-full h-[250px] bg-opacity-layer absolute bottom-0 left-0 "></div>
                            <ContentWrapper>
                                <div className="flex relative flex-col gap-[25px] md:gap-[50px] md:flex-row">
                                    <div className="flex-shrink-0">
                                        {data?.poster_path ? (
                                            <Img src={url?.poster + data?.poster_path} className="w-full block rounded-xl md:max-w-[350px]" />
                                        ) : (
                                            <Img src={PosterFallBack} className="w-full block rounded-xl md:max-w-[350px]" />
                                        )}
                                    </div>
                                    <div className="text-white">
                                        <div className="text-[28px] leading-10 md:text-3xl md:leading-[44px]">
                                            {`${data?.name || data?.title} (
                                            ${dayjs(data?.release_date).format("YYYY")}
                                        )`}
                                        </div>

                                        <div className="text-xs leading-6 mb-4 italic opacity-50 md:text-sm md:leading-7">
                                            {data?.tagline}
                                        </div>

                                        <Genres
                                            data={_genres}
                                            className="mb-6"
                                        />

                                        <div className="flex items-center gap-6 mb-6">
                                            <CircleRating
                                                rating={data?.vote_average.toFixed(1)}
                                                className="max-w-[70px] font-bold"
                                                backgroundColor="white"
                                            />
                                            <div
                                                className="flex items-center gap-5 cursor-pointer hover:text-blueNew playbtn-circle"
                                                onClick={() => {
                                                    setShow(true);
                                                    setVideoId(video?.key);
                                                }}
                                            >
                                                <PlayIcon />
                                                <span className="text-base font-medium">
                                                    Watch Trailer
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mb-6">
                                            <div className="text-2xl mb-[10px]">Overview</div>
                                            <div className="leading-6 md:pr-[100px]">
                                                {data?.overview}
                                            </div>
                                        </div>

                                        <div className="border-b border-white/10 py-4 flex">
                                            {data?.status && (
                                                <div className="mr-[10px] flex flex-row flex-wrap">
                                                    <span className="mr-[10px] opacity-100 leading-6 font-semibold">
                                                        Status:{" "}
                                                    </span>
                                                    <span className="mr-[10px] opacity-50 leading-6">
                                                        {data?.status}
                                                    </span>
                                                </div>
                                            )}

                                            {data?.release_date && (
                                                <div className="mr-[10px] flex flex-row flex-wrap">
                                                    <span className="mr-[10px] opacity-100 leading-6 font-semibold">
                                                        Release Date:{" "}
                                                    </span>
                                                    <span className="mr-[10px] opacity-50 leading-6">
                                                        {dayjs(data?.release_date).format("MMM D, YYYY")}
                                                    </span>
                                                </div>
                                            )}

                                            {data?.runtime && (
                                                <div className="mr-[10px] flex flex-row flex-wrap">
                                                    <span className="mr-[10px] opacity-100 leading-6 font-semibold">
                                                        Runtime:{" "}
                                                    </span>
                                                    <span className="mr-[10px] opacity-50 leading-6">
                                                        {toHoursAndMinutes(data?.runtime)}
                                                    </span>
                                                </div>
                                            )}
                                        </div>

                                        {director?.length > 0 && (
                                            <div className="border-b border-white/10 py-4 flex">
                                                <div className="mr-[10px] flex flex-row flex-wrap">
                                                    <span className="mr-[10px] opacity-100 leading-6 font-semibold">
                                                        Director:{" "}
                                                    </span>
                                                    <span className="mr-[10px] opacity-50 leading-6">
                                                        {director?.map((d, i) => (
                                                            <span key={i}>
                                                                {d?.name}
                                                                {director.length - 1 !== i && ", "}
                                                            </span>
                                                        ))}
                                                    </span>
                                                </div>
                                            </div>
                                        )}

                                        {writer?.length > 0 && (
                                            <div className="border-b border-white/10 py-4 flex">
                                                <div className="mr-[10px] flex flex-row flex-wrap">
                                                    <span className="mr-[10px] opacity-100 leading-6 font-semibold">
                                                        Writer:{" "}
                                                    </span>
                                                    <span className="mr-[10px] opacity-50 leading-6">
                                                        {writer?.map((d, i) => (
                                                            <span key={i}>
                                                                {d?.name}
                                                                {writer.length - 1 !== i && ", "}
                                                            </span>
                                                        ))}
                                                    </span>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                
                                <VideoPopup
                                    show={show}
                                    setShow={setShow}
                                    videoId={videoId}
                                    setVideoId={setVideoId}
                                />
                            </ContentWrapper>
                        </React.Fragment>
                    )}
                </>
            ) : (
                <div className="flex relative flex-col gap-[25px] md:gap-[50px] md:flex-row">
                    <ContentWrapper className="flex gap-[50px]">
                        <div className="flex-shrink-0 w-full block rounded-xl aspect-[1/1.5] md:max-w-[350px] skeleton"></div>
                        <div className="w-full ">
                            <div className="row-banner skeleton"></div>
                            <div className="row-banner skeleton"></div>
                            <div className="row-banner skeleton"></div>
                            <div className="row-banner skeleton"></div>
                            <div className="row-banner skeleton"></div>
                            <div className="row-banner skeleton"></div>
                            <div className="row-banner skeleton"></div>
                        </div>
                    </ContentWrapper>
                </div>
            )}
        </div>
    )
}

export default DetailsBanner
