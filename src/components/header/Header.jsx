import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import ContentWrapper from '../contentWrapper/ContentWrapper';
import logo from '../../assets/movieman-logo-text.png';
import { HiOutlineSearch } from 'react-icons/hi';
import { VscChromeClose } from 'react-icons/vsc';
import { SlMenu } from 'react-icons/sl';

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location])
  
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  }

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY])

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setTimeout(() => {
        setShowSearch(false);
        setQuery("");
      }, 1000);
    }
  };

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  }
  
  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  }

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false)
  }
  
  return (
    <header className={`${show} fixed w-full h-16 z-20 flex items-center transition-all ease-in-out duration-500 ${mobileMenu ? "bg-blackThree" : ""} `}>
      <ContentWrapper className="flex items-center justify-between">
        <div className="cursor-pointer">

          <img src={logo} alt="Logo Movieman" height={"50px"} onClick={() => navigate("/")} />
        </div>
        <ul className={`list-none items-center md:flex ${mobileMenu ? "flex absolute top-16 left-0 bg-blackThree flex-col w-full py-5 animate-animateMobileMenu" : "hidden"}`}>
          <li className={`h-16 flex items-center mx-4 text-white font-medium relative cursor-pointer hover:text-blueNew ${mobileMenu ? "text-sm w-full h-auto py-4 px-5 m-0 flex flex-col items-start last:hidden" : ""}`} onClick={() => navigationHandler("movie")}>Movies</li>
          <li className={`h-16 flex items-center mx-4 text-white font-medium relative cursor-pointer hover:text-blueNew ${mobileMenu ? "text-sm w-full h-auto py-4 px-5 m-0 flex flex-col items-start last:hidden" : ""}`} onClick={() => navigationHandler("tv")}>Tv Shows</li>
          <li className={`h-16 flex items-center mx-4 text-white font-medium relative cursor-pointer hover:text-blueNew ${mobileMenu ? "text-sm w-full h-auto py-4 px-5 m-0 flex flex-col items-start last:hidden" : ""}`}>
            <HiOutlineSearch className="mr-0 text-md" onClick={openSearch} />
          </li>
        </ul>
        
        <div className="flex items-center gap-5 md:hidden">
          <HiOutlineSearch className="text-md text-white" onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose className="text-md text-white" onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu className="text-md text-white" onClick={openMobileMenu} />
          )}
        </div>
      </ContentWrapper>
      {showSearch && (
        <div className="w-full h-16 bg-white absolute top-16 animate-animateMobileMenu">
          <ContentWrapper>
          <div className="flex items-center h-10 mt-3 w-full">
              <input
              type="text"
              placeholder="Search for a movie or tv show..."
              onChange={(e) => setQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              className="w-full h-12 bg-white outline-0 border-0 rounded-l-3xl px-4 text-xs md:h-16 md:text-sm md:px-7"
              />
              <VscChromeClose className="text-md flex-shrink-0 ml-3 cursor-pointer" onClick={() => setShowSearch(false)} />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  )
}

export default Header
