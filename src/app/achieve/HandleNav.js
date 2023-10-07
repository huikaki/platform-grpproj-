import React, { useState } from "react";

const HandleNav = () => {
  const [isHidden, setIsHidden] = useState(false);

  const handleClick = () => {
    setIsHidden(true);
  };

  const handleClickAgain = () => {
    setIsHidden(false);
  };

  const highlightStyle = isHidden ? "hidden" : "notHidden";

  return (
    <div
      //   style={highlightStyle}
      className={highlightStyle}
      onClick={handleClick}
      onMouseLeave={handleClickAgain}
    >
      Hover over me to see the style change!
    </div>
  );
};

export default HandleNav;
