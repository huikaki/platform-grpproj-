import React, { useEffect, useState } from "react";
import axios from "axios";

function VideoItemContainer() {
  const [data, setData] = useState([]);
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
    <div>
      {data.map((item, index) => (
        <div key={index}>
          <div className="hoverEffectEl video-size ">
            <video
              className="w-[240px] mt-[20px] mb-[20px]"
              controls={false}
              onClick={(e) => {
                const videoEle = e.target;
                if (e.target.paused) {
                  e.target.play();
                } else {
                  e.target.pause();
                }
                console.log("clicked", index);
              }}
            >
              <source src={item.videoUrl} type="video/mp4" />
            </video>
          </div>
        </div>
      ))}
    </div>
  );
}

export default VideoItemContainer;
