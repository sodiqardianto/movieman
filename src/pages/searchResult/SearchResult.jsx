import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useParams } from 'react-router-dom';
import { fetchDataFromApi } from '../../utils/api';
import Spinner from '../../components/spinner/Spinner';
import ContentWrapper from '../../components/contentWrapper/ContentWrapper';
import MovieCard from '../../components/movieCard/MovieCard';

const SearchResult = () => {
  const [data, setData] = useState(null);
  const [pageNum, setPageNum] = useState(1);
  const [loading, setLoading] = useState(false);
  const { query } = useParams();

  const fetchInitialData = () => {
    setLoading(true);
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`)
      .then((res) => {
        setData(res);
        setPageNum((prev) => prev + 1);
        setLoading(false);
      });
  };

  const fetchNextPageData = () => {
    fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`)
    .then((res) => {
      if(data?.result) {
        setData({
          ...data,
          results: [...data?.results, ...res.results],
        });
      } else {
        setData(res);
      }
      setPageNum((prev) => prev + 1);
    });
  }

  useEffect(() => {
    setPageNum(1);
    fetchInitialData();
  }, [query]);

  return (
    <div className="min-h-[700px] pt-[100px]">
      {loading && <Spinner initial={true} />}
      {!loading && (
        <ContentWrapper>
          {data?.results?.length > 0 ? (
            <>
              <div className="text-2xl leading-8 text-white mb-[25px]">
                {`Search ${data?.total_results > 1 ? "results" : "result"} of '${query}'`}
              </div>
              <InfiniteScroll
                className="flex flex-row flex-wrap gap-[10px] mb-[50px] md:gap-[18px]"
                dataLength={data?.results?.length || []}
                next={fetchNextPageData}
                hasMore={pageNum <= data?.total_pages}
                loader={<Spinner />}
              >
                {data?.results?.map((item, index) => {
                  if (item.mediaType === "person") return;
                  return (
                    <MovieCard
                      key={index}
                      data={item}
                      fromSearch={true}
                    />
                  );
                })};
              </InfiniteScroll>
            </>
          ) : (
            <div className="text-3xl text-[#173d77] font-bold">
              Sorry, Result not found
            </div>
          )}
        </ContentWrapper>
      )}
    </div>
  )
}

export default SearchResult
