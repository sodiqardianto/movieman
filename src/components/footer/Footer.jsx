import React from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blackThree py-12 text-white relative">
      <ContentWrapper className="flex flex-col items-center">
        <ul className="list-none flex items-center justify-center gap-4 mb-5 md:mb-8 md:gap-8">
          <li className="transition-all ease-in-out duration-300 cursor-pointer text-xs md:text-sm hover:text-blueNew">Term Of Use</li>
          <li className="transition-all ease-in-out duration-300 cursor-pointer text-xs md:text-sm hover:text-blueNew">Privacy & Policy</li>
          <li className="transition-all ease-in-out duration-300 cursor-pointer text-xs md:text-sm hover:text-blueNew">About</li>
          <li className="transition-all ease-in-out duration-300 cursor-pointer text-xs md:text-sm hover:text-blueNew">Blog</li>
          <li className="transition-all ease-in-out duration-300 cursor-pointer text-xs md:text-sm hover:text-blueNew">FAQ</li>
        </ul>
        <div className="text-xs leading-5 opacity-50 items-center max-w-[800px] mb-5 md:text-sm md:mb-8">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim ullam eveniet nihil sequi molestias. Totam, praesentium. Cumque, officia repellat, atque repudiandae nemo nisi autem sed est delectus possimus quam placeat impedit velit suscipit a obcaecati? Debitis, recusandae veritatis repellat aspernatur id nulla officia libero. Magni magnam expedita porro vitae sint sequi, harum eius est in nihil vero hic voluptas quia quod blanditiis mollitia quae minus. Similique, molestias hic eos doloribus minima repellat rerum commodi quae, adipisci praesentium cum? Iure, maxime dolor! Incidunt atque amet molestias necessitatibus! Voluptate maxime optio aliquid consequuntur, voluptas quibusdam accusamus velit, iste ex facilis, commodi nulla!
        </div>
        <div className="flex items-center justify-center gap-3">
          <span className="w-14 h-14 rounded-full bg-blackThree flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300 hover:text-blueNew hover:shadow-2xl hover:shadow-blueNew">
            <FaFacebookF />
          </span>
          <span className="w-14 h-14 rounded-full bg-blackThree flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300 hover:text-blueNew hover:shadow-2xl hover:shadow-blueNew">
            <FaInstagram />
          </span>
          <span className="w-14 h-14 rounded-full bg-blackThree flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300 hover:text-blueNew hover:shadow-2xl hover:shadow-blueNew">
            <FaTwitter />
          </span>
          <span className="w-14 h-14 rounded-full bg-blackThree flex items-center justify-center cursor-pointer transition-all ease-in-out duration-300 hover:text-blueNew hover:shadow-2xl hover:shadow-blueNew">
            <FaLinkedin />
          </span>
        </div>
      </ContentWrapper>
    </footer>
  )
}

export default Footer
