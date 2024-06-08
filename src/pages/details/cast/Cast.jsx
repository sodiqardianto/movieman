import React from 'react'
import { useSelector } from 'react-redux'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper';
import Img from '../../../components/lazyLoadImage/Img';
import AvatarDefault from "../../../assets/avatar.png";

const Cast = ({ data, loading }) => {
    const { url } = useSelector((state) => state.home);
    const skeleton = () => (
        <div className="skItem">
            <div className="w-[125px] h-[125px] rounded-full mb-[15px] md:w-[175px] md:h-[175px] md:mb-[25px] skeleton"></div>
            <div className="w-full h-5 rounded-lg mb-[10px] skeleton"></div>
            <div className="w-[75%] h-5 rounded-[10px] my-auto skeleton"></div>
        </div>
    )

    return (
        <div className="relative mb-[50px]">
            <ContentWrapper>
                <div className="text-2xl text-white mb-[25px]">Top Cast</div>
                {!loading ? (
                    <div className="flex gap-5 overflow-y-hidden -mr-5 -ml-5 px-5 md:m-0 md:p-0">
                        {data?.map((item) => {
                            let imgUrl = item.profile_path ? url.profile + item.profile_path : AvatarDefault;
                            
                            return (
                                <div
                                key={item.id}
                                className="text-center text-white">
                                    <div className="w-[125px] h-[125px] rounded-full overflow-hidden mb-[15px] md:w-[175px] md:h-[175px] md:mb-[25px]">
                                        <Img src={imgUrl} />
                                    </div>
                                    <div className="text-sm leading-5 font-semibold md:text-lg md:leading-6 ">
                                        {item.name}
                                    </div>
                                    <div className="text-sm leading-5 opacity-50 md:text-base md:leading-6">
                                        {item.character}
                                    </div>
                                </div>
                            );
                        })};
                    </div>
                ) : (
                    <div className="flex gap-5 overflow-y-hidden -mr-5 -ml-5 px-5 md:m-0 md:p-0">
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                        {skeleton()}
                    </div>
                )}
            </ContentWrapper>
        </div>
    )
}

export default Cast
