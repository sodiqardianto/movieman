import React from 'react'
import ReactPlayer from 'react-player/youtube';
import { BsXLg } from'react-icons/bs'

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {

    const hidePopup = () => {
        setShow(false);
        setVideoId(null);
    };

    return (
        <div className={`flex justify-center items-center w-full h-full fixed top-0 left-0 z-10 ${show ? "opacity-100 visible" : "opacity-0 invisible"}`}>
            <div className={`absolute top-0 left-0 w-full h-full bg-blur-video bg-black-25 transition-opacity duration-[400] ${show ? "opacity-100" : "opacity-0"} `} onClick={hidePopup}></div>
            <div className={`relative w-[802px] aspect-[16/9] bg-white transition-transform duration-[250] ${show ? "transform scale-100" : "transform scale-[20]"} `}>
                <span
                    className="absolute -top-[40px] right-0 text-white cursor-pointer" onClick={hidePopup}
                >
                    <BsXLg className="text-3xl" />
                </span>
                <ReactPlayer
                    url={`https://www.youtube.com/watch?v=${videoId}`}
                    controls
                    width="100%"
                    height="100%"
                    // playing={true}
                />
            </div>
        </div>
    );
}

export default VideoPopup
