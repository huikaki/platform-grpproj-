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
import Cardnew from "./component/card/cardnew";
import MobileToolBar from "./component/mobiletoolbar/mobiletoolbar";
function UI() {
  const [display, setDisplay] = useState(false);
  const changeDisplayWidthByBtn = display ? "togglewidth" : "togglewidthAgain";
  const changeDivStyleByBtn = display
    ? "changeDivStyle"
    : "ToggleChangeDivStyle";
  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   async function fetchData() {
  //     try {
  //       const response = await axios.get(
  //         "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json"
  //       );
  //       setData(response.data);
  //       setLoading(false);
  //     } catch (error) {
  //       setError(error);
  //       setLoading(false);
  //     }
  //   }
  //   fetchData();
  // }, []);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error.message}</div>;
  // }

  return (
    <>
      {/* {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))} */}
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
        {/* bg-[#383838] */}
        <div
          className="w-[7680px] h-full bg-black 
    border: 1px solid white  max-sm:ml-[30px ]"
        >
          {/* {change not fixed - crystal} */}
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
            {/*short */}
          
            <div className="shortItems w-screen">
            <Cardnew />
            </div>

            <div className="ml-[20px] mb-[20px] 	flex flex-row gap-[18px]  ">
            
              <Card />
              {/* overflow-x-visible */}
              <Card />
              <Card />
              <Card />
            </div>
            {/* <div className="ml-[22px] mt-[27px]  max-sm:pl-[40%] ">Popular</div> */}
            {/* <div>Popular</div> */}
            <div className="ml-[20px]">
              {/* <div className="mx-[22px] mt-[27px]  gap-[10px] flex flex-row flex-wrap max-sm:mt-[60px]"> */}
              <VideoItem />
            </div>
            <div className="buttomNav sm:hidden">
            <MobileToolBar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UI;
