"use client"
import Image from "next/image";
import './playvideo.scss'
import LeftNav from "../component/leftNav/LeftNav";
import LeftLibrary from "../component/leftLibrary/LeftLibrary";
import { useState } from "react";
import Search from "../component/search/Search";
import Sort from "../component/sort/Sort";
import firestore from "../firebaseConfig" 
import { addDoc, collection, docDate } from "firebase/firestore/lite";
import { useAuthContext } from "../contexts/AuthContext";


function playvideo(){
    const [display, ] = useState(false);
  const changeDisplayWidthByBtn = display ? "togglewidth" : "togglewidthAgain";
  const changeDivStyleByBtn = display
    ? "changeDivStyle"
    : "ToggleChangeDivStyle";
    const { user } = useAuthContext();




    return (

       <div className="flex flex-row h-screen">
        <div className="">
          <Image
            src="./Hamburger.svg"
            width={22}
            height={22}
            alt="hamburger"
            className={`menubar max-[4096px]:absolute mt-4 ml-5 `}
            onClick={() => ((prevDisplay) => !prevDisplay)}
          ></Image>
          <Image
            src="./AWA Logo.svg"
            width={36}
            height={40}
            alt="logo"
            className="logo max-sm:fixed max-[4096px]:absolute mt-3 ml-11 max-sm:ml-[3px] "
          ></Image>
          </div>
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
        
        <div className="w-[7680px] h-full bg-black 
    border: 1px solid white  max-sm:ml-[30px ]"
        >
          <div className="video-">
            <div className="flex flex-row search-container">
            <Search />
            </div>
            <div className="video-group">
            <div className="video-continer">
              <video src="youtu.be/MLeIBFYY6UY" controls> </video>
              <div class="craeterInfo">
                <div class="icon">
                <img class="circleImg" src="https://cdn-icons-png.flaticon.com/128/4202/4202843.png"  />
                </div>
                <div>
                <h1>Video Title</h1>
                <h1>Creater Name</h1>
                </div>
              </div>
            </div>
            <div className="videoItems">
              <div className="card">
              <img src="https://i.ytimg.com/vi/0tZFQs7qBfQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATmo9lf0dQeGJqxal5Jp0pGjW6Qw" />
              <div className="video-info">
              <h2>This is a Title</h2>
              <h1>Creater  name</h1>
              <h1>觀看次數123</h1>
              </div>
              </div>

              <div className="card">
              <img src="https://i.ytimg.com/vi/0tZFQs7qBfQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATmo9lf0dQeGJqxal5Jp0pGjW6Qw" />
              <div className="video-info">
              <h2>This is a Title</h2>
              <h1>Creater  name</h1>
              <h1>觀看次數123</h1>
              </div>
              </div>

              <div className="card">
              <img src="https://i.ytimg.com/vi/0tZFQs7qBfQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATmo9lf0dQeGJqxal5Jp0pGjW6Qw" />
              <div className="video-info">
              <h2>This is a Title</h2>
              <h1>Creater  name</h1>
              <h1>觀看次數123</h1>
              </div>
              </div>

              <div className="card">
              <img src="https://i.ytimg.com/vi/0tZFQs7qBfQ/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATmo9lf0dQeGJqxal5Jp0pGjW6Qw" />
              <div className="video-info">
              <h2>This is a Title</h2>
              <h1>Creater  name</h1>
              <h1>觀看次數123</h1>
              </div>
              </div>
            </div>


            </div>
            </div>
            </div>
            </div>
    )
                
}
export default playvideo;