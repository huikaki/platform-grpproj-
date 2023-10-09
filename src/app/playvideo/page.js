"use client"
import Image from "next/image";
import './playvideo.scss'
import LeftNav from "../component/leftNav/LeftNav";
import LeftLibrary from "../component/leftLibrary/LeftLibrary";
import { useState } from "react";
import Search from "../component/search/Search";
import Sort from "../component/sort/Sort";
function playvideo(){
    const [display, setDisplay] = useState(false);
  const changeDisplayWidthByBtn = display ? "togglewidth" : "togglewidthAgain";
  const changeDivStyleByBtn = display
    ? "changeDivStyle"
    : "ToggleChangeDivStyle";

    return (
       <div className="flex flex-row h-screen">
        <div className="">
          <Image
            src="./Hamburger.svg"
            width={22}
            height={22}
            alt="hamburger"
            className={`menubar max-[4096px]:absolute mt-4 ml-5 `}
            onClick={() => setDisplay((prevDisplay) => !prevDisplay)}
          ></Image>
          <Image
            src="./AWA Logo.svg"
            width={36}
            height={40}
            alt="logo"
            className="logo max-sm:fixed max-[4096px]:absolute mt-3 ml-11 max-sm:ml-[3px] "
          ></Image>
          <div
            className={` max-2xl:flex flex-col bg-[#212121] w-[166px] h-full m-0 max-xl:w-[110px] items-start max-sm:hidden ${changeDivStyleByBtn} `}
          >
            <div
              className={`${changeDisplayWidthByBtn} max-2xl:flex flex-col w-[200px] mt-[66px] `}
            >
              {/* start of the list part1 */}
              <LeftNav name={changeDivStyleByBtn}  />
              <hr className="divide-y-4 divide-gray-300  mt-[30px] mb-[30px]"></hr>
              <LeftLibrary name={changeDivStyleByBtn} />
            </div>
          </div>
        </div>
        <div className="w-[7680px] h-full bg-black 
    border: 1px solid white  max-sm:ml-[30px ]"
        >
          <div className="">
            <div className="flex flex-row search-container">
              <Search />
            </div>
            <div className="ml-[22px] mr-[11px]">
              {/* <div className="flex flex-row mt-[10px] mx-[22px]  max-sm:hidden">  max-moresm:hidden */}
              <div className="flex flex-row mt-[2%] max-sm:mt-[15%] mb-10">
                <Sort />
              </div>
            </div>
            </div>
            </div>
            </div>

    )
}
export default playvideo;