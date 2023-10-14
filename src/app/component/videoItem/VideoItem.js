import { VideoContent } from "./VideoContent";
import "./videoItem.scss";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import { Player } from "video-react";
// import Search from "./component/search/Search";
// import Sort from "./component/sort/Sort";
// import LeftNav from "./component/leftNav/LeftNav";
// import { leftNavContent } from "./component/leftNav/leftNavContent";
// import SearchFilter from "./component/search/SearchFunction";

function VideoItem() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          "https://gist.githubusercontent.com/poudyalanil/ca84582cbeb4fc123a13290a586da925/raw/14a27bd0bcd0cd323b35ad79cf3b493dddf6216b/videos.json"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <>
      <div className="">
        {/* overflow-y-scroll  */}
        {/* <div className="flex flex-row flex-wrap gap-3 justify-evenly "> */}
        <div className="video-grid video-flex w-[100%] ">
          {data.map((item, index) => (
            <div key={index} className="flex-1 w-[100%]">
              <div className="hoverEffectEl video-size">
                <video
                  className="min-w-[340px] w-[100%]"
                  controls={false}
                  onClick={(e) => {
                    console.log(e.target.paused);
                    const videoEle = e.target;
                    if (e.target.paused) {
                      e.target.play();
                      // window.open(item.videoUrl, "_blank");
                    } else {
                      e.target.pause();
                    }
                    console.log("clicked", index);
                  }}
                >
                  <source src={item.videoUrl} type="video/mp4" />
                </video>
              </div>
              <div className="video-description">
                <div className="flex flex-row  ">
                  <div className="video-description-img">
                    <div className="video-description-text text-start ml-[42px]">
                      {item.title}

                      <div className="flex flex-col">
                        <div className="video-description-text-creator">
                          {item.author}
                        </div>
                        <div className="flex flex-row">
                          <div className="video-description-text-view">
                            {item.views}
                          </div>
                          <div className="video-description-text-time">
                            {item.uploadTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          {/* 用map handle */}
          {/* 改成card */}
        </div>
      </div>
    </>
  );
}
export default VideoItem;
