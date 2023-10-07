import React, { useState } from "react";
import "../../styles.scss";

function SearchFilter() {
  const [filterText, setFilterText] = useState("");
  const colors = ["Red", "Yellow", "Blue", "Green"];

  const handleInputChange = (e) => {
    const inputValue = e.target.value;

    setFilterText(inputValue);
  };

  const filteredColors = colors.filter((color) =>
    color.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="flex flex-col">
      <input
        className=": bg-[#181818] mt-2  max-sm:hidden"
        id="input"
        value={filterText}
        onChange={handleInputChange}
      />
      <p
        className="absolute mt-[40px] bg-[#181818] rounded px-[80px]  text-white"
        id="demo"
      >
        {filterText ? filteredColors.join(", ") : ""}
      </p>
    </div>
  );
}

export default SearchFilter;
