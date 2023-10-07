import "./Videocontainer.css";

function Videocontainer() {
  return (
    <div className="container">
      <img
        className="video-size"
        style={{ width: 242, height: 136 }}
        src="https://via.placeholder.com/242x136"
      />
      {/* <!-- video size --> */}
      <div className="video-description">
        {/* <!-- video info --> */}
        <img
          className="video-img"
          style={{ width: 32, height: 32, borderRadius: 9999 }}
          src="https://via.placeholder.com/32x32"
        />
        {/* <!-- video info user pic --> */}
        <div className="video-title-box">
          {/* <!-- video info box --> */}
          <div className="video-title-box-heading">
            Bulbuli | Coke Studio Bangla |<br />
            Season One | Ritu Raj X Nandita
          </div>
          {/* <!-- video info title --> */}
          <div className="video-title-box-info">
            <div className="video-title-box-el1">
              {/* <!-- video info sub title --> */}
              <div className="video-title-box-el2">
                <div className="video-title-box-username">
                  Coke Studio Bangla
                </div>
              </div>
              <div className="video-title-box-info-icon">
                <div></div>
                {/* <!-- video info box tick --> */}
              </div>
            </div>
            <div className="video-title-box-view-day">
              <div className="video-title-box-view">1.5 M views</div>
              {/* <!-- video info view --> */}
              <div className="video-title-box-day">2 days ago</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Videocontainer;
