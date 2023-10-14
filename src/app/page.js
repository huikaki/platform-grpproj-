"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import Search from "./component/search/Search";
import Sort from "./component/sort/Sort";
import LeftNav from "./component/leftNav/LeftNav";
import { leftNavContent } from "./component/leftNav/leftNavContent";
import { VideoContent } from "./component/videoItem/VideoContent";
import VideoItem from "./component/videoItem/VideoItem";
import SearchFilter from "./component/search/SearchFunction";
import LeftLibrary from "./component/leftLibrary/LeftLibrary";
import Card from "./component/card/Card";
import InputBar from "./component/autosearch/autosearch";
import Cardnew from "./component/card/cardnew";
import MobileToolBar from "./component/mobiletoolbar/mobiletoolbar";
import IconAvatars from "./component/mobileicongroup/hotgame";
import { Hotgamestyle } from "./component/mobileicongroup/style";

function UI() {
  const [display, setDisplay] = useState(false);
  const changeDisplayWidthByBtn = display ? "togglewidth" : "togglewidthAgain";
  const changeDivStyleByBtn = display
    ? "changeDivStyle"
    : "ToggleChangeDivStyle";

  return (
    <div>
      {/* {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))} */}
      <div className="flex flex-row h-[2556px]">
        <div>
          <Image
            src="./Hamburger.svg"
            width={22}
            height={22}
            alt="hamburger"
            className={`absolute mt-4 ml-5 max-sm:hidden`}
            onClick={() => setDisplay((prevDisplay) => !prevDisplay)}
          ></Image>
          <Image
            src="./AWA Logo.svg"
            width={36}
            height={34}
            alt="logo"
            className="max-[4096px]:absolute mt-3 ml-11 max-sm:ml-[22px]"
          ></Image>
        </div>
        <div
          className={`max-2xl:flex flex-col bg-[#212121] w-[166px] h-full m-0 max-xl:w-[110px] items-start max-sm:hidden ${changeDivStyleByBtn}`}
        >
          <div
            className={`${changeDisplayWidthByBtn} max-2xl:flex flex-col w-[200px] mt-[66px] `}
          >
            {/* start of the list part1 */}
            <LeftNav name={changeDivStyleByBtn} />
            <hr
              className={`divide-y-4 divide-gray-300  mt-[30px] mb-[30px]`}
            ></hr>
            <LeftLibrary name={changeDivStyleByBtn} />
          </div>
        </div>

        {/* bg-[#383838] */}
        <div className="h-full bg-black">
          <div className="static bg-black ">
            {/* <div className="static bg-black  max-w-screen-morexl	"> */}
            <Search />

            <div className="ml-[22px] mr-[11px]">
              {/* <div className="flex flex-row mt-[10px] mx-[22px]  max-sm:hidden"> */}
              <div className="flex flex-row mt-[2%] pb-[15px] ">
                <Sort />
              </div>
            </div>
          </div>
          <div className="morethaniphone12:hidden" style={Hotgamestyle.word}>
            Hot Game
          </div>
          <div
            className="morethaniphone12:hidden"
            style={Hotgamestyle.container}
          >
            <IconAvatars />
          </div>
          <div className="flex flex-col ml-[1%]">
            <div className=" bg-black flex flex-row gap-[18px] mt-[2%] max-moresm:hidden ">
              <Cardnew />
            </div>

            {/* <div className="ml-[22px] mt-[27px]  max-sm:pl-[40%] ">Popular</div> */}
            {/* <div>Popular</div> */}
            <div className="mt-[3%] flex-wrap flex-1">
              {/* <div className="mx-[22px] mt-[27px]  gap-[10px] flex flex-row flex-wrap max-sm:mt-[60px]"> */}
              <VideoItem />
            </div>
          </div>
        </div>
      </div>
      <div className="morethaniphone12:hidden">
        <MobileToolBar />
      </div>
    </div>
  );
}

export default UI;
