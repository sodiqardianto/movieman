import React from "react";
import ContentWrapper from "../../components/contentWrapper/ContentWrapper";

const PageNotFound = () => {
    return (
        <div className="h-[700px] pt-[200px]">
            <ContentWrapper className="items-center text-black-light flex flex-col">
                <span className="text-[150px] font-bold">404</span>
                <span className="text-5xl">Page not found!</span>
            </ContentWrapper>
        </div>
    );
};

export default PageNotFound;