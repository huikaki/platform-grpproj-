import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    console.log(`Searching for ${searchTerm}`);
  };

  return (
    <div className="container mx-auto mt-20">
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full h-10 px-4 pr-10 text-sm bg-white border border-gray-300 rounded-lg lg:w-80 focus:outline-none"
            placeholder="Search term..."
          />
        </div>
        {searchTerm && (
          <div className="mt-10 text-2xl">Search term: {searchTerm}</div>
        )}
      </div>
    </div>
  );
}
