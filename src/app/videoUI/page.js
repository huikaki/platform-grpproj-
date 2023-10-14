"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import LeftNav from "../component/leftNav/LeftNav";
import LeftLibrary from "../component/leftLibrary/LeftLibrary";
import Search from "../component/search/Search";
import VideoItem from "../component/videoItem/VideoItem";
import VideoItemContainer from "../component/videoItem/videoitemcontainer";

function UI() {
  const [display, setDisplay] = useState(false);
  const changeDisplayWidthByBtn = display ? "togglewidth" : "togglewidthAgain";
  const changeDivStyleByBtn = display
    ? "changeDivStyle"
    : "ToggleChangeDivStyle";

  return (
    <>
      {/* {data.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))} */}
      <div className="flex flex-row h-[100%]">
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
        <div className="h-full bg-black flex flex-col">
          <div className=" bg-black">
            {/* <div className="static bg-black  max-w-screen-morexl	"> */}

            <Search />

            {/* <div className="w-[1000px] h-[500px] border-2 flex flex-row"> */}
            <div className="flex flex-row mt-[2%] ml-[2%] ">
              <video
                style={{ with: 960, height: 540 }}
                controls={false}
                onClick={(e) => {
                  console.log(e.target.paused);
                  const videoEle = e.target;
                  if (e.target.paused) {
                    e.target.play();
                  } else {
                    e.target.pause();
                  }
                  // console.log("clicked", index);
                }}
              >
                <source
                  src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4"
                  type="video/mp4"
                />
              </video>

              <div className="ml-[2%] h-0 max-lesssm:hidden">
                <VideoItemContainer />
              </div>
            </div>
            <div className="mt-4 ml-4 w-[76%]">
              <div className="flex flex-col">
                <h1>Blind Woodturner: Turning passion into fine art</h1>
                <div className="flex flex-row justify-between flex-wrap">
                  <h3>576,969 views . Oct 8, 2021</h3>
                  <div className="flex flex-row flex-wrap">
                    <Image
                      className="mx-4"
                      src="/like.png"
                      width={32}
                      height={32}
                      alt="logo"
                      color="white"
                    ></Image>
                    <div>like</div>
                    <Image
                      className="mx-4"
                      src="/dislike.png"
                      width={32}
                      height={32}
                      alt="logo"
                      color="white"
                    ></Image>
                    <div>dislike</div>
                    <Image
                      className="mx-4"
                      src="/share.png"
                      width={32}
                      height={32}
                      alt="logo"
                      color="white"
                    ></Image>
                    <div>share</div>
                    <Image
                      className="mx-4"
                      src="/save.png"
                      width={32}
                      height={32}
                      alt="logo"
                      color="white"
                    ></Image>
                    <div>save</div>
                    <div className="mx-4">...</div>
                    <hr></hr>
                  </div>
                </div>
              </div>
              <div className="flex flex-col mt-[2%]">
                <div className="flex flex-row  justify-between ">
                  <div className="flex flex-row">
                    <div className="profile w-[32px] h-[32px] border-1 rounded-[9999px]	bg-white mx-2"></div>
                    <div className="name mx-2">Marcus Levin</div>
                  </div>
                  <button className="bg-red-800	 pt-2 pb-2 pl-1 pr-1">
                    SUBSCRIBES
                  </button>
                </div>
              </div>
              <div className="w-[75%] ml-[64px]">
                Chris Fisher, also known as the Blind Woodturner, learned his
                craft by listening to hundreds of hours of YouTube videos and
                experimenting in his workshop. Now he’s a YouTube creator
                himself, sells his products worldwide, and does demonstrations
                all around the country.
              </div>
              <hr className="mt-[2%]"></hr>
              <div className="flex flex-row mt-[2%]">
                <div className="mx-2">286 Comments</div>
                <Image
                  className="mx-4"
                  src="/sort.png"
                  width={32}
                  height={32}
                  alt="logo"
                  color="white"
                ></Image>
                <div className="mx-2">Sort by</div>
              </div>
            </div>
          </div>
          <div>{/* <div className="flex flex-col">A</div> */}</div>
        </div>
      </div>
      {/* <div className="">A</div> */}
      {/* </div> */}
    </>
  );
}
export default UI;
