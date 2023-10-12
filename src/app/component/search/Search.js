import Image from "next/image";
import "./search.scss";
// import "../../styles.scss";
import SearchFilter from "./SearchFunction";
import InputBar from "../autosearch/autosearch";
import Link from "next/link";
function Search() {
  return (
    <div>
      <div className="flex flex-row mt-4">
        <div className="mx-auto flex flex-row  max-sm:hidden">
          <div className="">
            <InputBar />
            {/* <input className="outline-none	p-[10px] text-[16px] border-none	search-bar  bg-[#181818] max-4k:w-[1000px] max-2k:w-[800px] max-less2k:w-[700px] max-2xl:w-[600px] max-xl:w-[500px] max-lg:w-[360px] max-moremd:w-[200px]max-sm:hidden" /> */}
            {/* <div className="search-bar "><SearchFilter /></div> */}
          </div>
          <Image
            src="/icons8-search-50.png"
            height={50}
            width={50}
            className="hoverEffectEl search-icon bg-[#323232]  max-sm:hidden"
          />
          <Image
            src="/Mic.svg"
            height={36}
            width={36}
            className="ml-6 max-md:hidden "
          />
        </div>

        <div className="hoverEffectEl tools flex flex-row max-sm:ml-[86%] ">
          <Image
            src="/record.svg"
            height={24}
            width={24}
            className="hoverEffectEl record mt-2.5 max-md:hidden"
          />
          <Image
            src="/more.svg"
            height={24}
            width={24}
            className="hoverEffectEl more mt-2.5 max-sm:hidden"
          />
          <Image
            src="/alert.svg"
            height={24}
            width={24}
            className="hoverEffectEl alert mt-2.5"
          />
<<<<<<< HEAD
          <div className="search-group mt-2 flex flex-row max-sm:hidden">
            {/* search box */}
            <input
              id="input"
              // className="search-bar mt-2 ml-[20%] bg-[#181818] 2k:w-[1000px] fullhd:w-[800px] max-less2xl:w-[650px] max-morelg:w-[450px] max-lg:w-[300px] max-sm:hidden"
              className="search-bar mt-2 bg-[#181818] 2k:w-[1000px]  xl:w-[600px] md:w-[340px]"
            />
            {/* <div className="search-bar "><SearchFilter /></div> */}
            {/* search icon */}
            <Image
              src="/icons8-search-50.png"
              height={50}
              width={50}
              className="hoverEffectEl search-icon bg-[#323232]  max-sm:hidden"
            />
            <Image
              src="/Mic.svg"
              height={36}
              width={36}
              className="ml-6 max-md:hidden "
            />
          </div>
          <div className="hoverEffectEl tools flex flex-row absolute right-[32px] ">
            <Image
              src="/record.svg"
              height={24}
              width={24}
              className="hoverEffectEl record mt-2.5 max-md:hidden"
            />
            <Image
              src="/more.svg"
              height={24}
              width={24}
              className="hoverEffectEl more mt-2.5 max-sm:hidden"
            />
            {/* alert function */}
            <Image
              src="/alert.svg"
              height={24}
              width={24}
              className="hoverEffectEl alert mt-2.5"
            />
            <Link href="/login">
              <Image
                src="/Profile.svg"
                height={24}
                width={24}
                className="hoverEffectEl Profile mt-2.5"
              />
            </Link>
          </div>
=======
          <Image
            src="/Profile.svg"
            height={24}
            width={24}
            className="hoverEffectEl Profile mt-2.5"
          />
>>>>>>> 544cd4c4fec0b774270ddc8424195c9eecda5cdd
        </div>
      </div>
    </div>
  );
}
export default Search;
