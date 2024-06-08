import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import VideoPopup from '../../../components/videoPopup/VideoPopup';
import Img from '../../../components/lazyLoadImage/Img';
import PlayIcon from '../detailsBanner/PlayIcon';

const VideoSection = ({ data, loading }) => {
    const [show, setShow] = useState(false);
    const [videoId, setVideoId] = useState(null);

    const loadingSkeleton = () => (
        <div className="skItem">
            <div className="thumb skeleton"></div>
            <div className="row skeleton"></div>
            <div className="row2 skeleton"></div>
        </div>
    );

    return (
        <div className="relative mb-[50px]">
            <ContentWrapper>
                <div className="text-2xl text-white mb-6">Official Videos</div>
                {!loading ? (
                    <div className="flex gap-3 overflow-x-auto -mr-5 -ml-5 px-5 md:gap-5 md:p-0 md:m-0">
                        {data?.map((video) => (
                            <div
                                key={video.id}
                                className="w-[150px] flex-shrink-0 cursor-pointer md:w-[25%]"
                                onClick={() => {
                                    setVideoId(video.key);
                                    setShow(true);
                                }}
                            >
                                <div className="mb-[15px] relative playbtn-circle">
                                    <Img
                                        src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                                        className="w-full block rounded-xl transition-all ease-in-out duration-700"
                                    />
                                    <div className="absolute top-0 items-center justify-center w-full h-full bg-black bg-opacity-40 flex">
                                        <PlayIcon
                                            width="40px"
                                            height="40px"
                                        />
                                    </div>
                                </div>
                                <div className="text-white text-sm leading-5 md:text-lg md:leading-6">
                                    {video.name}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="videoSkeleton">
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                        {loadingSkeleton()}
                    </div>
                )}
            </ContentWrapper>

            <VideoPopup
                show={show}
                setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
            />
        </div>
    );
};

export default VideoSection
